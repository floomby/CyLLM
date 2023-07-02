// Agent for querying a neo4j database

// PRIORITY getting stuck in backtracking loop
// PRIORITY lazy result storage to avoid memory issues
// TODO discovered knowledge distillation and pruning
// TODO smarter result evaluation
// TODO setup test suite
// MINOR figure out how to handle data compartmentalization in the database (neo4j might have something for this)
// MINOR gracefully handle neo4j db errors (not query errors, we got these covered)

// Ideas:
// - Creating summary nodes synthetically, calculating embeddings on them and using them as a reference point for the agent
// - Creation of text indices (done) and using fuzzy matching to find nodes (not done)

const model = "gpt-3.5-turbo-0613";

import { driver, apiKey } from "./globals";

import { inspect } from "util";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { assert } from "console";

import { createChat } from "completions";

enum QueryResultType {
  Success,
  Empty,
  Error,
  UselessResult,
}

class Attempt {
  objective: string;
  dbQuery: string;
  private resultData: any;
  private dehydrated: boolean;
  error: any;
  resultType: QueryResultType;
  frozenDiscoveredKnowledge?: string;

  constructor({
    objective,
    dbQuery,
    resultData,
    error,
    resultType,
    frozenDiscoveredKnowledge,
  }) {
    this.objective = objective;
    this.dbQuery = dbQuery;
    this.resultData = resultData;
    this.error = error;
    this.resultType = resultType;
    this.frozenDiscoveredKnowledge = frozenDiscoveredKnowledge;

    this.dehydrated = false;
  }

  dehydrate() {
    this.dehydrated = true;
    this.resultData = null;
  }

  async hydrate() {
    if (!this.dehydrated) {
      return this.resultData;
    }

    const session = driver.session();
    const result = await session.run(this.dbQuery);
    this.resultData = result.records.map((record) => record.toObject());
    session.close();

    this.dehydrated = false;

    return this.resultData;
  }
}

// We will log all our searches and discoveries into a tree
type SearchTreeNode = {
  depth: number;
  children: SearchTreeNode[];
  parent: SearchTreeNode | null;
  attempt: Attempt;
};

class AttemptSearchTree {
  root: SearchTreeNode | null = null;
  previousQueries: Map<string, SearchTreeNode[]> = new Map();
  useMap: boolean = false;

  constructor(useMap: boolean = false) {
    this.useMap = useMap;
    if (useMap) {
      this.previousQueries = new Map();
    }
  }

  cursor: SearchTreeNode | null = null;

