"use strict";

const { program } = require("commander");
const path = require("path");
const { createProject } = require("./create-project");
const { version } = require("../package.json");
const logger = require("./logger");

// Define CLI
program
  .name("create-eleva-app")
  .description("CLI to scaffold Eleva.js projects")
  .version(version, "-v, --version", "output the current version");

// Create new project command
program
  .command("create [name]")
  .description("create a new Eleva.js project")
  .option("-y, --yes", "skip prompts and use default settings")
  .option("--router", "include Eleva Router")
  .option("--no-router", "exclude Eleva Router")
  .option("--typescript", "use TypeScript")
  .option("--no-typescript", "use JavaScript")
  .action(async (name, options) => {
    try {
      const projectPath = name
        ? path.resolve(process.cwd(), name)
        : process.cwd();
      await createProject(projectPath, options);
    } catch (error) {
      logger.error("Failed to create project:", error.message);
      process.exit(1);
    }
  });

// Add more commands here as needed

// Display help if no arguments provided
if (process.argv.length <= 2) {
  program.help();
}

// Parse CLI arguments
program.parse(process.argv);
