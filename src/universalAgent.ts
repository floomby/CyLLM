// Generic agent for querying a neo4j database

// PRIORITY getting stuck in backtracking loop sometimes
// TODO knowledge distillation and pruning
// TODO smarter result evaluation
// TODO make some tests
// MINOR figure out how to handle data compartmentalization in the database (neo4j might have something for this)
// MINOR gracefully handle neo4j db errors (not query errors, we got these covered)

import { driver, openai } from "./globals";
import neo4j from "neo4j-driver";

import { inspect } from "util";
import {
  WriteStream,
  createWriteStream,
  existsSync,
  mkdirSync,
  writeFileSync,
} from "fs";
import { assert } from "console";

import { allProperties } from "./cypher/utils";
import { doesPropertyExistAnywhere } from "./dbHelpers";
import { AgentBase, AgentOptions, Attempt, QueryResultType } from "./agentBase";
import { AttemptSearchTree, SearchTreeNode } from "./searchTree";
import {
  ChatCompletion,
  CompletionCreateParams,
} from "openai/resources/chat/completions";

enum AgentBehaviorMode {
  Ready,
  Answer,
  Explore,
  NewIdea,
}

// prettier-ignore
const initialSystem =
`Respond ONLY with valid neo4j cypher queries. Do not assume any knowledge beyond what is 
already discovered. Prefer case insensitive queries.`;

// prettier-ignore
const emptySystem =
`Respond only with valid neo4j cypher queries. DO NOT use labels unless you are sure they exist. DO NOT use 
relationships unless you are sure that they exist. The data you are looking for is probably not where you think 
it is and will require looking for relationships that you have not yet discovered. Prefer case insensitive 
queries. It is likely that the information is related with more distant relationships than you think or buried 
in node properties.`;

// prettier-ignore
const errorSystem =
`Respond only with valid neo4j cypher queries. Fix the users query in accordance with the error message.`

// prettier-ignore
const exploreSystem =
`Help the user discover new information about the knowledge graph in the database. Then tell the user what you 
have discoverd in a concise way. Your response should be a concise representation of what you discovered.`;

// prettier-ignore
// const newIdeaSystem =
// `Respond only with valid neo4j cypher queries. DO NOT use labels unless you are sure they exist. DO NOT use
// relationships unless you are sure that they exist. If you would like to discover if a relationship exists,
// create a query to discover if it exists. If it is unclearer what the obvious query should be then create a
// simple query that will uncover more information about the knowledge graph. If the query was not working then
// suggest something else.`;

// prettier-ignore
const evaluateSystem =
`A cypher query, the query results, and a question will be provided. If the information provides the 
answer to the question, respond with the answer. Otherwise, respond by saying "insufficient information". 
DO NOT hallucinate. DO NOT rely on internal knowledge. ONLY base the answer on the provided information.`;

export default class UniversalAgent extends AgentBase {
  ///// Prompt templates
  private static initialTemplate(
    discoveredKnowledge: string,
    objective: string
  ) {
    return `You are connected to a neo4j database. You have discovered some knowledge already. 
Create the next query to uncover knowledge to fulfil your objective. If you do not know that 
a label or relationship type exists, you should ask the database about it. Do not assume that 
any structure exists beyond what you have already discovered.

Previously discovered knowledge
======
${discoveredKnowledge}
======

Objective: ${objective}`;
  }

  private static emptyTemplate(
    discoveredKnowledge: string,
    objective: string,
    dbQuery: string
  ) {
    return `This query returned no results. Please try again.
\`\`\`cypher
${dbQuery}
\`\`\`

Objective: ${objective}

Previously discovered knowledge
======
${discoveredKnowledge}
======

Do not provide anything besides a valid cypher query.

New query:
\`\`\`cypher
`;
  }

  private static errorTemplate(dbQuery: string, error: string) {
    return `This query returned an error. Please try again.
\`\`\`cypher
${dbQuery}
\`\`\`

Error: ${error}

Do not provide anything besides a valid cypher query.

New query:
\`\`\`cypher
`;
  }

  private static exploreTemplate(
    discoveredKnowledge: string,
    objective: string,
    dbQuery: string
  ) {
    return `I used this query, but I got no results.

${dbQuery}

I do know a few things about what is in the database:
======
${discoveredKnowledge}
======

I need to try to figure stuff out about other kinds of nodes and relationships. Please try and discover 
some new information.

New discovery: `;
  }

