// src/components/ProjectCard.jsx
import { FaExpand, FaCode } from 'react-icons/fa';

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <div 
      className="project-card"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        '--project-color': project.color 
      }}
      onClick={onClick}
    >
      <div className="project-card-inner">
        <div className="project-image">
          <img 
            src={project.thumbnail || project.images?.[0] || project.image || '/api/placeholder/400/250'} 
            alt={project.title}
            loading="lazy"
          />
          <div className="project-overlay">
            <FaExpand className="expand-icon" />
          </div>
        </div>
        
        <div className="project-content">
          <span className="project-category">{project.category}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">
            {project.description.substring(0, 100)}...
          </p>
          
          <div className="project-tech">
            {project.tech.slice(0, 3).map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
            {project.tech.length > 3 && (
              <span className="tech-badge">+{project.tech.length - 3}</span>
            )}
          </div>
          
          <div className="project-footer">
            <button className="project-btn">
              <FaCode /> View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;