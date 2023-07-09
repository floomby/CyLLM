# CyLLM

LLM agent and utilities for neo4j graph databases.

This principally consists of an agent that explores and extracts data using cypher queries from a neo4j databases and the code to support this functionality.

## Usage

Specify your openai key and the database connection settings in an `.env` file. (see `.env.example`)

You can run a query with `npm run query -- "Your natural language question here."`.

This will use the universal agent to explore the database.
