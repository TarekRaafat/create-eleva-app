/**
 * {{projectName}} - Main Application Entry
 *
 * This is the main entry point for your Eleva.js application.
 * It initializes the app and mounts the root component.
 */

import Eleva from "eleva";
import App from "./components/App.js";

// Initialize Eleva application instance
const app = new Eleva("{{projectName}}");

// Register the App component
app.component("App", App);

// Mount the App component to the DOM
app
  .mount(document.getElementById("app"), "App")
  .then((instance) => {
    // App successfully mounted
    console.log("Application successfully mounted! 🚀");
  })
  .catch((error) => {
    // Handle mount errors
    console.error("Error mounting application:", error);
  });
