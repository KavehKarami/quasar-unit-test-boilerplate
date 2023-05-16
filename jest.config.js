module.exports = {
  preset: "@quasar/quasar-app-extension-testing-unit-jest",
  transform: {
    ".*\\.(vue)$": "@vue/vue3-jest",
    ".*\\.(js)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleFileExtensions: ["js", "vue", "json"],
  setupFilesAfterEnv: ["<rootDir>/test/configs/setupTest.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/configs/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^~/(.*)$": "<rootDir>/src/$1",
  },
};
