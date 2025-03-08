/**
 * NotFound Route Component
 *
 * 404 page displayed when no routes match the current URL.
 */

const NotFound = {
  setup({ navigate }) {
    function goHome() {
      navigate("/");
    }

    return {
      goHome,
    };
  },

  template: (ctx) => `
      <div class="not-found-page">
        <div class="not-found-content">
          <h1 class="not-found-title">404</h1>
          <h2 class="not-found-subtitle">Page Not Found</h2>
          <p>Sorry, the page you are looking for does not exist or has been moved.</p>
          <button @click="goHome" class="mt-4">Return to Home</button>
        </div>
      </div>
    `,

  style: (ctx) => `
      .not-found-page {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 60vh;
        text-align: center;
      }
      
      .not-found-content {
        max-width: 600px;
        padding: 2rem;
      }
      
      .not-found-title {
        font-size: 6rem;
        margin: 0;
        background: var(--eleva-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
      }
      
      .not-found-subtitle {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: var(--eleva-gray);
      }
      
      .mt-4 {
        margin-top: 1.5rem;
      }
    `,
};

export default NotFound;
