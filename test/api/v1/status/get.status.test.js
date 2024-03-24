test("Deve retornar 200 no endpoint /status", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);

  const responseBody = await res.json();

  expect(responseBody.database.version).toBe(16.0);
  expect(responseBody.database.max_connections).toBeDefined();
  expect(responseBody.database.active_connections).toBe(1);
});
