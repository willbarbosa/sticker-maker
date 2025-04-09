const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: ".",
});

// Add any custom config to be passed to Jest
const config = {
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  testTimeout: 60000,
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};

module.exports = createJestConfig(config);
