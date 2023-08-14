import React, { useState, useEffect } from 'react';


function About() {
    const [animationActive, setAnimationActive] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          const boundingRect = aboutSection.getBoundingClientRect();
          const windowHeight = window.innerHeight;
  
          if (boundingRect.top <= windowHeight / 2) {
            setAnimationActive(true);
          } else {
            setAnimationActive(false);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={`about-section ${animationActive ? 'animate' : ''}`} id="about">
        <div className="about-content">
          <div className="profile-image-frame">
            <img src="/images/Velocity.png" alt="Adham Amer" className="profile-image" />
          </div>
          <div className="about-text-container">
            <h1 className="about-title">Unveiling the Developer Within</h1>
            <p className="about-introduction">
              Ahoy! I'm Adham Amer, the <span className="highlight">code artisan</span> who turns pixels into portals and imagination into interactivity.
            </p>
            <p className='text'>
              Born and raised in the enchanting land of <span className="highlight">Egypt</span>, I embarked on a digital odyssey with <span className="highlight">HTML</span> and <span className="highlight">CSS</span>. These humble beginnings paved the way for me to wield <span className="highlight">JavaScript</span>, bending it to my creative will and breathing life into static designs.
            </p>
            <p className='text'>
              If coding is my canvas, <span className="highlight">React</span> is my brush. Armed with its power, I craft user interfaces that dance with the senses. But my expertise doesn't stop at the front end – I traverse the realms of back-end technologies, from the elegance of <span className="highlight">Java</span> to the dynamism of <span className="highlight">PHP</span>.
            </p>
            <p className='text'>
              Let's not forget the thrill of troubleshooting and the exultation of finding elegant solutions. From debugging lines to sculpting user experiences, I indulge in the ever-evolving art of <span className="highlight">web craftsmanship</span>.
            </p>
            <p className="about-call-to-action">
              So, whether you're looking to create a digital masterpiece or brainstorm a concept, let's embark on a <span className="highlight">collaborative voyage</span> that transcends boundaries.
            </p>
          </div>
        </div>
      </div>
    );
  }

export default About;
