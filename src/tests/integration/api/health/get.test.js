import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("GET /api/health", () => {
  describe("Anonymous user", () => {
    test("Check current health", async () => {
      const response = await fetch("http://localhost:3000/api/health");

      expect(response.status).toBe(200);
    });
  });
});
