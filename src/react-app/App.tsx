// src/App.tsx

import "./App.css";

function App() {
  return (
    <div className="brochure-container">
      <header className="brochure-header">
        <h1>Business Name Digital Brochure</h1>
      </header>
      <section className="brochure-content">
        <div className="brochure-page">
          <img src="/placeholder-image-1.jpg" alt="Placeholder Image 1" className="brochure-image" />
          <div className="brochure-text">
            <h2>Welcome!</h2>
            <p>This is the first page of our digital brochure. Here you can showcase a compelling introductory message about your business.</p>
          </div>
        </div>
        <div className="brochure-page">
          <img src="/placeholder-image-2.jpg" alt="Placeholder Image 2" className="brochure-image" />
          <div className="brochure-text">
            <h2>Our Services/Products</h2>
            <p>Describe your key services or products in detail. Use clear and concise language, focusing on the benefits to the customer.</p>
          </div>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button
          onClick={() => {
            fetch("/api/")
              .then((res) => res.json() as Promise<{ name: string }>)
              .then((data) => setName(data.name));
          }}
          aria-label="get name"
        >
          Name from API is: {name}
        </button>
        <p>
          Edit <code>worker/index.ts</code> to change the name
        </p>
      </div>
      </section>
    </div>
  );
}

export default App;
