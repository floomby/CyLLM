/**
 * This can be used to run a natural language query against the database
 * @usage `node run.ts "Question to ask"`
 *
 */

import { existsSync, mkdirSync } from "fs";
import { driver } from "./globals";
import Agent from "./agent";

const run = async (question: string) => {
  const agent = new Agent();

  process.on("SIGINT", () => {
    // dump agent state to files and exit
    console.log("SIGINT received, dumping agent state to files and exiting");
    agent.dumpState();
    process.exit(1);
  });

  const foundResult = await agent.ask(question);

  console.log("Got result!", foundResult);
  agent.dumpState();
};

// make sure that logs directory exists
if (!existsSync("logs")) mkdirSync("logs", { recursive: true });

const question = process.argv[2];

run(question)
  .catch(console.error)
  .then(() => driver.close());
