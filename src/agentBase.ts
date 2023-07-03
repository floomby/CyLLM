import {
  WriteStream,
  createWriteStream,
  existsSync,
  mkdirSync,
  writeFileSync,
} from "fs";
import { driver, apiKey } from "./globals";
import neo4j from "neo4j-driver";
import { AttemptSearchTree } from "./searchTree";
import { dirname } from "path";

export enum QueryResultType {
  Success,
  Empty,
  Error,
  UselessResult,
}

export type AttemptOptions = {
  verboseRehydration?: boolean;
};

export class Attempt {
  objective: string;
  dbQuery: string;
  private resultData: any;
  private dehydrated: boolean;
  error: any;
  resultType: QueryResultType;
  frozenDiscoveredKnowledge?: string;

  verboseRehydration: boolean;

  constructor(
    {
      objective,
      dbQuery,
      resultData,
      error,
      resultType,
      frozenDiscoveredKnowledge,
    },
    options: AttemptOptions
  ) {
    this.objective = objective;
    this.dbQuery = dbQuery;
    this.resultData = resultData;
    this.error = error;
    this.resultType = resultType;
    this.frozenDiscoveredKnowledge = frozenDiscoveredKnowledge;

    this.dehydrated = false;
    this.verboseRehydration = options.verboseRehydration || false;
  }

  dehydrate() {
    this.dehydrated = true;
    this.resultData = null;
  }

  async hydrate() {
    if (!this.dehydrated) {
      return this.resultData;
    }

    if (this.verboseRehydration) {
      console.log(`Rehydrating attempt data >>>>\n${this.dbQuery}\n<<<<`);
    }

    const session = driver.session({ defaultAccessMode: neo4j.session.READ });
    const result = await session.run(this.dbQuery);
    this.resultData = result.records.map((record) => record.toObject());
    session.close();

    this.dehydrated = false;

    return this.resultData;
  }
}

export type AgentOptions = AttemptOptions & {
  model?: string;
  unresponsiveApiTimeout?: number;
  maxTokens?: number;

  verbosePrompts?: boolean;
  verboseResponses?: boolean;
  verboseQuerying?: boolean;
  verboseResultFailures?: boolean;
  verboseNeoResults?: boolean;
  verboseLLMFunctions?: boolean;

  debugFlowLogFilename?: string;
};

export abstract class AgentBase {
  debugFlowLog: WriteStream | null = null;

  options: AgentOptions = {};

  attempts: AttemptSearchTree;

  queryCount: number = 0;
  discoveredKnowledge: string = "";

  constructor(options: AgentOptions) {
    this.options.model = options.model || "gpt-3.5-turbo-0613";
    this.options.unresponsiveApiTimeout =
      options.unresponsiveApiTimeout || 5000;
    this.options.maxTokens = options.maxTokens ?? undefined;

    this.options.debugFlowLogFilename = options.debugFlowLogFilename;

    this.options.verbosePrompts = options.verbosePrompts || false;
    this.options.verboseResponses = options.verboseResponses || false;
    this.options.verboseQuerying = options.verboseQuerying || false;
    this.options.verboseResultFailures = options.verboseResultFailures || false;
    this.options.verboseNeoResults = options.verboseNeoResults || false;
    this.options.verboseLLMFunctions = options.verboseLLMFunctions || false;

    if (options.debugFlowLogFilename !== undefined) {
      // make sure debug directory exists
      const pathOfDebugFlowLog = dirname(options.debugFlowLogFilename);
      if (!existsSync(pathOfDebugFlowLog))
        mkdirSync(pathOfDebugFlowLog, { recursive: true });
      this.debugFlowLog = createWriteStream(options.debugFlowLogFilename);
    }

    // attempt options
    this.options.verboseRehydration = options.verboseRehydration || false;

    // search tree initialization (allows the implementation to override this)
    this.attempts = this.attempts || new AttemptSearchTree();
  }

  //// ABSTRACT METHODS ////

  abstract run(input: string): Promise<string>;

  //// HELPER METHODS ////

  async runQuery(dbQuery: string, objective: string) {
    this.debugFlowLog?.write("runQuery\n");

    console.log(
      `dbQuery (${this.queryCount++}) >>>>>>\n${dbQuery}\n<<<<<< dbQuery`
    );

    let ret: any = null;
    let err: any = null;

    let queryResultType = QueryResultType.Success;

    try {
      const session = driver.session({ defaultAccessMode: neo4j.session.READ });
      const result = await session.run(dbQuery);
      session.close();
      if (this.options.verboseQuerying) {
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

    const attempt = new Attempt(
      {
        objective,
        dbQuery,
        resultData: ret,
        error: err,
        frozenDiscoveredKnowledge: this.discoveredKnowledge,
        resultType: queryResultType,
      },
      this.options
    );

    // This update the cursor
    this.attempts.push(attempt);

    return attempt;
  }

  protected static replacer(key: string, value: any) {
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

  protected static truncate(result: any) {
    let resultText = JSON.stringify(result, AgentBase.replacer, 2);

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

  dumpState() {
    const cwd = process.cwd();
    console.log(`Dumping state to ${cwd}/debug`);
    // ensure debug directory exists
    if (!existsSync("debug")) mkdirSync("debug", { recursive: true });
    writeFileSync("debug/knowledge", this.discoveredKnowledge);
    this.attempts.dumpToFile("debug/search_tree.json");
  }

  //// LLM UTILITY FUNCTIONS ////

  protected async getAllProperties({ label }: { label: string }) {
    console.log("CALLED FUNCTION: getAllProperties", { label });

    // remove quotes from label if they exist
    const oldLabel = label;
    label = label.replace(/"/g, "").replace(/'/g, "");
    if (oldLabel !== label) {
      console.log(`Label ${oldLabel} was replaced with ${label}`);
    }

    const session = driver.session({ defaultAccessMode: neo4j.session.READ });
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
      value: {
        property_names: result.records[0].get("propertyNames") as string[],
      },
    };
  }

  protected async doesRelationshipExist({
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

    const session = driver.session({ defaultAccessMode: neo4j.session.READ });
    const result = await session.run(`MATCH ()-[r:${relationship}]-()
    RETURN COUNT(r) > 0 as relationshipExists`);
    session.close();

    console.log(
      "doesRelationshipExist result",
      result.records[0].get("relationshipExists")
    );

    return {
      value: {
        relationship_count: result.records[0].get(
          "relationshipExists"
        ) as boolean,
      },
    };
  }
}
