// src/components/Experience.jsx
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCertificate } from 'react-icons/fa';

const Experience = ({ data, certifications }) => {
  return (
    <div className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">
            Building expertise through diverse roles and continuous learning
          </p>
        </div>
        
        <div className="experience-content">
          <div className="timeline">
            <div className="timeline-line"></div>
            {data.map((exp, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-dot">
                  <FaBriefcase />
                </div>
                <div className="timeline-card">
                  <div className="card-header">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="company-name">{exp.company}</div>
                  </div>
                  <div className="card-meta">
                    <span className="meta-item">
                      <FaCalendar /> {exp.period}
                    </span>
                    <span className="meta-item">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                  <ul className="highlights-list">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="certifications">
            <h3 className="cert-title">
              <FaCertificate /> Professional Certifications
            </h3>
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="cert-icon">{cert.icon}</div>
                  <div className="cert-content">
                    <h4>{cert.name}</h4>
                    <span>{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;