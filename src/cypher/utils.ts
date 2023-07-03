import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import CypherLexer from "./CypherLexer";
import CypherParser, { OC_PropertyKeyNameContext } from "./CypherParser";
import CypherListener from "./CypherListener";

/**
 * Returns all properties in a cypher query.
 * @param query cypher query
 * @returns Set of properties
 */
const allProperties = (query: string) => {
  const chars = new CharStream(query);
  const lexer = new CypherLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new CypherParser(tokens);
  const tree = parser.oC_Cypher();

  const properties = new Set<string>();

  class CypherTreeWalker extends CypherListener {
    enterOC_PropertyKeyName: (ctx: OC_PropertyKeyNameContext) => void =
      function (ctx) {
        properties.add(ctx.getText());
      };
  }

  const walker = new CypherTreeWalker();
  ParseTreeWalker.DEFAULT.walk(walker, tree);

  return properties;
};

export { allProperties };