  private static evaluateTemplate(
    dbQuery: string,
    result: string,
    objective: string
  ) {
    return `${dbQuery}

The query returned the following results:

${result}

What is the answer to this question: ${objective}`;
  }

  ///// Agent state

  behaviorMode: AgentBehaviorMode = AgentBehaviorMode.Answer;

  constructor(options: AgentOptions = {}) {
    super(options);

    // TODO replace with async static factory
    this.behaviorMode = AgentBehaviorMode.Ready;
    this.debugFlowLog?.write("switched to ready mode\n");
    this.discoveredKnowledge = "No knowledge discovered yet.";
  }

  async run(input: string) {
    this.debugFlowLog?.write("ask\n");

    if (this.behaviorMode !== AgentBehaviorMode.Ready) {
      throw new Error("Agent is not ready to answer questions.");
    }

    // Initial query to get started
    let dbQuery = await this.initial(input);
    let foundResult: string | null = null;

    // Agent processing loop (this is confusing stated stuff)
    while (!foundResult) {
      if (
        (this.behaviorMode as AgentBehaviorMode) === AgentBehaviorMode.Ready
      ) {
        throw new Error("Agent should not be processing in ready mode.");
      }

      let makeQuery = true;

      // We should check and make sure we are not in a loop here
      if (
        this.attempts.cursor?.attempt.frozenDiscoveredKnowledge ===
          this.discoveredKnowledge &&
        UniversalAgent.isStuckInLoop(dbQuery, this.attempts.cursor)
      ) {
        this.debugFlowLog?.write("stuck in loop\n");
        // We need to switch to explore mode
        if (
          (this.behaviorMode as AgentBehaviorMode) === AgentBehaviorMode.Answer
        ) {
          this.behaviorMode = AgentBehaviorMode.Explore;
          this.debugFlowLog?.write("switched to explore mode\n");
          makeQuery = false;
        } else {
          // backtrack to start keeping the new knowledge
          this.attempts.backtrack();
          this.debugFlowLog?.write("backtracked to root\n");
        }
      }

      if (makeQuery) {
        await this.runQuery(dbQuery, input);
      }

      // if the attempt returned a result, evaluate it
      if (this.attempts.cursor.attempt.resultType === QueryResultType.Success) {
        if (makeQuery) {
          if (this.options.verboseNeoResults) {
            console.log(await this.attempts.cursor.attempt.hydrate());
          }
          foundResult = await this.evaluate();
          if (foundResult) {
            // check and make sure all the properties actually exist somewhere in the graph
            try {
              const properties = allProperties(
                this.attempts.cursor.attempt.dbQuery
              );
              // If we are using properties that don't exist anywhere this is probably garbage
              try {
                if (
                  !(
                    await Promise.all(
                      Array.from(properties).map(async (property) => {
                        return await doesPropertyExistAnywhere(property);
                      })
                    )
                  ).every((exists) => exists)
                ) {
                  if (this.options.verboseResultFailures) {
                    console.log(
                      `Got result >>>> ${foundResult}\nQuery used non-existent properties - discarding result`
                    );
                  }
                  foundResult = null;
                  this.attempts.cursor.attempt.resultType =
                    QueryResultType.UselessResult;
                }
              } catch (error) {
                console.log("db error", error);
              }
            } catch (error) {
              console.log(
                "Invalid cypher parse !!! VERY BAD - FIX ME !!!",
                error
              );
              foundResult = null;
            }
          } else {
            this.attempts.cursor.attempt.resultType =
              QueryResultType.UselessResult;
          }
          this.attempts.cursor.attempt.dehydrate();
        }
      } else {
        switch (this.behaviorMode as AgentBehaviorMode) {
          case AgentBehaviorMode.Answer:
            if (
              this.attempts.cursor.attempt.resultType === QueryResultType.Empty
            ) {
              dbQuery = await this.empty();
            } else if (
              this.attempts.cursor.attempt.resultType === QueryResultType.Error
            ) {
              dbQuery = await this.error();
            } else if (
              this.attempts.cursor.attempt.resultType ===
              QueryResultType.UselessResult
            ) {
              // put the agent into explore mode
              this.behaviorMode = AgentBehaviorMode.Explore;
              this.debugFlowLog?.write("switched to explore mode\n");
            } else {
              console.log("attempts", this.attempts.tail(1));
              throw new Error("Agent is in an invalid state.");
            }
            break;
          // case AgentBehaviorMode.NewIdea:
          //   dbQuery = await this.newIdea();
          //   break;
          case AgentBehaviorMode.Explore:
            if (
              this.attempts.cursor.attempt.resultType === QueryResultType.Error
            ) {
              dbQuery = await this.error();
              break;
            }
            const discovery = await this.explore();
            // this.discoveredKnowledge += `\n${await Agent.reformulateDiscovery(discovery)}`;
            this.discoveredKnowledge += `\n${discovery}`;
            this.behaviorMode = AgentBehaviorMode.Answer;
            this.debugFlowLog?.write("switched to answer mode\n");
            break;
          default:
            throw new Error("Agent is in an invalid state.");
        }
      }
    }

    return foundResult;
  }

