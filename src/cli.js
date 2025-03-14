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
  .argument("[name]", "project name (optional)")
  .option("-y, --yes", "skip prompts and use default settings")
  .option("--router", "include Eleva Router")
  .option("--no-router", "exclude Eleva Router")
  .option("--typescript", "use TypeScript")
  .option("--no-typescript", "use JavaScript")
  .action(async (name, options) => {
    try {
      // If no name is provided, use current directory
      const projectPath = name
        ? path.resolve(process.cwd(), name)
        : process.cwd();

      await createProject(projectPath, options);
    } catch (error) {
      logger.error("Failed to create project:", error.message);
      process.exit(1);
    }
  });

// Parse CLI arguments
program.parse(process.argv);
