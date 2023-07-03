import { writeFileSync } from "fs";
import { Attempt, QueryResultType } from "./agentBase";

// We will log all our searches and discoveries into a tree
export type SearchTreeNode = {
  depth: number;
  children: SearchTreeNode[];
  parent: SearchTreeNode | null;
  attempt: Attempt;
};

export class AttemptSearchTree {
  root: SearchTreeNode | null = null;
  previousQueries: Map<string, SearchTreeNode[]> = new Map();
  useMap: boolean = false;

  constructor(useMap: boolean = false) {
    this.useMap = useMap;
    if (useMap) {
      this.previousQueries = new Map();
    }
  }

  cursor: SearchTreeNode | null = null;

  addNode(attempt: Attempt, parent: SearchTreeNode | null) {
    const newNode = {
      attempt,
      children: [],
      parent,
      depth: parent ? parent.depth + 1 : 0,
    };

    if (!this.root) {
      this.root = newNode;
      this.cursor = newNode;
    } else {
      parent.children.push(newNode);
    }

    if (this.useMap) {
      const previousQueries = this.previousQueries.get(attempt.dbQuery);
      if (previousQueries) {
        previousQueries.push(newNode);
      } else {
        this.previousQueries.set(attempt.dbQuery, [newNode]);
      }
    }

    return newNode;
  }

  // append at the cursor as if this was a linked list
  push(attempt: Attempt) {
    this.cursor = this.addNode(attempt, this.cursor);
    return this.cursor;
  }

  /**
   * Dump the tree to a file (TODO add optional attempt rehydration)
   * @param filename 
   */
  dumpToFile(filename: string) {
    writeFileSync(
      filename,
      JSON.stringify(
        this.root,
        (key, value) => {
          // chop all parent references
          if (key === "parent") {
            return undefined;
          } else if (key === "resultType") {
            switch (value) {
              case QueryResultType.Success:
                return "Success";
              case QueryResultType.Empty:
                return "Empty";
              case QueryResultType.Error:
                return "Error";
              case QueryResultType.UselessResult:
                return "UselessResult";
              default:
                return value;
            }
          } else if (key === "result") {
            if (value === null) {
              return "results omitted for performance reasons";
            }
          }

          return value;
        },
        2
      )
    );
  }

  /**
   * Get the last n parent nodes of the cursor
   *
   * @param n number of nodes to return
   * @returns an unlinked array of the last n nodes
   */
  tail(n: number) {
    const tail: SearchTreeNode[] = [];
    let cursor = this.cursor;
    while (cursor && tail.length < n) {
      tail.push({
        ...cursor,
      });
      const last = tail[tail.length - 1];
      delete (last as SearchTreeNode).children;
      delete (last as SearchTreeNode).parent;
      cursor = cursor.parent;
    }
    return tail.reverse();
  }

  lastBacktrackLocation: SearchTreeNode | null = null;

  /**
   * Backtrack the cursor n nodes
   *
   * @param n number of nodes to backtrack, if undefined then backtrack to the root
   * @returns the new cursor
   */
  backtrack(n?: number) {
    if (n === undefined) {
      this.cursor = this.root;
    }
    for (let i = 0; i < n; i++) {
      this.cursor = this.cursor?.parent || null;
    }
    this.lastBacktrackLocation = this.cursor;
    return this.cursor;
  }
}