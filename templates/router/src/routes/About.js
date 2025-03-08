/**
 * About Route Component
 *
 * About page of your application.
 */

const About = {
  setup({ navigate }) {
    function goHome() {
      navigate("/");
    }

    return {
      goHome,
    };
  },

  template: (ctx) => `
      <section class="about-page">
        <h1 class="hero-title">About This Project</h1>
        
        <div class="card">
          <h2>Eleva.js Framework</h2>
          <p>
            This project uses Eleva.js, a minimalist, lightweight, pure vanilla JavaScript
            frontend runtime framework. Eleva is designed for simplicity, performance, and
            control over your application.
          </p>
          
          <h3 class="mt-4 text-primary">Key Features:</h3>
          <ul class="feature-list">
            <li>
              <strong>Pure Vanilla JavaScript:</strong> 
              No new syntax to learn, just plain JavaScript.
            </li>
            <li>
              <strong>Component-Based Architecture:</strong> 
              Create reusable, self-contained components.
            </li>
            <li>
              <strong>Signal-Based Reactivity:</strong> 
              Fine-grained reactivity that only updates what needs to change.
            </li>
            <li>
              <strong>Zero Dependencies:</strong> 
              Standalone and lightweight (approximately ~4 KB minified).
            </li>
            <li>
              <strong>DOM Diffing & Patching:</strong> 
              Efficient DOM updates without a virtual DOM.
            </li>
          </ul>
        </div>
        
        <div class="card">
          <h2>About This Template</h2>
          <p>
            This template was generated with 
            <strong>Create Eleva App</strong>, a CLI tool for scaffolding Eleva.js projects.
            It includes:
          </p>
          
          <ul class="feature-list">
            <li>A well-structured project organization</li>
            <li>Route-based navigation</li>
            <li>Modern Vite-based build system</li>
            <li>Good examples of component structure and state management</li>
            <li>Responsive, clean design with Eleva branding</li>
          </ul>
          
          <div class="text-center mt-4">
            <button @click="goHome">Return to Home</button>
          </div>
        </div>
      </section>
    `,

  style: (ctx) => `
      .about-page {
        padding: 2rem 0;
      }
      
      .feature-list {
        margin-left: 1.5rem;
        margin-top: 1rem;
      }
      
      .feature-list li {
        margin-bottom: 0.75rem;
      }
      
      .mt-4 {
        margin-top: 1.5rem;
      }
      
      .text-center {
        text-align: center;
      }
    `,
};

export default About;
