// For loading documents and concepts into the database

import neo4j from "neo4j-driver";

import { driver } from "./globals";
import { computeEmbedding } from "./embeddings";

const ingestChunk = async (label: string, text: string) => {
  const embedding = await computeEmbedding(text);

  const session = driver.session();
  await session.run(`CREATE (:${label} {text: $text, embedding: $embedding})`, {
    text,
    embedding,
  });
  session.close();
};

const knn = async (label: string, embedding: number[], k: number) => {
  const session = driver.session();

  const result = await session.run(
    `MATCH(n:${label}) WITH n, gds.similarity.cosine(n.embedding, $embedding) AS similarity RETURN n, similarity
    ORDER BY similarity DESC LIMIT $k`,
    { embedding, k: neo4j.int(k) }
  );

  session.close();

  return result.records.map((record) => record.get("n").properties);
};

// Lets test it out

const test = async () => {
  // await ingestChunk("Document", "This is a test document");
  // await ingestChunk("Document", "This is another test document");
  // await ingestChunk("Document", "This is yet another test document");

  const queryEmbedding = await computeEmbedding("yet another");

  const result = await knn("Document", queryEmbedding, 2);

  console.log(result);
};

test()
  .catch(console.error)
  .then(() => driver.close());
