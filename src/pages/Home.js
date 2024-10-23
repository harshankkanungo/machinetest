import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <img
          src="https://images.squarespace-cdn.com/content/v1/56acc1138a65e2a286012c54/1541945499108-BUSUFTTQR9PWMCXL79HD/office-1209640_1920.jpg"
          alt="Community"
          className="hero-img"
        />
        <div className="hero-text">
          <h1>The Largest Community of Photo Enthusiasts</h1>
          <button className="join-btn">Join Today</button>
        </div>
      </section>

      <section className="features">
        <h2>Snap Photos and Share Like Never Before</h2>
        <div className="card-container">
          <div className="card">
            <h3>Feature 1</h3>
            <p>Capture high-quality images and share them instantly.</p>
            <button>Learn More</button>
          </div>
          <div className="card">
            <h3>Feature 2</h3>
            <p>Join a community of like-minded photography enthusiasts.</p>
            <button>Learn More</button>
          </div>
          <div className="card">
            <h3>Feature 3</h3>
            <p>Exclusive tools for editing and enhancing your photos.</p>
            <button>Learn More</button>
          </div>
          <div className="card">
            <h3>Feature 4</h3>
            <p>Get feedback and support from other photographers.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
