// src/components/Skills.jsx
import { useState } from 'react';
import { 
  FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, 
  FaGitAlt, FaDatabase, FaPython, FaServer, FaCode,
  FaGoogle, FaMicrosoft, FaChartLine, FaChartBar, FaChartPie,
  FaMobileAlt, FaDesktop, FaTools, FaCogs, FaFileCode,
  FaFileExcel, FaWpforms, FaClipboardList
} from 'react-icons/fa';
import { 
  BiData, BiCodeAlt, BiLineChart, BiBarChartAlt2,
  BiCodeBlock, BiServer, BiAnalyse
} from 'react-icons/bi';
import { 
  BsDatabase, BsGraphUp, BsFileEarmarkCode,
  BsGrid3X3Gap, BsBarChart, BsClipboardData
} from 'react-icons/bs';
import {
  AiOutlineDatabase, AiOutlineBarChart, AiOutlinePieChart,
  AiOutlineCode, AiOutlineDotChart, AiOutlineFile
} from 'react-icons/ai';
import {
  MdOutlineAnalytics, MdOutlineDataExploration,
  MdDashboard, MdCode, MdStorage
} from 'react-icons/md';

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(data)[0]);
  
  // Simple and reliable icon mapping using only Font Awesome and basic icons
  const getIcon = (skillName) => {
    const iconStyle = { className: "skill-tech-icon" };
    
    switch(skillName) {
      // Frontend - Using Font Awesome icons that definitely exist
      case 'React':
        return <FaReact {...iconStyle} style={{ color: '#61DAFB' }} />;
      case 'Angular':
        return <FaAngular {...iconStyle} style={{ color: '#DD0031' }} />;
      case 'Flutter':
        return <FaMobileAlt {...iconStyle} style={{ color: '#02569B' }} />;
      case 'HTML':
        return <FaHtml5 {...iconStyle} style={{ color: '#E34C26' }} />;
      case 'CSS':
        return <FaCss3Alt {...iconStyle} style={{ color: '#1572B6' }} />;
      case 'JavaScript':
        return <FaJs {...iconStyle} style={{ color: '#F7DF1E' }} />;
      case 'Electron':
        return <FaDesktop {...iconStyle} style={{ color: '#47848F' }} />;
      
      // Backend & Database - Using generic but clear icons
      case 'SQL Server':
        return <FaDatabase {...iconStyle} style={{ color: '#CC2927' }} />;
      case 'MySQL':
        return <BsDatabase {...iconStyle} style={{ color: '#4479A1' }} />;
      case 'Access Database':
        return <AiOutlineDatabase {...iconStyle} style={{ color: '#A4373A' }} />;
      case 'Django':
        return <FaPython {...iconStyle} style={{ color: '#092E20' }} />;
      case 'Node.js':
        return <FaNodeJs {...iconStyle} style={{ color: '#339933' }} />;
      case 'C#':
        return <BiCodeBlock {...iconStyle} style={{ color: '#239120' }} />;
      case 'VB.NET':
        return <FaCode {...iconStyle} style={{ color: '#512BD4' }} />;
      case 'ASP.NET':
        return <FaFileCode {...iconStyle} style={{ color: '#512BD4' }} />;
      
      // Analytics & BI - Using chart icons
      case 'Looker Studio':
        return <BiLineChart {...iconStyle} style={{ color: '#4285F4' }} />;
      case 'Power BI':
        return <MdDashboard {...iconStyle} style={{ color: '#F2C811' }} />;
      case 'Data Analysis':
        return <MdOutlineAnalytics {...iconStyle} style={{ color: '#FF6B6B' }} />;
      case 'Trend Analysis':
        return <BsGraphUp {...iconStyle} style={{ color: '#4ECDC4' }} />;
      case 'Power Query':
        return <FaFileExcel {...iconStyle} style={{ color: '#217346' }} />;
      case 'Data Visualization':
        return <AiOutlinePieChart {...iconStyle} style={{ color: '#FFE66D' }} />;
      
      // Tools & Platforms
      case 'KOBO Toolkit':
        return <FaWpforms {...iconStyle} style={{ color: '#FF6900' }} />;
      case 'Google Scripts':
        return <FaGoogle {...iconStyle} style={{ color: '#0F9D58' }} />;
      case 'Microsoft Forms':
        return <FaMicrosoft {...iconStyle} style={{ color: '#FFB900' }} />;
      case 'Google Forms':
        return <FaClipboardList {...iconStyle} style={{ color: '#4285F4' }} />;
      case 'Advanced MS Office':
      case 'MS Office':
        return <FaMicrosoft {...iconStyle} style={{ color: '#D83B01' }} />;
      case 'Git':
        return <FaGitAlt {...iconStyle} style={{ color: '#F05032' }} />;
      
      // Default fallback
      default:
        return <FaCode {...iconStyle} style={{ color: '#5A6C7D' }} />;
    }
  };
  
  // Calculate skill levels (different for each skill for visual variety)
  const getSkillLevel = (index, category) => {
    const baseLevels = {
      "Database & Backend": 90,
      "Data Analytics & BI": 85,
      "Frontend Development": 88,
      "Tools & Platforms": 92
    };
    const base = baseLevels[category] || 85;
    return Math.min(base + (index * 2) % 10, 100);
  };
  
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
              {data[activeCategory].items.map((skill, index) => {
                const skillName = typeof skill === 'string' ? skill : skill.name;
                const skillLevel = getSkillLevel(index, activeCategory);
                
                return (
                  <div 
                    key={skillName}
                    className="skill-item"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="skill-inner">
                      <div className="skill-icon">
                        {getIcon(skillName)}
                      </div>
                      <span className="skill-name">{skillName}</span>
                      <div className="skill-level">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skillLevel}%` }}
                        >
                          <span className="skill-percentage">{skillLevel}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="skills-stats">
          <div className="stat-card">
            <div className="stat-icon-bg">
              <BiData />
            </div>
            <div className="stat-number">6+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-bg">
              <FaCode />
            </div>
            <div className="stat-number">9</div>
            <div className="stat-label">Major Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-bg">
              <FaCogs />
            </div>
            <div className="stat-number">30+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-bg">
              <BsGraphUp />
            </div>
            <div className="stat-number">100+</div>
            <div className="stat-label">Problems Solved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;