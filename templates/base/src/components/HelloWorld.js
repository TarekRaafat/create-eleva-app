/**
 * HelloWorld Component
 *
 * A simple component that demonstrates:
 * - Receiving props
 * - Component state with reactivity
 * - Event handling
 * - Component styling
 */

const HelloWorld = {
  setup({ signal, props }) {
    // Access props from the context
    const { msg } = props;

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

    return {
      msg,
      count,
      increment,
      decrement,
    };
  },

  // Component specific styles
  style: (ctx) => `
      .hello-world {
        padding: 2rem;
        margin: 2rem 0;
        border-radius: 8px;
        background-color: #f8f9fa;
        text-align: center;
      }
      
      .hello-world h2 {
        color: var(--eleva-primary);
        margin-bottom: 1rem;
      }
      
      .counter {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1.5rem 0;
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
      
      .feature-card {
        text-align: left;
        padding: 1.5rem;
        border-radius: 6px;
        background-color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }
      
      .feature-card:hover {
        transform: translateY(-5px);
      }
      
      .feature-title {
        font-size: 1.25rem;
        color: var(--eleva-primary);
        margin-bottom: 0.5rem;
      }
    `,

  template: (ctx) => `
      <div class="hello-world">
        <h2>${ctx.msg}</h2>
        
        <p>
          This is a simple component demonstrating Eleva's features.
          Try the counter below to see reactivity in action.
        </p>
        
        <div class="counter">
          <button @click="decrement">-</button>
          <div class="counter-display">${ctx.count.value}</div>
          <button @click="increment">+</button>
        </div>
        
        <div class="features">
          <div class="feature-card">
            <h3 class="feature-title">Pure Vanilla JavaScript</h3>
            <p>Build modern web apps with the simplicity and performance of native JS.</p>
          </div>
          
          <div class="feature-card">
            <h3 class="feature-title">Signal-Based Reactivity</h3>
            <p>Fine-grained reactive state management that only updates what needs to change.</p>
          </div>
          
          <div class="feature-card">
            <h3 class="feature-title">Component-Based Architecture</h3>
            <p>Create reusable, self-contained components for clean, maintainable code.</p>
          </div>
        </div>
      </div>
    `,
};

export default HelloWorld;
