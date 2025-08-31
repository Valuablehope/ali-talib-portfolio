// src/components/About.jsx
import { FaGraduationCap, FaLanguage, FaBriefcase, FaAward } from 'react-icons/fa';

const About = ({ bio, education, languages }) => {
  return (
    <div className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Bridging the gap between data and decisions, code and solutions
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="bio">{bio}</p>
            
            <div className="about-highlights">
              <div className="highlight-card">
                <FaBriefcase className="highlight-icon" />
                <div>
                  <h4>Current Role</h4>
                  <p>Information Management Specialist at PUI</p>
                </div>
              </div>
              
              <div className="highlight-card">
                <FaAward className="highlight-icon" />
                <div>
                  <h4>Specialization</h4>
                  <p>Health Information Systems & Data Analytics</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-details">
            <div className="detail-section">
              <h3><FaGraduationCap /> Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="edu-degree">{edu.degree}</div>
                  {edu.field && <div className="edu-field">{edu.field}</div>}
                  <div className="edu-institution">{edu.institution}</div>
                  <div className="edu-period">{edu.period}</div>
                </div>
              ))}
            </div>
            
            <div className="detail-section">
              <h3><FaLanguage /> Languages</h3>
              <div className="languages-list">
                {languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <div className="lang-header">
                      <span className="lang-name">{lang.name}</span>
                      <span className="lang-level">{lang.level}</span>
                    </div>
                    <div className="lang-bar">
                      <div 
                        className="lang-progress" 
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;