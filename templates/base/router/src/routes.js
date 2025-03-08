/**
 * {{projectName}} - Main Application Entry with Router
 *
 * This is the main entry point for your Eleva.js application with routing.
 * It initializes the app, sets up the router, and mounts the root component.
 */

import Eleva from "eleva";
import ElevaRouter from "eleva-router";
import App from "./components/App.js";
import routes from "./routes.js";

// Initialize Eleva application instance
const app = new Eleva("{{projectName}}");

// Register the App component
app.component("App", App);

// Configure the router
app.use(ElevaRouter, {
  container: document.getElementById("app"),
  mode: "history",
  routes: routes,
});

// For apps with router, you typically mount the App component,
// and the router handles mounting route components inside your App container
app
  .mount(document.getElementById("app"), "App")
  .then((instance) => {
    // App successfully mounted
    console.log("Application with router successfully mounted! 🚀");
  })
  .catch((error) => {
    // Handle mount errors
    console.error("Error mounting application:", error);
  });
