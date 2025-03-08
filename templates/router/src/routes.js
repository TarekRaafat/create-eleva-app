/**
 * Application Routes
 *
 * This file defines the routes for your Eleva application.
 * Each route maps a URL path to a component.
 */

import Home from "./routes/Home.js";
import About from "./routes/About.js";
import NotFound from "./routes/NotFound.js";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

// Default route (404 Not Found)
const defaultRoute = {
  path: "/404",
  component: NotFound,
};

// Export both routes array and default route
export default routes;
export { defaultRoute };
