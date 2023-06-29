import neo4j, { Session } from "neo4j-driver";
import { driver } from "./globals";

const addEntity = async (
  session: Session,
  name: string,
  kind: string,
  eid: string
) => {
  const result = await session.run(
    "CREATE (n:Entity {name: $name, kind: $kind, eid: $eid}) RETURN n",
    { name, kind, eid }
  );

  const singleRecord = result.records[0];
  const node = singleRecord.get(0);

  console.log(node.properties);
};

const addUtterance = async (
  session: Session,
  speakerEid: string,
  listenerEids: string[],
  text: string,
  precedingUtteranceId?: string // neo4j id
) => {
  let query = `MATCH (n:Entity {eid: $speakerEid})
    CREATE (n)-[:SAYS]->(m:Utterance {text: $text})
    WITH m
    UNWIND $listenerEids AS listenerEid
    MATCH (l:Entity {eid: listenerEid})
    CREATE (m)-[:TO]->(l)`;

  if (precedingUtteranceId) {
    query += `
      WITH m
      MATCH (p:Utterance) WHERE id(p) = toInteger($precedingUtteranceId)
      CREATE (m)-[:FOLLOWS]->(p)`;
  }

  query += ` RETURN m`;

  const result = await session.run(query, {
    speakerEid,
    listenerEids,
    text,
    precedingUtteranceId,
  });

  const singleRecord = result.records[0];
  const node = singleRecord.get(0);

  console.log(node);

  return node.identity.toString();
};

const getUtteranceChain = async (
  session: Session,
  utteranceId: string,
  maxAncestors: number
) => {
  let query = `
    MATCH (u:Utterance) WHERE id(u) = toInteger($utteranceId)
    WITH u
    MATCH (u)-[:FOLLOWS*0..${maxAncestors}]->(p:Utterance)
    RETURN id(p) AS id, p.text AS text
  `;

  const result = await session.run(query, { utteranceId });
  const records = result.records;

  let chain = [];
  for (let i = records.length - 1; i >= 0; i--) {
    let record = records[i];
    chain.push({ id: record.get("id").toString(), text: record.get("text") });
  }

  return chain;
};

const addSummary = async (
  session: Session,
  utteranceIds: string[],
  text: string,
  embedding: number[]
) => {
  let query = `
    CREATE (s:Summary {text: $text, embedding: $embedding})
    WITH s
    UNWIND $utteranceIds AS utteranceId
    MATCH (u:Utterance) WHERE id(u) = toInteger(utteranceId)
    CREATE (s)-[:SUMMARIZES]->(u)
    RETURN s`;

  const result = await session.run(query, { utteranceIds, text, embedding });

  const singleRecord = result.records[0];
  const node = singleRecord.get(0);

  // console.log(node.properties);

  return node.identity.toString();
};

const deleteAll = async (session: Session) => {
  await session.run("MATCH (n) DETACH DELETE n");
};

const run = async () => {
  const session = driver.session();
  try {
    await deleteAll(session);

    await addEntity(session, "floomby", "USER", "1");
    await addEntity(session, "charlie", "BOT", "2");
    const id = await addUtterance(session, "1", ["2"], "Hello, world!");

    const id2 = await addUtterance(session, "1", ["2"], "Hello, world! 2", id);

    const chainTex = await getUtteranceChain(session, id2, 10);

    const summaryId = await addSummary(
      session,
      chainTex.map((x) => x.id),
      "summary",
      [1, 2, 3]
    );

    console.log(chainTex);

    // const result = await session.run("MATCH (n) RETURN n");
    // console.log(result.records);
  } finally {
    await session.close();
  }
};

run()
  .catch(console.error)
  .then(() => driver.close());
