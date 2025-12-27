const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true, // 👈 Esto activa la grabación de video
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
