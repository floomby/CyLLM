// Agent for querying a neo4j database

// PRIORITY abort and retry if openai takes too long (hangs or whatever it does)
// PRIORITY setup test suite
// TODO if we get too far in the weeds we should move the cursor back up the tree and start a new branch
// TODO figure out how to handle data compartmentalization in the database (neo4j might have something for this)
// TODO gracefully handle neo4j db errors (not query errors, we got these covered)

// Ideas:
// - Creating summary nodes synthetically, calculating embeddings on them and using them as a reference point for the agent
// - Creation of text indices (done) and using fuzzy matching to find nodes (not done)

const model = "gpt-3.5-turbo-0613";

import { openai, driver, apiKey } from "./globals";

import { inspect } from "util";
import { writeFileSync } from "fs";
import { assert } from "console";

import { createChat } from "completions";

enum QueryResultType {
  Success,
  Empty,
  Error,
}

type Attempt = {
  objective: string;
  dbQuery: string;
  result: any;
  error: any;
  resultType: QueryResultType;
  frozenDiscoveredKnowledge?: string;
};

// We will log all our searches and discoveries into a tree
type SearchTreeNode = Attempt & {
  depth: number;
  children: SearchTreeNode[];
  parent: SearchTreeNode | null;
};

class AttemptSearchTree {
  root: SearchTreeNode | null = null;
  previousQueries: Map<string, SearchTreeNode[]> = new Map();

  constructor() {
    this.previousQueries = new Map();
  }

  cursor: SearchTreeNode | null = null;

  addNode(attempt: Attempt, parent: SearchTreeNode | null) {
    const newNode = {
      ...attempt,
      children: [],
      parent,
      depth: parent ? parent.depth + 1 : 0,
    };

    if (!this.root) {
      this.root = newNode;
      this.cursor = newNode;
    } else {
      parent.children.push(newNode);
    }

    const previousQueries = this.previousQueries.get(attempt.dbQuery);
    if (previousQueries) {
      previousQueries.push(newNode);
    } else {
      this.previousQueries.set(attempt.dbQuery, [newNode]);
    }

    return newNode;
  }

  // append at the cursor as if this was a linked list
  push(attempt: Attempt) {
    this.cursor = this.addNode(attempt, this.cursor);
    return this.cursor;
  }

  dumpToFile() {
    writeFileSync(
      "searchTree.json",
      JSON.stringify(
        this.root,
        (key, value) => {
          // chop all parent references
          if (key === "parent") {
            return undefined;
          }
          return value;
        },
        2
      )
    );
  }