  // Entry point for the agent to set up some of its state and get a starting query
  private async initial(objective: string) {
    this.debugFlowLog?.write("initial\n");

    // Discover initial information about the knowledge graph
    // get all the kinds of nodes and relationships in the graph
    const session = driver.session({ defaultAccessMode: neo4j.session.READ });
    const labelsResult = await session.run(
      `MATCH (n) RETURN DISTINCT labels(n) AS labels`
    );
    const labels = labelsResult.records.map(
      (record) => record.get("labels")[0]
    );

    const relationshipTypesResult = await session.run(
      `CALL db.relationshipTypes()`
    );
    const relationshipTypes = relationshipTypesResult.records.map((record) =>
      record.get("relationshipType")
    );

    // prettier-ignore
    this.discoveredKnowledge =
      `labels: ${labels.join(", ")}\nrelationship types: ${relationshipTypes.join(", ")}`;
    this.behaviorMode = AgentBehaviorMode.Answer;
    this.debugFlowLog?.write("switched to answer mode\n");

    session.close();

    const prompt = UniversalAgent.initialTemplate(
      this.discoveredKnowledge,
      objective
    );

    if (this.options.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const response = await openai.chat.completions.create({
      model: this.options.model,
      max_tokens: this.options.maxTokens,
      messages: [
        {
          role: "system",
          content: initialSystem,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const responseText = response.choices[0].message.content.trim();

    const finishReason = response.choices[0].finish_reason;

    if (finishReason !== "stop") {
      console.warn("WARNING: response did not finish - ", finishReason);
    }

    if (this.options.verboseResponses) {
      console.log(`Initial query response >>>>\n${responseText}\n<<<<`);
    }

    const newQuery = responseText.split("```")[0].trim();

    return newQuery;
  }

  // When we get noting back from the database, we need to ask the agent to try and figure out why
  // NOTE This is not for if there is an error
  private async empty() {
    this.debugFlowLog?.write("empty\n");

    const prompt = UniversalAgent.emptyTemplate(
      this.discoveredKnowledge,
      this.attempts.cursor.attempt.objective,
      this.attempts.cursor.attempt.dbQuery
    );

    if (this.options.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const response = await openai.chat.completions.create({
      model: this.options.model,
      max_tokens: this.options.maxTokens,
      messages: [
        {
          role: "system",
          content: emptySystem,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const responseText = response.choices[0].message.content.trim();

    const finishReason = response.choices[0].finish_reason;

    if (finishReason !== "stop") {
      console.warn("WARNING: response did not finish - ", finishReason);
    }

    const newQuery = responseText.split("```")[0].trim();

    if (this.options.verboseResponses) {
      console.log(`New query response >>>>\n${responseText}\n<<<<`);
    }

    return newQuery;
  }

  async error() {
    this.debugFlowLog?.write("error\n");

    const prompt = UniversalAgent.errorTemplate(
      this.attempts.cursor.attempt.dbQuery,
      this.attempts.cursor.attempt.error
    );

    if (this.options.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const response = await openai.chat.completions.create({
      model: this.options.model,
      max_tokens: this.options.maxTokens,
      messages: [
        {
          role: "system",
          content: errorSystem,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const responseText = response.choices[0].message.content.trim();

    const finishReason = response.choices[0].finish_reason;

    if (finishReason !== "stop") {
      console.warn("WARNING: response did not finish - ", finishReason);
    }

    const newQuery = responseText.split("```")[0].trim();

    if (this.options.verboseResponses) {
      console.log(`New query (error fix) response >>>>\n${responseText}\n<<<<`);
    }

    return newQuery;
  }

  async explore() {
    this.debugFlowLog?.write("explore\n");

    const prompt = UniversalAgent.exploreTemplate(
      this.discoveredKnowledge,
      this.attempts.cursor.attempt.objective,
      this.attempts.cursor.attempt.dbQuery
    );

    if (this.options.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const messages: CompletionCreateParams.CreateChatCompletionRequestNonStreaming.Message[] =
      [
        {
          role: "system",
          content: exploreSystem,
        },
        {
          role: "user",
          content: prompt,
        },
      ];

    let responseText = "";
    let done = false;

    while (!done) {
      const response = await openai.chat.completions.create({
        model: this.options.model,
        temperature: 0.2,
        max_tokens: this.options.maxTokens,
        functions: [
          {
            name: "get_all_properties",
            description:
              "Returns all possible properties for a node with a given label",
            parameters: {
              type: "object",
              properties: {
                label: {
                  type: "string",
                  description:
                    "The label (kind) of node to get possible properties for",
                },
              },
              required: ["label"],
            },
          },
          {
            name: "does_relationship_exist",
            description:
              "Returns true if a relationship type exists anywhere in the graph",
            parameters: {
              type: "object",
              properties: {
                relationship: {
                  type: "string",
                  description: "The relationship label to check for",
                },
              },
              required: ["relationship"],
            },
          },
        ],
        function_call: "auto",
        messages,
      });

      if (response.choices[0].finish_reason === "function_call") {
        messages.push(
          response.choices[0]
            .message as CompletionCreateParams.CreateChatCompletionRequestNonStreaming.Message
        );
        switch (response.choices[0].message.function_call.name) {
          case "get_all_properties": {
            const args = JSON.parse(
              response.choices[0].message.function_call.arguments
            );
            const { value } = await this.getAllProperties(args);
            messages.push({
              role: "function",
              name: "get_all_properties",
              content: JSON.stringify(value),
            });
            break;
          }
          case "does_relationship_exist": {
            const args = JSON.parse(
              response.choices[0].message.function_call.arguments
            );
            const { value } = await this.doesRelationshipExist(args);
            messages.push({
              role: "function",
              name: "does_relationship_exist",
              content: JSON.stringify(value),
            });
            break;
          }
          default:
            throw new Error(
              `Invalid function name ${response.choices[0].message.function_call.name}`
            );
        }
      } else {
        responseText = response.choices[0].message.content.trim();
        done = true;

        if (response.choices[0].finish_reason !== "stop") {
          console.warn(
            "WARNING: response did not finish - ",
            response.choices[0].finish_reason
          );
        }
      }
    }

    if (this.options.verboseResponses) {
      console.log(`Explore query response >>>>\n${responseText}\n<<<<`);
    }

    return responseText;
  }

  async evaluate() {
    this.debugFlowLog?.write("evaluate\n");

    const resultText = UniversalAgent.truncate(
      await this.attempts.cursor.attempt.hydrate()
    );
    writeFileSync(`logs/result-${this.queryCount}.json`, resultText);

    const prompt = UniversalAgent.evaluateTemplate(
      this.attempts.cursor.attempt.dbQuery,
      resultText,
      this.attempts.cursor.attempt.objective
    );

    if (this.options.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const response = await openai.chat.completions.create({
      model: this.options.model,
      max_tokens: this.options.maxTokens,
      messages: [
        {
          role: "system",
          content: evaluateSystem,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const responseText = response.choices[0].message.content.trim();

    const finishReason = response.choices[0].finish_reason;

    if (finishReason !== "stop") {
      console.warn("WARNING: response did not finish - ", finishReason);
    }

    if (this.options.verboseResponses) {
      console.log("Evaluation response >>>>", responseText);
    }

    if (/insufficient information/i.test(responseText)) {
      return null;
    }

    return responseText;
  }

  // If we are stuck in a loop of failures we need to switch modes
  private static isStuckInLoop(dbQuery: string, cursor: SearchTreeNode) {
    // walk back through the attempts from the cursor and see if we are stuck in a loop
    let loopLength = 1;

    let successes: SearchTreeNode[] = [];

    while (cursor) {
      if (!cursor.attempt.resultType) {
        successes.push(cursor);
      }

      if (cursor.attempt.dbQuery === dbQuery) {
        return { loopLength, successes };
      }

      loopLength++;
      cursor = cursor.parent;
    }

    return null;
  }

  //// Debug stuff
}
