import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import neo4j from "neo4j-driver";

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

const driver = neo4j.driver(
  "bolt://127.0.0.1:7687",
  neo4j.auth.basic("neo4j", "charliepassword")
);

export { openai, driver, apiKey };
