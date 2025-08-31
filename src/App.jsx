// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolio';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Handle scroll events
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading
    setTimeout(() => setLoading(false), 1500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="loader-text">AT</div>
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar 
        activeSection={activeSection} 
        scrolled={scrolled}
        personalData={portfolioData.personal}
      />
      
      <main>
        <section id="home">
          <Hero data={portfolioData.personal} />
        </section>
        
        <section id="about">
          <About 
            bio={portfolioData.personal.bio}
            education={portfolioData.education}
            languages={portfolioData.languages}
          />
        </section>
        
        <section id="skills">
          <Skills data={portfolioData.skills} />
        </section>
        
        <section id="projects">
          <Projects data={portfolioData.projects} />
        </section>
        
        <section id="experience">
          <Experience 
            data={portfolioData.experience}
            certifications={portfolioData.certifications}
          />
        </section>
        
        <section id="contact">
          <Contact data={portfolioData.personal} />
        </section>
      </main>
      
      {/* Scroll to top button */}
      <button 
        className={`scroll-top ${scrolled ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;