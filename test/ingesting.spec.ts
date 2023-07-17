import { assert } from "chai";
import neo4j from "neo4j-driver";

import { driver } from "../src/globals";
import { ingestChunk, knn } from "../src/loader";
import { computeEmbedding } from "../src/embeddings";

describe("Ingesting", () => {
  before(async () => {
    // clear all documents
    const session = driver.session();
    await session.run("MATCH (n:Document) DETACH DELETE n");
    session.close();
  });

  it("should ingest 3 documents and perform a query", async () => {
    await ingestChunk("Document", "This is a test document");
    await ingestChunk("Document", "This is another test document");
    await ingestChunk("Document", "This is yet another test document");

    const session = driver.session();
    const countResult = await session.run("MATCH (n:Document) RETURN count(n)");
    session.close();

    assert.equal(countResult.records[0].get("count(n)").toNumber(), 3);

    const queryEmbedding = await computeEmbedding("yet another");

    const queryResult = await knn("Document", queryEmbedding, 2);

    assert.equal(queryResult.length, 2);
    assert.equal(queryResult[0].text, "This is yet another test document");
    assert.equal(queryResult[1].text, "This is another test document");
  });

  // we need to close the driver after all tests
  after(async () => driver.close());
});
