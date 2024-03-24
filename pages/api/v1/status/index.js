import database from "../../../../infra/database";

export default async function status(request, response) {
  const databaseVersion = await database.query("SHOW server_version;");
  const databaseVersionValue = parseInt(databaseVersion.rows[0].server_version);

  const databaseMaxConnections = await database.query("SHOW max_connections;");
  const databaseMaxConnectionsValue = parseInt(
    databaseMaxConnections.rows[0].max_connections,
  );

  const databaseName = process.env.POSTGRES_DB;

  const databaseActiveConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1",
    values: [databaseName],
  });

  console.log(databaseActiveConnections);
  const databaseActiveConnectionsValues =
    databaseActiveConnections.rows[0].count;

  return response.status(200).json({
    database: {
      version: databaseVersionValue,
      max_connections: databaseMaxConnectionsValue,
      active_connections: databaseActiveConnectionsValues,
    },
  });
}
