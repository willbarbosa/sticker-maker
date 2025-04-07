const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: ".",
});

// Add any custom config to be passed to Jest
const config = {
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  testTimeout: 60000,
};

module.exports = createJestConfig(config);