  tail(n: number) {
    const tail: Attempt[] = [];
    let cursor = this.cursor;
    while (cursor && tail.length < n) {
      tail.push({
        ...cursor,
      });
      const last = tail[tail.length - 1];
      delete (last as SearchTreeNode).children;
      delete (last as SearchTreeNode).parent;
      cursor = cursor.parent;
    }
    return tail.reverse();
  }
}

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
it is and will require looking for relationships that you have not yet discovered. Prefer case insensitive queries.`;

// prettier-ignore
const errorSystem =
`Respond only with valid neo4j cypher queries. Fix the users query in accordance with the error message.`

// prettier-ignore
const exploreSystem =
`Help the user discover new information about the knowledge graph in the database. Then tell the user what you 
have discoverd in a concise way. DO NOT respond with null information. Your response should be a concise representation 
of what you discovered.`;

// // prettier-ignore
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

class Agent {
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

  ///// Utility functions

  private static async getAllProperties({ label }: { label: string }) {
    console.log("CALLED FUNCTION: getAllProperties", { label });

    // remove quotes from label if they exist
    const oldLabel = label;
    label = label.replace(/"/g, "").replace(/'/g, "");
    if (oldLabel !== label) {
      console.log(`Label ${oldLabel} was replaced with ${label}`);
    }

    const session = driver.session();
    const result =
      await session.run(`CALL apoc.meta.nodeTypeProperties({labels:['${label}']})
    YIELD propertyName
    RETURN collect(distinct propertyName) as propertyNames`);
    session.close();

    console.log(
      "getAllProperties result",
      result.records[0].get("propertyNames")
    );

    return {
      property_names: result.records[0].get("propertyNames") as string[],
    };
  }

  private static async reformulateDiscovery(discovery: string) {
    const chat = createChat({
      model,
      apiKey,
    });

    const response = await chat.sendMessage(
      `Reformulate this discovery into a concise note.\n\n======\n${discovery}\n======\n`
    );

    return response.content.trim();
  }

  ///// Agent state

  verbosePrompts: boolean = false;
  verboseResponses: boolean = false;
  verboseQuerying: boolean = false;
  verboseFailureTypes: boolean = true;

  labels: string[];
  relationshipTypes: string[];

  discoveredKnowledge: string = "";

  attempts = new AttemptSearchTree();

  maxTokens: number | undefined = undefined;
  behaviorMode: AgentBehaviorMode = AgentBehaviorMode.Answer;

  constructor() {
    // TODO replace with async static factory
    this.behaviorMode = AgentBehaviorMode.Ready;
    this.discoveredKnowledge = "No knowledge discovered yet.";
  }

  async ask(question: string) {
    if (this.behaviorMode !== AgentBehaviorMode.Ready) {
      throw new Error("Agent is not ready to answer questions.");
    }

    // Initial query to get started
    let dbQuery = await this.initial(question);
    let foundResult: string | null = null;

    // Agent processing loop
    while (!foundResult) {
      if (
        (this.behaviorMode as AgentBehaviorMode) === AgentBehaviorMode.Ready
      ) {
        throw new Error("Agent should not be processing in ready mode.");
      }

      let makeQuery = true;

      // We should check and make sure we are not in a loop here
      if (
        this.attempts.cursor?.frozenDiscoveredKnowledge ===
          this.discoveredKnowledge &&
        Agent.isStuckInLoop(dbQuery, this.attempts.cursor)
      ) {
        // We need to switch to explore mode
        if (
          (this.behaviorMode as AgentBehaviorMode) === AgentBehaviorMode.Answer
        ) {
          this.behaviorMode = AgentBehaviorMode.Explore;
          makeQuery = false;
        } else {
          // throw new Error("Agent is stuck in a loop in explore mode.");
        }
      }

      const cursor = makeQuery
        ? await this.runQuery(dbQuery, question)
        : this.attempts.cursor;
      // This should be equal to this.attempts.cursor unless there was an error in runQuery (which we should be handling)
      // assert(cursor === this.attempts.cursor);

      // if the attempt returned a result, evaluate it
      if (cursor.resultType === QueryResultType.Success) {
        console.log(cursor.result);
        foundResult = await this.evaluate();
        // throw new Error("Not implemented (results but incomplete)");
      } else {
        switch (this.behaviorMode as AgentBehaviorMode) {
          case AgentBehaviorMode.Answer:
            if (cursor.resultType === QueryResultType.Empty) {
              dbQuery = await this.empty();
            } else if (cursor.resultType === QueryResultType.Error) {
              dbQuery = await this.error();
            } else {
              console.log(
                inspect(
                  { ...cursor, parent: undefined, children: undefined },
                  false,
                  null,
                  true
                )
              );
              throw new Error("Agent is in an invalid state.");
            }
            break;
          // case AgentBehaviorMode.NewIdea:
          //   dbQuery = await this.newIdea();
          //   break;
          case AgentBehaviorMode.Explore:
            const discovery = await this.explore();
            if (["null"].includes(discovery.toLowerCase())) {
              break;
            }
            // this.discoveredKnowledge += `\n${await Agent.reformulateDiscovery(discovery)}`;
            this.discoveredKnowledge += `\n${discovery}`;
            this.behaviorMode = AgentBehaviorMode.Answer;
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
    // Discover initial information about the knowledge graph
    // get all the kinds of nodes and relationships in the graph
    const session = driver.session();
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

    this.labels = labels;
    this.relationshipTypes = relationshipTypes;

    // prettier-ignore
    this.discoveredKnowledge =
      `labels: ${labels.join(", ")}\nrelationship types: ${relationshipTypes.join(", ")}`;
    this.behaviorMode = AgentBehaviorMode.Answer;

    session.close();

    const prompt = Agent.initialTemplate(this.discoveredKnowledge, objective);

    if (this.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const chat = createChat({
      model,
      apiKey,
      maxTokens: this.maxTokens,
      // Seems to do worse with this function
      // functions: [
      //   {
      //     name: "get_all_properties",
      //     description:
      //       "Returns all possible properties for a node with a given label",
      //     parameters: {
      //       type: "object",
      //       properties: {
      //         label: {
      //           type: "string",
      //           description:
      //             "The label (kind) of node to get possible properties for",
      //         },
      //       },
      //       required: ["label"],
      //     },
      //     function: Agent.getAllProperties,
      //   },
      // ],
      // functionCall: "auto",
    });

    chat.addMessage({
      role: "system",
      content: initialSystem,
    });

    const response = await chat.sendMessage(prompt);

    const responseText = response.content.trim();

    const finishReason = response.finishReason;

    if (finishReason !== "stop") {
      console.warn("WARNING: response did not finish - ", finishReason);
    }

    if (this.verboseResponses) {
      console.log(`Initial query response >>>>\n${responseText}\n<<<<`);
    }

    const newQuery = responseText.split("```")[0].trim();

    return newQuery;
  }

  // When we get noting back from the database, we need to ask the agent to try and figure out why
  // NOTE This is not for if there is an error
  private async empty() {
    const prompt = Agent.emptyTemplate(
      this.discoveredKnowledge,
      this.attempts.cursor.objective,
      this.attempts.cursor.dbQuery
    );

    if (this.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const chat = createChat({
      model,
      apiKey,
      maxTokens: this.maxTokens,
    });

    chat.addMessage({
      role: "system",
      content: emptySystem,
    });

    const response = await chat.sendMessage(prompt);

    const responseText = response.content.trim();

    const finishReason = response.finishReason;

    if (finishReason !== "stop") {
      console.warn("WARNING: response did not finish - ", finishReason);
    }

    const newQuery = responseText.split("```")[0].trim();

    if (this.verboseResponses) {
      console.log(`New query response >>>>\n${responseText}\n<<<<`);
    }

    return newQuery;
  }

  // TODO
  async error() {
    const prompt = Agent.errorTemplate(
      this.attempts.cursor.dbQuery,
      this.attempts.cursor.error
    );

    if (this.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const chat = createChat({
      model,
      apiKey,
      maxTokens: this.maxTokens,
    });

    chat.addMessage({
      role: "system",
      content: errorSystem,
    });

    const response = await chat.sendMessage(prompt);

    const responseText = response.content.trim();

    const finishReason = response.finishReason;

    if (finishReason !== "stop") {
      console.warn("WARNING: response did not finish - ", finishReason);
    }

    const newQuery = responseText.split("```")[0].trim();

    if (this.verboseResponses) {
      console.log(`New query (error fix) response >>>>\n${responseText}\n<<<<`);
    }

    return newQuery;
  }

  async explore() {
    const prompt = Agent.exploreTemplate(
      this.discoveredKnowledge,
      this.attempts.cursor.objective,
      this.attempts.cursor.dbQuery
    );

    if (this.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const chat = createChat({
      model,
      apiKey,
      temperature: 0.2,
      maxTokens: this.maxTokens,
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
          function: Agent.getAllProperties,
        },
      ],
      functionCall: "auto",
    });

    chat.addMessage({
      role: "system",
      content: exploreSystem,
    });

    const response = await chat.sendMessage(prompt);

    const responseText = response.content;

    if (response.finishReason !== "stop") {
      console.warn(
        "WARNING: response did not finish - ",
        response.finishReason
      );
    }

    if (this.verboseResponses) {
      console.log(`Explore query response >>>>\n${responseText}\n<<<<`);
    }

    return responseText;
  }

  async evaluate() {
    const resultText = JSON.stringify(this.attempts.cursor.result, null, 2);

    if (resultText.length > 1000) {
      console.warn("WARNING: result is (probably) too long");
    }

    const prompt = Agent.evaluateTemplate(
      this.attempts.cursor.dbQuery,
      resultText,
      this.attempts.cursor.objective
    );

    if (this.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const chat = createChat({
      model,
      apiKey,
      maxTokens: this.maxTokens,
    });

    chat.addMessage({
      role: "system",
      content: evaluateSystem,
    });

    const response = await chat.sendMessage(prompt);

    const responseText = response.content.trim();

    const finishReason = response.finishReason;

    if (finishReason !== "stop") {
      console.warn("WARNING: response did not finish - ", finishReason);
    }

    if (this.verboseResponses) {
      console.log("Evaluation response >>>>", responseText);
    }

    if (/insufficient information/i.test(responseText)) {
      return null;
    }

    return responseText;
  }

  ///// Neo4j query evaluation and knowledge extraction

  queryCount: number = 0;

  async runQuery(dbQuery: string, objective: string) {
    console.log(
      `dbQuery (${this.queryCount++}) >>>>>>\n${dbQuery}\n<<<<<< dbQuery`
    );

    let ret: any = null;
    let err: any = null;

    let queryResultType = QueryResultType.Success;

    try {
      const session = driver.session();
      const result = await session.run(dbQuery);
      session.close();
      if (this.verboseQuerying) {
        console.log("result:", result);
      }
      ret = result.records.map((record) => record.toObject());
      if (ret.length === 0) {
        queryResultType = QueryResultType.Empty;
      }
    } catch (error) {
      console.log("error:", error);
      queryResultType = QueryResultType.Error;
      err = error;
    }

    const attempt: Attempt = {
      objective,
      dbQuery,
      result: ret,
      error: err,
      frozenDiscoveredKnowledge: this.discoveredKnowledge,
      resultType: queryResultType,
    };

    // This update the cursor
    this.attempts.push(attempt);

    return attempt;
  }

  // If we are stuck in a loop of failures we need to switch modes
  private static isStuckInLoop(dbQuery: string, cursor: SearchTreeNode) {
    // walk back through the attempts from the cursor and see if we are stuck in a loop
    let loopLength = 1;

    let successes: SearchTreeNode[] = [];

    while (cursor) {
      if (!cursor.resultType) {
        successes.push(cursor);
      }

      if (cursor.dbQuery === dbQuery) {
        return { loopLength, successes };
      }

      loopLength++;
      cursor = cursor.parent;
    }

    return null;
  }
}

const test = async (question: string) => {
  const agent = new Agent();

  const foundResult = await agent.ask(question);

  console.log("Got result!", inspect(foundResult, false, null, true));
};

const question = process.argv[2];

test(question)
  .catch(console.error)
  .then(() => driver.close());
