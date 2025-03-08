"use strict";

const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");
const ora = require("ora");
const chalk = require("chalk"); // Add this line
const { promptForOptions } = require("./questions");
const logger = require("./logger");

/**
 * Generate a new Eleva.js project
 * @param {string} projectPath - Path to create the project
 * @param {object} options - Command line options
 */
async function createProject(projectPath, options = {}) {
  try {
    // Extract project name from path
    const projectName = path.basename(projectPath);

    // Display welcome banner
    logger.banner();

    // Get configuration through interactive prompts
    const config = await promptForOptions(projectName, options);

    // Create project directory
    await createProjectDirectory(projectPath);

    // Copy template files
    await copyTemplateFiles(projectPath, config);

    // Install dependencies
    await installDependencies(projectPath, config);

    // Display success message
    displaySuccessMessage(projectPath, config);
  } catch (error) {
    logger.error("Failed to create project", error);
    throw error;
  }
}

/**
 * Create project directory
 * @param {string} projectPath - Path to create the project
 */
async function createProjectDirectory(projectPath) {
  const spinner = ora("Creating project directory...").start();

  try {
    const exists = await fs.pathExists(projectPath);

    if (exists) {
      const stats = await fs.stat(projectPath);

      if (stats.isDirectory()) {
        const files = await fs.readdir(projectPath);

        if (files.length > 0) {
          spinner.fail("Directory already exists and is not empty.");
          throw new Error("Target directory is not empty.");
        }
      } else {
        spinner.fail("A file with the same name already exists.");
        throw new Error("Cannot create project directory.");
      }
    } else {
      await fs.mkdir(projectPath, { recursive: true });
    }

    spinner.succeed("Project directory created.");
  } catch (error) {
    spinner.fail("Failed to create project directory.");
    throw error;
  }
}

/**
 * Copy template files to the project
 * @param {string} projectPath - Path to create the project
 * @param {object} config - Project configuration
 */
async function copyTemplateFiles(projectPath, config) {
  const spinner = ora("Copying template files...").start();

  try {
    // Base template path
    const templateDir = path.resolve(__dirname, "../templates/base");

    // Copy base template files
    await fs.copy(templateDir, projectPath);

    // If router is enabled, copy router templates
    if (config.useRouter) {
      const routerTemplateDir = path.resolve(__dirname, "../templates/router");
      await fs.copy(routerTemplateDir, projectPath, { overwrite: true });
    }

    // Process template files (replace variables)
    await processTemplateFiles(projectPath, config);

    spinner.succeed("Template files copied successfully.");
  } catch (error) {
    spinner.fail("Failed to copy template files.");
    throw error;
  }
}

/**
 * Process template files by replacing placeholders
 * @param {string} projectPath - Path to create the project
 * @param {object} config - Project configuration
 */
async function processTemplateFiles(projectPath, config) {
  // List of files to process
  const filesToProcess = ["package.json", "README.md", "public/index.html"];

  for (const file of filesToProcess) {
    const filePath = path.join(projectPath, file);

    // Skip if file doesn't exist
    if (!(await fs.pathExists(filePath))) continue;

    // Read file content
    let content = await fs.readFile(filePath, "utf8");

    // Replace placeholders
    content = content
      .replace(/{{projectName}}/g, config.projectName)
      .replace(/{{elevaVersion}}/g, "latest")
      .replace(/{{elevaRouterVersion}}/g, "latest");

    // Write updated content back
    await fs.writeFile(filePath, content, "utf8");
  }
}

/**
 * Install project dependencies
 * @param {string} projectPath - Path to the project
 * @param {object} config - Project configuration
 */
async function installDependencies(projectPath, config) {
  const spinner = ora(
    "Installing dependencies... This might take a few minutes."
  ).start();

  try {
    const { packageManager } = config;

    // Determine the install command
    const installCmd =
      packageManager === "yarn"
        ? "yarn"
        : packageManager === "pnpm"
        ? "pnpm install"
        : "npm install";

    // Execute the install command
    execSync(installCmd, { cwd: projectPath, stdio: "ignore" });

    spinner.succeed("Dependencies installed successfully.");
  } catch (error) {
    spinner.fail("Failed to install dependencies.");
    logger.warn(
      "You can try installing them manually by running npm install in the project directory."
    );
  }
}

/**
 * Display success message and next steps
 * @param {string} projectPath - Path to the project
 * @param {object} config - Project configuration
 */
function displaySuccessMessage(projectPath, config) {
  const projectName = path.basename(projectPath);
  const relativeProjectPath = path.relative(process.cwd(), projectPath);
  const cdPath = relativeProjectPath === "" ? "." : relativeProjectPath;

  logger.success(`Successfully created ${config.projectName}!\n`);

  console.log("Inside that directory, you can run several commands:");

  console.log(`\n  ${chalk.cyan("npm run dev")}`);
  console.log("    Starts the development server.\n");

  console.log(`  ${chalk.cyan("npm run build")}`);
  console.log("    Bundles the app for production.\n");

  console.log(`  ${chalk.cyan("npm run serve")}`);
  console.log("    Serves the production build locally.\n");

  console.log("Get started with:");

  if (cdPath !== ".") {
    console.log(`\n  ${chalk.cyan("cd")} ${cdPath}`);
  }

  console.log(`  ${chalk.cyan("npm run dev")}\n`);

  console.log("Happy coding! 🚀");
}

module.exports = { createProject };
