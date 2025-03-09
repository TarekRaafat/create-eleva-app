/**
 * App Component
 *
 * This is the main container component for your Eleva application.
 * It serves as the entry point for all other components.
 */

import HelloWorld from "./HelloWorld.js";

const App = {
  setup({ signal, onMount }) {
    // Application state
    const appTitle = signal("{{projectName}}");

    // Lifecycle hook for component mount
    onMount(() => {
      console.log("App component mounted");
    });

    return {
      appTitle,
    };
  },

  template: (ctx) => `
    <div class="app-container fade-in">
      <!-- App Header -->
      <header class="app-header">
        <div class="container">
          <div class="brand">
            <img src="/src/assets/images/logo.png" alt="Eleva Logo" class="app-logo" />
          </div>
          <nav>
            <ul class="nav-menu">
              <li><a href="/" class="nav-link active">Home</a></li>
              <li><a href="https://tarekraafat.github.io/eleva" class="nav-link">Documentation</a></li>
              <li><a href="https://github.com/TarekRaafat/eleva" target="_blank" class="nav-link">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <!-- Main Content -->
      <main class="app-main">
        <div class="container">
          <section class="hero">
            <h1 class="hero-title">Welcome to ${ctx.appTitle.value}</h1>
            <p class="hero-subtitle">
              You've successfully created a new Eleva project. Start building your 
              app with the power of pure vanilla JavaScript and unmatched performance.
            </p>
            <div class="hero-buttons">
              <button class="bg-gradient">Get Started</button>
              <button class="btn-outlined">Learn More</button>
            </div>
          </section>
          
          <!-- Sample Component -->
          <hello-world eleva-prop-msg="Congratulations on your new Eleva.js app!"></hello-world>
        </div>
      </main>
      
      <!-- App Footer -->
      <footer class="app-footer">
        <div class="container">
          <div class="footer-content">
            <p>&copy; ${new Date().getFullYear()} {{projectName}} - Built with Eleva.js</p>
            <ul class="footer-links">
              <li><a href="https://github.com/TarekRaafat/eleva" class="footer-link">Eleva.js</a></li>
              <li><a href="https://github.com/TarekRaafat/eleva/discussions" class="footer-link">Community</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  `,

  // Register child components
  children: {
    "hello-world": HelloWorld,
  },
};

export default App;
