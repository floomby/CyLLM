import { openai } from "./globals";

const computeEmbedding = async (input: string) => {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input,
  });

  return response.data[0].embedding;
};

// TODO convert all these to loops for performance

// While ada-002 returns unit vectors centroids are not necessarily a unit vector
const computeSimilarity = (embedding1: number[], embedding2: number[]) => {
  // cosine similarity
  const dotProduct = embedding1.reduce(
    (acc, val, i) => acc + val * embedding2[i],
    0
  );
  const magnitude1 = Math.sqrt(
    embedding1.reduce((acc, val) => acc + val * val, 0)
  );
  const magnitude2 = Math.sqrt(
    embedding2.reduce((acc, val) => acc + val * val, 0)
  );
  const similarity = dotProduct / (magnitude1 * magnitude2);
  return similarity;
};

const computeCentroid = (embeddings: number[][]) => {
  const centroid = embeddings.reduce((acc, embedding) => {
    return acc.map((val, i) => val + embedding[i]);
  }, Array(embeddings[0].length).fill(0));

  return centroid.map((val) => val / embeddings.length);
};

const normalize = (vector: number[]) => {
  const magnitude = Math.sqrt(vector.reduce((acc, val) => acc + val * val, 0));
  return vector.map((val) => val / magnitude);
};

export { computeEmbedding, computeSimilarity, computeCentroid, normalize };
