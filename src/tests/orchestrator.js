import retry from "async-retry";

async function waitForAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fetchHealthEndpoint, {
      retries: 100,
      maxTimeout: 1000,
    });

    async function fetchHealthEndpoint() {
      const response = await fetch("http://localhost:3000/api/health");

      if (response.status !== 200) {
        throw Error();
      }
    }
  }
}

const orchestrator = {
  waitForAllServices,
};

export default orchestrator;
