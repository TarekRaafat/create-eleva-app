/**
 * {{projectName}} - Main Application Entry with Router
 *
 * This is the main entry point for your Eleva.js application with routing.
 * It initializes the app, sets up the router, and mounts the root component.
 */

import Eleva from "eleva";
import ElevaRouter from "eleva-router";
import { default as routes, defaultRoute } from "./routes.js";

// Initialize Eleva application instance
const app = new Eleva("{{projectName}}");

// Configure the router
app.use(ElevaRouter, {
  container: document.getElementById("app"),
  mode: "history",
  routes,
  defaultRoute,
});
