const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "x97826",
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
