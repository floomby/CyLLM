// We are going to try and query the neo4j database knowledge graph using cypher composed by a llm agent
// Right now we are restricting ourselves to the small knowledge graph that I created as a test
// and leaving the conversation part of the graph out of it

import { inspect } from "util";
import { openai, driver } from "./globals";

// We will log all our searches and discoveries into a tree
type PromptSearchTreeNode = {
  dbQuery: string;
  response: string;
  extractedKnowledge: string;
  children: PromptSearchTreeNode[];
  parent: PromptSearchTreeNode | null;
};

// maybe this should be plural (i.e. allow for multiple trees)
class PromptSearchTree {
  root: PromptSearchTreeNode | null = null;
  previousQueries: Map<string, PromptSearchTreeNode>;

  constructor() {
    this.previousQueries = new Map();
  }

  addNode(
    dbQuery: string,
    response: string,
    extractedKnowledge: string,
    parent: PromptSearchTreeNode | null
  ) {
    const newNode = {
      dbQuery,
      response,
      extractedKnowledge,
      children: [],
      parent,
    };

    if (!this.root) {
      this.root = newNode;
    } else {
      parent.children.push(newNode);
    }

    this.previousQueries.set(dbQuery, newNode);
  }
}

enum QueryFailureType {
  NoResults,
  Error,
}

// prettier-ignore
const dbBuilderSystemPrompt = `Respond only with valid neo4j cypher queries. Do not assume any knowledge 
beyond what is already discovered. DO NOT use labels unless you are sure they exist. If you do not know 
what to do create a simple query that will uncover more information about the graph instead.`

type Attempt = {
  objective: string;
  dbQuery: string;
  result: any;
  error: any;
};

class Agent {
  model: string = "gpt-3.5-turbo";

  ///// Prompt templates
  private static queryPromptingTemplate(
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

Objective: ${objective}

`;
  }

  private static emptyResultEvaluationPromptTemplate(
    discoveredKnowledge: string,
    objective: string,
    dbQuery: string
  ) {
    return `${dbQuery}

Did not return any results. 

I need to figure out: ${objective}

I know a few thing about the data in the database already:
======
${discoveredKnowledge}
======

New query
\`\`\``;
  }

  verbosePrompts: boolean = false;
  verboseResponses: boolean = false;

  labels: string[];
  relationshipTypes: string[];

  discoveredKnowledge: string = "";

  attempts: Attempt[] = [];

  failedQueries: Set<string> = new Set();

  constructor() {
    // TODO replace with async static factory

    this.discoveredKnowledge = "No knowledge discovered yet.";
  }

  // Discover initial knowledge about the graph
  async initialize() {
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
`labels: ${labels.join(", ")}\nrelationship types: ${relationshipTypes.join(", ")}`

    session.close();
  }

  // Try and answer the question (entry point)
  async answer(objective: string) {
    const prompt = Agent.queryPromptingTemplate(
      this.discoveredKnowledge,
      objective
    );

    if (this.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const response = await openai.createChatCompletion({
      model: this.model,
      messages: [
        {
          role: "system",
          content: dbBuilderSystemPrompt,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.0,
      max_tokens: 500,
    });

    const responseText = response.data.choices[0].message.content;

    if (this.verboseResponses) {
      console.log("Initial query", responseText);
    }

    return responseText;
  }

  // When we get noting back from the database, we need to ask the agent to try and figure out why
  // NOTE This is not for if there is an error
  async evaluateNoResults(attempt: Attempt) {
    const prompt = Agent.emptyResultEvaluationPromptTemplate(
      this.discoveredKnowledge,
      attempt.objective,
      attempt.dbQuery
    );

    if (this.verbosePrompts) {
      console.log("prompt:", prompt);
    }

    const response = await openai.createChatCompletion({
      model: this.model,
      messages: [
        {
          role: "system",
          content: dbBuilderSystemPrompt,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.0,
      max_tokens: 500,
    });

    const responseText = response.data.choices[0].message.content;

    if (this.verboseResponses) {
      console.log("New query", responseText);
    }

    const newQuery = responseText.split("```")[0].trim();

    return newQuery;
  }

  ///// Neo4j query evaluation and knowledge extraction

  async runQuery(dbQuery: string, objective: string) {
    console.log(`dbQuery>>>>>>\n${dbQuery}\n<<<<<<dbQuery`);

    let ret: any = null;
    let err: any = undefined;

    try {
      const session = driver.session();
      const result = await session.run(dbQuery);
      session.close();
      console.log("result:", result);
      ret = result.records.map((record) => record.toObject());
    } catch (error) {
      console.log("error:", error);

      err = error;
    }

    this.attempts.push({ objective, dbQuery, result: ret, error: err });

    // return ret;
  }

  private failureMode(attempt: Attempt) {
    if (attempt.error) return QueryFailureType.Error;
    if (attempt.result.length === 0) return QueryFailureType.NoResults;
    return null;
  }

  async evaluateLastAttempt() {
    const lastAttempt = this.attempts[this.attempts.length - 1];

    if (!lastAttempt) {
      console.error("no attempts yet");
      return;
    }

    const { result } = lastAttempt;

    const failureMode = this.failureMode(lastAttempt);

    if (failureMode === QueryFailureType.Error) {
      console.log("error");
      return;
    }

    if (failureMode === QueryFailureType.NoResults) {
      console.log("no results");
      const newQuery = await this.evaluateNoResults(lastAttempt);
      return newQuery;
    }

    // we have results, but we should remove the identity and the elementId
    // TODO

    return {
      result,
    };
  }
}

const test = async () => {
  const agent = new Agent();
  await agent.initialize();
  let dbQuery = await agent.answer(
    "Which item does the Plasma Shrimp corrupt?"
  );

  let result;

  while (!result) {
    await agent.runQuery(dbQuery, "Which item does the Plasma Shrimp corrupt?");

    const evaluation = await agent.evaluateLastAttempt();
    if (typeof evaluation === "string") {
      dbQuery = evaluation;
    } else if (!evaluation) {
      console.log("no evaluation");
      break;
    } else {
      result = evaluation.result;
    }
  }

  console.log("Got result!", inspect(result, false, null, true));
};

test()
  .catch(console.error)
  .then(() => driver.close());
