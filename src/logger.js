"use strict";

const chalk = require("chalk");
let bannerShown = false;

/**
 * Logger utility for consistent CLI messaging
 */
const logger = {
  /**
   * Log an informational message
   * @param {string} message - The message to display
   */
  info: (message) => {
    console.log(chalk.cyan("ℹ ") + message);
  },

  /**
   * Log a success message
   * @param {string} message - The message to display
   */
  success: (message) => {
    console.log(chalk.green("✓ ") + message);
  },

  /**
   * Log a warning message
   * @param {string} message - The message to display
   */
  warn: (message) => {
    console.log(chalk.yellow("⚠ ") + message);
  },

  /**
   * Log an error message
   * @param {string} message - The message to display
   * @param {Error} [error] - Optional error object
   */
  error: (message, error) => {
    console.error(chalk.red("✗ ") + message);
    if (error && error.stack) {
      console.error(chalk.dim(error.stack));
    }
  },

  /**
   * Display a heading
   * @param {string} message - The heading text
   */
  heading: (message) => {
    console.log("\n" + chalk.bold(message));
  },

  /**
   * Display a step in a multi-step process
   * @param {number} step - Current step number
   * @param {number} total - Total number of steps
   * @param {string} message - Step description
   */
  step: (step, total, message) => {
    console.log(chalk.cyan(`[${step}/${total}] `) + message);
  },

  /**
   * Creates an elegant banner with Eleva branding
   */
  banner: () => {
    if (bannerShown) return; // Skip if already shown

    const elevaPurple = chalk.hex("#4B0082");
    const elevaTeal = chalk.hex("#00BCD4");

    console.log("\n");
    console.log(elevaPurple("  ███████ ██      ███████ ██    ██  █████  "));
    console.log(elevaPurple("  ██      ██      ██      ██    ██ ██   ██ "));
    console.log(elevaTeal("  █████   ██      █████   ██    ██ ███████ "));
    console.log(elevaPurple("  ██      ██      ██       ██  ██  ██   ██ "));
    console.log(elevaPurple("  ███████ ███████ ███████   ████   ██   ██ "));
    console.log(
      "\n" +
        chalk.bold("  Pure JavaScript. Pure Performance. Simply Elegant.") +
        "\n"
    );

    bannerShown = true; // Mark as shown
  },
};

module.exports = logger;
