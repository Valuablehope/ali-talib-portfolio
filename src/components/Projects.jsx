// src/components/Projects.jsx
import { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = ['All', ...new Set(data.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? data 
    : data.filter(project => project.category === filter);
  
  return (
    <div className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore my portfolio of system designs, web applications, and mobile solutions
          </p>
        </div>
        
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close" 
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <span className="modal-category">{selectedProject.category}</span>
              </div>
              
              <div className="modal-body">
                <div className="modal-image">
                  <img 
                    src={selectedProject.image || '/api/placeholder/600/400'} 
                    alt={selectedProject.title}
                  />
                </div>
                
                <div className="modal-details">
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <div className="modal-features">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-tech">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {selectedProject.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;