/**
 * Home Route Component
 *
 * The home page of your application.
 */

const Home = {
  setup({ signal, navigate }) {
    // Component state
    const count = signal(0);

    // Methods
    function increment() {
      count.value++;
    }

    function decrement() {
      if (count.value > 0) {
        count.value--;
      }
    }

    function goToAbout() {
      navigate("/about");
    }

    return {
      count,
      increment,
      decrement,
      goToAbout,
    };
  },

  template: (ctx) => `
      <section class="hero">
        <h1 class="hero-title">Welcome to Eleva.js</h1>
        <p class="hero-subtitle">
          You've successfully created a new Eleva project with routing enabled.
          This is the home page of your application.
        </p>
        <div class="hero-buttons">
          <button @click="goToAbout">Explore About Page</button>
          <button class="btn-outlined" @click="() => window.open('https://github.com/TarekRaafat/eleva', '_blank')">
            GitHub
          </button>
        </div>
      </section>
      
      <div class="card">
        <h2 class="text-primary">Interactive Counter</h2>
        <p>
          This counter demonstrates Eleva's reactive state system. 
          Click the buttons to see it in action.
        </p>
        
        <div class="counter" style="margin: 2rem 0;">
          <button @click="decrement">-</button>
          <div class="counter-display">${ctx.count.value}</div>
          <button @click="increment">+</button>
        </div>
      </div>
      
      <div class="features">
        <div class="card">
          <h3 class="feature-title">Routing Made Simple</h3>
          <p>Eleva Router provides intuitive client-side routing with three flexible modes: hash, query, and history.</p>
        </div>
        
        <div class="card">
          <h3 class="feature-title">Pure JavaScript</h3>
          <p>Build your entire application with native JavaScript - no special syntax or compilation required.</p>
        </div>
        
        <div class="card">
          <h3 class="feature-title">Signal-Based Reactivity</h3>
          <p>Eleva's fine-grained reactive system updates only what needs to change, keeping your app fast and efficient.</p>
        </div>
      </div>
    `,

  style: (ctx) => `
      .counter {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
      
      .counter-display {
        font-size: 1.5rem;
        font-weight: bold;
        min-width: 3rem;
        padding: 0.5rem;
        border-radius: 4px;
        color: var(--eleva-dark);
        background-image: var(--eleva-gradient);
        color: white;
      }
      
      .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
      }
      
      .feature-title {
        font-size: 1.25rem;
        color: var(--eleva-primary);
        margin-bottom: 0.5rem;
      }
    `,
};

export default Home;
