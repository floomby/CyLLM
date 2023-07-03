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
  process.env.DB_URL,
  neo4j.auth.basic(process.env.DB_USER, process.env.DB_PASSWORD)
);

export { openai, driver, apiKey };
