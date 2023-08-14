import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './nav';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Loader from './Loader'; // Import the Loader component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data, initializing)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false when the app is ready
    }, 3000); // Adjust the timing as needed
  }, []);

  return (
    <div className="App">
      {isLoading ? <Loader /> : (
        <div>
          <header className="App-header">
            <div className="header-content">
              <img
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt="Logo"
                className="logo"
              />
              <Nav />
            </div>
          </header>
          <Home id="home"  />
          <Skills id="skills"  className="fade-in" />
          <Projects  className="fade-in" />
          <About  className="fade-in" />
        </div>
      )}
    </div>
  );
}

export default App;
