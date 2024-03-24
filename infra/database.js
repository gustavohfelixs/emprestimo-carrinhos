import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
  });
  await client.connect();

  try {
    return await client.query(queryObject);
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

export default {
  query: query,
};
