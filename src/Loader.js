// src/components/Loader.js
import React, { useState, useEffect } from 'react';
import './Loader.css';

function Loader() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prevProgress => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        clearInterval(timer);
        return prevProgress;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader">
        <span>{loadingProgress}%</span>
      </div>
    </div>
  );
}

export default Loader;
