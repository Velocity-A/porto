// src/components/SkillItem.js
import React from 'react';

const SkillItem = ({ skill }) => {
  return (
    <div className="skill-item">
      <img src={skill.image} alt={skill.name} className="skill-icon" />
      <p className="skill-name">{skill.name}</p>
    </div>
  );
};

export default SkillItem;
