// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Import the CSS file for styling
import VisibilitySensor from 'react-visibility-sensor';

function Projects() {
  return (
    <div className="projects-section" id="projects">
      <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
        {({ isVisible }) => (
          <>
            <h1 className={`projects-text ${isVisible ? 'fade-in-up' : ''}`}>
              Projects
            </h1>
            <p className='no-p'>I'm just starting my career and currently building my portfolio Stay tuned for exciting projects in the future!</p>
            <div className="projects-list">
            </div>
          </>
        )}
      </VisibilitySensor>
    </div>
  );
}

export default Projects;
