import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="text-container">
        <h1 className="fill-text">
          <span className="hi-text">Hi,</span><br />
          <span className="name-text">My Name is</span><br />
          <span className="name">Adham</span><br />
          <span className="dis">A Web Developer</span>
        </h1>
      </div>
      <div className="image-container">
        <img src="/images/Velocity.png" alt="Velocity Logo" className="velocity-image" />
      </div>
    </section>
  );
}

export default Home;
