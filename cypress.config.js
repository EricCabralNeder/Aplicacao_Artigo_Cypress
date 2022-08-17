const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: "r6zrwh",
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    "chromeWebSecurity": false
  },
});


  //   module.exports = defineConfig({
  //     projectId: "r6zrwh",
  //     e2e: {
  //         setupNodeEvents(on, config) {
  //             on('file:preprocessor', webpackPreprocessor);
  //             AllureWriter(on, config);
  //             return config;
  //         }
  //     }
  // });