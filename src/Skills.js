// src/components/Skills.js
import React, { useEffect, useState, useRef } from 'react';
import './Skills.css'; // Import the associated CSS file

const skillsData = [
  {
    name: 'HTML',
    image: '/images/HTML.svg',
    progress: 100, // Adjust the percentage as needed
    description: 'As a skilled web developer, I possess a strong command of HTML (Hypertext Markup Language), the foundational language of the web. With a keen eye for detail and a commitment to creating seamless user experiences, I leverage my HTML expertise to craft elegant and functional web solutions.',
  },
  {
    name: 'Css',
    image: '/images/Css.svg',
    progress: 95, // Adjust the percentage as needed
    description: 'As a dedicated web developer, I bring a mastery of CSS (Cascading Style Sheets) to the table, elevating the visual and interactive aspects of web design. Through a meticulous blend of creativity and technical prowess, I harness the power of CSS to craft stunning and user-friendly interfaces that captivate and engage.',
  },

  {
    name: 'JavaScript',
    progress: 94, // Adjust the percentage as needed
    image: '/images/JS.svg',
    description: 'As a versatile web developer, I possess a strong command of JavaScript, the programming language that powers dynamic and interactive web experiences. With a passion for problem-solving and a dedication to creating seamless user interactions, I harness the full potential of JavaScript to bring websites to life.',
  },

  {
    name: 'React',
    progress: 88, // Adjust the percentage as needed
    image: '/images/RT.svg',
    description: 'As an accomplished web developer, I possess an exceptional command of React, a powerful front-end JavaScript library. With a strong foundation in building user interfaces and a commitment to creating seamless user experiences, I leverage React to craft dynamic and interactive web applications.',
  },

  {
    name: 'Java',
    progress: 85, // Adjust the percentage as needed
    image: '/images/J.svg',
    description: 'As a proficient web developer, I bring an extensive skill set in Java, a versatile programming language renowned for its portability and suitability for a wide range of applications. With a focus on creating reliable, efficient, and scalable solutions, I leverage Java to build powerful and dynamic web applications..',
  },

  {
    name: 'PHP',
        progress: 90, // Adjust the percentage as needed

    image: '/images/Php.svg',
    description: 'As a seasoned web developer, I possess a comprehensive skill set in PHP, a server-side scripting language renowned for its versatility and capability to create dynamic web applications. With a focus on security, performance, and user experience, I leverage PHP to build powerful and reliable web solutions.    ',
  },
  // Skills data here...
];

function Skills() {
  const skillsContainerRef = useRef(null);
  const [skillsInView, setSkillsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (skillsContainerRef.current) {
        const skillsPosition = skillsContainerRef.current.getBoundingClientRect();
        if (skillsPosition.top < window.innerHeight) {
          setSkillsInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='skills' className="skills-container" ref={skillsContainerRef}>
      <div className="skills-content">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill ${skillsInView ? 'in-view' : ''}`}
            >
              <div className="circle-chart">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle-progress"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    strokeDasharray="0 100"
                    style={{
                      strokeDasharray: `${skill.progress} 100`,
                      transition: 'stroke-dasharray 1s ease-in-out',
                    }}
                  />
                </svg>
                <img src={skill.image} alt={skill.name} className="skill-icon" />
              </div>
              <div className="skill-name">{skill.name}</div> {/* Add this line */}
              <div className="skill-description">{skill.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Skills;
