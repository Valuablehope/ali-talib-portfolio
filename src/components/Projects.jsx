// src/components/Projects.jsx
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const categories = ['All', ...new Set(data.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? data 
    : data.filter(project => project.category === filter);
  
  // Handle image navigation
  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };
  
  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };
  
  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };
  
  // Reset image index when opening a new project
  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };
  
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
              onClick={() => openProject(project)}
            />
          ))}
        </div>
        
        {/* Project Modal with Image Carousel */}
        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close" 
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
              
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <span className="modal-category">{selectedProject.category}</span>
              </div>
              
              <div className="modal-body">
                <div className="modal-image-carousel">
                  <div className="carousel-main">
                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <button 
                        className="carousel-btn carousel-prev" 
                        onClick={prevImage}
                        aria-label="Previous image"
                      >
                        <FaChevronLeft />
                      </button>
                    )}
                    
                    <div className="carousel-image-container">
                      <img 
                        src={selectedProject.images ? 
                          selectedProject.images[currentImageIndex] : 
                          selectedProject.image || '/api/placeholder/600/400'
                        } 
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="carousel-image"
                      />
                      
                      {selectedProject.images && selectedProject.images.length > 1 && (
                        <div className="image-counter">
                          {currentImageIndex + 1} / {selectedProject.images.length}
                        </div>
                      )}
                    </div>
                    
                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <button 
                        className="carousel-btn carousel-next" 
                        onClick={nextImage}
                        aria-label="Next image"
                      >
                        <FaChevronRight />
                      </button>
                    )}
                  </div>
                  
                  {/* Thumbnail Navigation */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <div className="carousel-thumbnails">
                      {selectedProject.images.map((img, index) => (
                        <button
                          key={index}
                          className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => selectImage(index)}
                          aria-label={`View image ${index + 1}`}
                        >
                          <img src={img} alt={`Thumbnail ${index + 1}`} />
                        </button>
                      ))}
                    </div>
                  )}
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