  addNode(attempt: Attempt, parent: SearchTreeNode | null) {
    const newNode = {
      attempt,
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

    if (this.useMap) {
      const previousQueries = this.previousQueries.get(attempt.dbQuery);
      if (previousQueries) {
        previousQueries.push(newNode);
      } else {
        this.previousQueries.set(attempt.dbQuery, [newNode]);
      }
    }

    return newNode;
  }

  // append at the cursor as if this was a linked list
  push(attempt: Attempt) {
    this.cursor = this.addNode(attempt, this.cursor);
    return this.cursor;
  }

  dumpToFile(filename: string) {
    writeFileSync(
      filename,
      JSON.stringify(
        this.root,
        (key, value) => {
          // chop all parent references
          if (key === "parent") {
            return undefined;
          } else if (key === "resultType") {
            switch (value) {
              case QueryResultType.Success:
                return "Success";
              case QueryResultType.Empty:
                return "Empty";
              case QueryResultType.Error:
                return "Error";
              case QueryResultType.UselessResult:
                return "UselessResult";
              default:
                return value;
            }
          }
          else if (key === "result") {
            if (value === null) {
              return "results omitted for performance reasons";
            }
          }

          return value;
        },
        2
      )
    );
  }

  /**
   * Get the last n parent nodes of the cursor
   *
   * @param n number of nodes to return
   * @returns an unlinked array of the last n nodes
   */
  tail(n: number) {
    const tail: SearchTreeNode[] = [];
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

  lastBacktrackLocation: SearchTreeNode | null = null;

  /**
   * Backtrack the cursor n nodes
   *
   * @param n number of nodes to backtrack, if undefined then backtrack to the root
   * @returns the new cursor
   */
  backtrack(n?: number) {
    if (n === undefined) {
      this.cursor = this.root;
    }
    for (let i = 0; i < n; i++) {
      this.cursor = this.cursor?.parent || null;
    }
    this.lastBacktrackLocation = this.cursor;
    return this.cursor;
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

  private bindDebugToStaticAsyncFunction = (fn: Function) => {
    this.debugFlowLog.push(fn.name);
    return async (...args: any[]) => fn(...args);
  };

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

  private static async doesRelationshipExist({
    relationship,
  }: {
    relationship: string;
  }) {
    console.log("CALLED FUNCTION: doesRelationshipExist", { relationship });

    // remove quotes from relationship if they exist
    const oldRelationship = relationship;
    relationship = relationship.replace(/"/g, "").replace(/'/g, "");
    if (oldRelationship !== relationship) {
      console.log(
        `Relationship ${oldRelationship} was replaced with ${relationship}`
      );
    }

    const session = driver.session();
    const result = await session.run(`MATCH ()-[r:${relationship}]-()
    RETURN COUNT(r) > 0 as relationshipExists`);
    session.close();

    console.log(
      "doesRelationshipExist result",
      result.records[0].get("relationshipExists")
    );

    return {
      relationship_count: result.records[0].get(
        "relationshipExists"
      ) as boolean,
    };
  }

  // TODO Work on knowledge distillation
  private static async reformulateDiscovery(discovery: string) {
    const chat = createChat({
      model,
      apiKey,
      unresponsiveApiTimeout: 5000,
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
  verboseNeoResults: boolean = false;

  labels: string[];
  relationshipTypes: string[];

  discoveredKnowledge: string = "";

  attempts = new AttemptSearchTree();

  maxTokens: number | undefined = undefined;
  behaviorMode: AgentBehaviorMode = AgentBehaviorMode.Answer;

  debugFlowLog: string[] = [];

  constructor() {
    // TODO replace with async static factory
    this.behaviorMode = AgentBehaviorMode.Ready;
    this.debugFlowLog.push("switched to ready mode");
    this.discoveredKnowledge = "No knowledge discovered yet.";
  }

  async ask(question: string) {
    this.debugFlowLog.push("ask");

    if (this.behaviorMode !== AgentBehaviorMode.Ready) {
      throw new Error("Agent is not ready to answer questions.");
    }

    // Initial query to get started
    let dbQuery = await this.initial(question);
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
        Agent.isStuckInLoop(dbQuery, this.attempts.cursor)
      ) {
        this.debugFlowLog.push("stuck in loop");
        // We need to switch to explore mode
        if (
          (this.behaviorMode as AgentBehaviorMode) === AgentBehaviorMode.Answer
        ) {
          this.behaviorMode = AgentBehaviorMode.Explore;
          this.debugFlowLog.push("switched to explore mode");
          makeQuery = false;
        } else {
          // backtrack to start keeping the new knowledge
          this.attempts.backtrack();
          this.debugFlowLog.push("backtracked to root");
        }
      }

      if (makeQuery) {
        await this.runQuery(dbQuery, question);
      }

      // if the attempt returned a result, evaluate it
      if (this.attempts.cursor.attempt.resultType === QueryResultType.Success) {
        if (makeQuery) {
          if (this.verboseNeoResults) {
            console.log(await this.attempts.cursor.attempt.hydrate());
          }
          foundResult = await this.evaluate();
          if (!foundResult) {
            this.attempts.cursor.attempt.resultType = QueryResultType.UselessResult;
          }
        }
      } else {
        switch (this.behaviorMode as AgentBehaviorMode) {
          case AgentBehaviorMode.Answer:
            if (this.attempts.cursor.attempt.resultType === QueryResultType.Empty) {
              dbQuery = await this.empty();
            } else if (
              this.attempts.cursor.attempt.resultType === QueryResultType.Error
            ) {
              dbQuery = await this.error();
            } else if (
              this.attempts.cursor.attempt.resultType === QueryResultType.UselessResult
            ) {
              // put the agent into explore mode
              this.behaviorMode = AgentBehaviorMode.Explore;
              this.debugFlowLog.push("switched to explore mode");
            } else {
              console.log("attempts", this.attempts.tail(1));
              throw new Error("Agent is in an invalid state.");
            }
            break;
          // case AgentBehaviorMode.NewIdea:
          //   dbQuery = await this.newIdea();
          //   break;
          case AgentBehaviorMode.Explore:
            if (this.attempts.cursor.attempt.resultType === QueryResultType.Error) {
              dbQuery = await this.error();
              break;
            }
            const discovery = await this.explore();
            // this.discoveredKnowledge += `\n${await Agent.reformulateDiscovery(discovery)}`;
            this.discoveredKnowledge += `\n${discovery}`;
            this.behaviorMode = AgentBehaviorMode.Answer;
            this.debugFlowLog.push("switched to answer mode");
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
    this.debugFlowLog.push("initial");

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
    this.debugFlowLog.push("switched to answer mode");

    session.close();

    const prompt = Agent.initialTemplate(this.discoveredKnowledge, objective);

    if (this.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const chat = createChat({
      model,
      apiKey,
      maxTokens: this.maxTokens,
      unresponsiveApiTimeout: 5000,
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
      //     function: this.bindDebugToStaticAsyncFunction(Agent.getAllProperties),
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
    this.debugFlowLog.push("empty");

    const prompt = Agent.emptyTemplate(
      this.discoveredKnowledge,
      this.attempts.cursor.attempt.objective,
      this.attempts.cursor.attempt.dbQuery
    );

    if (this.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const chat = createChat({
      model,
      apiKey,
      maxTokens: this.maxTokens,
      unresponsiveApiTimeout: 5000,
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

  async error() {
    this.debugFlowLog.push("error");

    const prompt = Agent.errorTemplate(
      this.attempts.cursor.attempt.dbQuery,
      this.attempts.cursor.attempt.error
    );

    if (this.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const chat = createChat({
      model,
      apiKey,
      maxTokens: this.maxTokens,
      unresponsiveApiTimeout: 5000,
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
    this.debugFlowLog.push("explore");

    const prompt = Agent.exploreTemplate(
      this.discoveredKnowledge,
      this.attempts.cursor.attempt.objective,
      this.attempts.cursor.attempt.dbQuery
    );

    if (this.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const chat = createChat({
      model,
      apiKey,
      temperature: 0.2,
      maxTokens: this.maxTokens,
      unresponsiveApiTimeout: 5000,
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
          function: this.bindDebugToStaticAsyncFunction(Agent.getAllProperties),
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
          function: this.bindDebugToStaticAsyncFunction(
            Agent.doesRelationshipExist
          ),
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

  private static replacer(key: string, value: any) {
    // removed all elementId
    if (key === "elementId") {
      // one more check to make sure we really only get what we want
      if (typeof value === "string" && /^\d+:[a-f0-9\-]+:\d+$/.test(value)) {
        return undefined;
      }
      return value;
    }
    // replace all identity with the actual node id
    if (key === "identity") {
      if ("low" in value && "high" in value) {
        // convert to a string (neo4j has overridden this)
        return value.toString();
      }
    }
    return value;
  }

  private static truncate(result: any) {
    let resultText = JSON.stringify(result, Agent.replacer, 2);

    let didSloppyTruncation = false;
    let needsCleanTruncation = false;
    let finalCount = 0;
    let initialCount = undefined;

    while (resultText.length > 1000 && !didSloppyTruncation) {
      const parsed = JSON.parse(resultText);

      let needsSloppyTruncation = false;

      if (Array.isArray(parsed)) {
        // cut in half
        if (initialCount === undefined) {
          initialCount = parsed.length;
        }
        if (parsed.length > 2) {
          parsed.splice(Math.floor(parsed.length / 2));
          finalCount = parsed.length;
          resultText = JSON.stringify(parsed, null, 2);
          needsCleanTruncation = true;
        } else {
          needsSloppyTruncation = true;
        }
      } else {
        needsSloppyTruncation = true;
      }

      if (needsSloppyTruncation) {
        // sloppy truncation
        resultText = resultText.slice(0, 1000);
        resultText += "\n...TRUNCATED...\n";
        didSloppyTruncation = true;
      }
    }

    if (!didSloppyTruncation && needsCleanTruncation) {
      // chop the last bracket off and add ellipses
      resultText = resultText.slice(0, -1);
      resultText += `  ... ${initialCount - finalCount} more items\n]`;
    }

    return resultText;
  }

  async evaluate() {
    this.debugFlowLog.push("evaluate");

    const resultText = Agent.truncate(await this.attempts.cursor.attempt.hydrate());
    writeFileSync(`logs/result-${this.queryCount}.json`, resultText);

    const prompt = Agent.evaluateTemplate(
      this.attempts.cursor.attempt.dbQuery,
      resultText,
      this.attempts.cursor.attempt.objective
    );

    if (this.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const chat = createChat({
      model,
      apiKey,
      maxTokens: this.maxTokens,
      unresponsiveApiTimeout: 5000,
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

    // if (this.verboseResponses) {
    console.log("Evaluation response >>>>", responseText);
    // }

    if (/insufficient information/i.test(responseText)) {
      return null;
    }

    return responseText;
  }

  ///// Neo4j query evaluation and knowledge extraction

  queryCount: number = 0;

  async runQuery(dbQuery: string, objective: string) {
    this.debugFlowLog.push("runQuery");

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

    const attempt = new Attempt({
      objective,
      dbQuery,
      resultData: ret,
      error: err,
      frozenDiscoveredKnowledge: this.discoveredKnowledge,
      resultType: queryResultType,
    });

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

  dumpState() {
    // ensure debug directory exists
    if (!existsSync("debug")) mkdirSync("debug", { recursive: true });
    writeFileSync("debug/async_calls", this.debugFlowLog.join("\n"));
    writeFileSync("debug/knowledge", this.discoveredKnowledge);
    this.attempts.dumpToFile("debug/search_tree.json");
  }
}

const test = async (question: string) => {
  const agent = new Agent();

  process.on("SIGINT", () => {
    // dump agent state to files and exit
    console.log("SIGINT received, dumping agent state to files and exiting");
    agent.dumpState();
    process.exit(1);
  });

  const foundResult = await agent.ask(question);

  console.log("Got result!", inspect(foundResult, false, null, true));
  agent.dumpState();
};

// make sure that logs directory exists
if (!existsSync("logs")) mkdirSync("logs", { recursive: true });

const question = process.argv[2];

test(question)
  .catch(console.error)
  .then(() => driver.close());
