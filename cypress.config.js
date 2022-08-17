    const { defineConfig } = require("cypress");
    const allureWriter = require('@shelex/cypress-allure-plugin/writer');
    const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
    const addCucumberPreprocessorPlugin =
      require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
    const createEsbuildPlugin =
      require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
    
    module.exports = defineConfig({
    projectId: "r6zrwh",
      e2e: {
        async setupNodeEvents(on, config) {
          allureWriter(on, config);
    
          const bundler = createBundler({
            plugins: [createEsbuildPlugin(config)],
          });
    
          on("file:preprocessor", bundler);
          await addCucumberPreprocessorPlugin(on, config);
    
          return config;
        },
        baseUrl: "https://www.saucedemo.com",
        specPattern: "cypress/e2e/features/*.feature",
        "chromeWebSecurity": false
      },
    });