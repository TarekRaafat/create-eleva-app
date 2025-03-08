#!/usr/bin/env node

"use strict";

// Check if we're running in a Node.js environment
if (typeof process === "undefined" || !process.version) {
  console.error("Eleva CLI requires Node.js to run.");
  process.exit(1);
}

// Check for minimum Node.js version
const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split(".");
const major = parseInt(semver[0], 10);

if (major < 14) {
  console.error(
    "You are running Node " +
      currentNodeVersion +
      ".\n" +
      "Eleva CLI requires Node 14 or higher. \n" +
      "Please update your version of Node."
  );
  process.exit(1);
}

// Proceed with CLI execution
require("../src/cli");
