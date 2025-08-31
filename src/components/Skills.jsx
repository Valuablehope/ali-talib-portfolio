// src/components/Skills.jsx
import { useState } from 'react';

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(data)[0]);
  
  return (
    <div className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for modern development and data analysis
          </p>
        </div>
        
        <div className="skills-content">
          <div className="skills-categories">
            {Object.entries(data).map(([category, info]) => (
              <button
                key={category}
                className={`skill-category ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                <span className="category-icon">{info.icon}</span>
                <span className="category-name">{category}</span>
              </button>
            ))}
          </div>
          
          <div className="skills-display">
            <div className="skills-grid">
              {data[activeCategory].items.map((skill, index) => (
                <div 
                  key={skill}
                  className="skill-item"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="skill-inner">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-level">
                      <div className="skill-progress"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="skills-stats">
          <div className="stat-card">
            <div className="stat-number">6+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">9</div>
            <div className="stat-label">Major Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100+</div>
            <div className="stat-label">Problems Solved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;