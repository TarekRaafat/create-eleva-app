"use strict";

const inquirer = require("inquirer");
const validateProjectName = require("validate-npm-package-name");
const chalk = require("chalk");

/**
 * Prompts the user for project configuration
 * @param {string} projectName - Default project name
 * @param {Object} options - Command line options
 * @returns {Promise<Object>} User selections
 */
async function promptForOptions(projectName, options) {
  // Skip prompts if using --yes flag
  if (options.yes) {
    return {
      projectName,
      useRouter: options.router === undefined ? false : options.router,
      useTypeScript:
        options.typescript === undefined ? false : options.typescript,
      packageManager: "npm",
    };
  }

  console.log(
    chalk.bold("\n🚀 Welcome to Eleva CLI! Let's set up your new project.\n")
  );

  const questions = [];

  // Validate project name if provided
  if (!projectName) {
    questions.push({
      type: "input",
      name: "projectName",
      message: "What is the name of your project?",
      default: "eleva-app",
      validate: (input) => {
        const validation = validateProjectName(input);
        if (validation.validForNewPackages) return true;
        return `Invalid project name: ${
          validation.errors && validation.errors.join(", ")
        }`;
      },
    });
  }

  // Only ask for router if not explicitly set in options
  if (options.router === undefined) {
    questions.push({
      type: "confirm",
      name: "useRouter",
      message: "Would you like to include Eleva Router?",
      default: false,
    });
  }

  // Only ask for TypeScript if not explicitly set in options
  if (options.typescript === undefined) {
    questions.push({
      type: "confirm",
      name: "useTypeScript",
      message: "Would you like to use TypeScript?",
      default: false,
    });
  }

  // Package manager selection
  questions.push({
    type: "list",
    name: "packageManager",
    message: "Which package manager do you prefer?",
    choices: ["npm", "yarn", "pnpm"],
    default: "npm",
  });

  const answers = await inquirer.prompt(questions);

  return {
    projectName: projectName || answers.projectName,
    useRouter:
      options.router === undefined ? answers.useRouter : options.router,
    useTypeScript:
      options.typescript === undefined
        ? answers.useTypeScript
        : options.typescript,
    packageManager: answers.packageManager,
  };
}

module.exports = {
  promptForOptions,
};
