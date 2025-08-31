// src/components/Hero.jsx
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = ({ data }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Information Management Specialist',
    'Full Stack Developer',
    'Data Analytics Expert',
    'System Designer',
    'Business Analytics Trainer'
  ];
  
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typeSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);
  
  return (
    <div className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-main">
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-name">{data.name}</h1>
          <div className="hero-title">
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </div>
          <p className="hero-tagline">{data.tagline}</p>
          
          <div className="hero-buttons">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-outline"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="hero-info">
            <div className="info-item">
              <FaMapMarkerAlt />
              <span>{data.location}</span>
            </div>
            <div className="info-item">
              <FaEnvelope />
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </div>
            <div className="info-item">
              <FaPhone />
              <a href={`tel:${data.phone}`}>{data.phone}</a>
            </div>
          </div>
          
          <div className="hero-social">
            {data.github && (
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
            )}
            {data.linkedin && (
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
            )}
            <a href={`mailto:${data.email}`} className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="hero-scroll">
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;