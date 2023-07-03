import { driver } from "./globals";
import neo4j from "neo4j-driver";

const doesPropertyExistAnywhere = async (property: string) => {
  const session = driver.session({ defaultAccessMode: neo4j.session.READ });
  const result = await session.run(
    `
    MATCH (n)
    WHERE n.${property} IS NOT NULL
    RETURN n
    `
  );
  session.close();
  return result.records.length > 0;
};

export { doesPropertyExistAnywhere };
