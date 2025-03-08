/**
 * App Component with Router
 *
 * This is the main container component for your Eleva application.
 * It includes navigation with router integration.
 */

const App = {
  setup({ signal, route, navigate, onMount }) {
    // Application state
    const appTitle = signal("{{projectName}}");

    // Router active link checking
    function isActive(path) {
      return route.path === path;
    }

    // Lifecycle hook for component mount
    onMount(() => {
      console.log("App component mounted with router");
      console.log("Current route:", route.path);
    });

    return {
      appTitle,
      isActive,
      navigate,
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
                <li>
                  <a href="javascript:void(0)" 
                     class="nav-link ${ctx.isActive("/") ? "active" : ""}" 
                     @click="() => navigate('/')">
                    Home
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" 
                     class="nav-link ${ctx.isActive("/about") ? "active" : ""}" 
                     @click="() => navigate('/about')">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://github.com/TarekRaafat/eleva" 
                     target="_blank" 
                     class="nav-link">
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        <!-- Router View Container -->
        <!-- The router will inject the current route component here -->
        <main class="app-main">
          <div class="container">
            <div id="router-view"></div>
          </div>
        </main>
        
        <!-- App Footer -->
        <footer class="app-footer">
          <div class="container">
            <div class="footer-content">
              <p>&copy; ${new Date().getFullYear()} ${
    ctx.appTitle.value
  } - Built with Eleva.js</p>
              <ul class="footer-links">
                <li><a href="https://github.com/TarekRaafat/eleva" class="footer-link">Eleva.js</a></li>
                <li><a href="https://github.com/TarekRaafat/eleva/discussions" class="footer-link">Community</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    `,
};

export default App;
