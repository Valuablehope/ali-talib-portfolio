// src/components/Contact.jsx
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setTimeout(() => {
      setSending(false);
      setStatus('Message sent! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1000);
  };
  
  return (
    <div className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss how I can help bring your ideas to life
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities, 
              challenging projects, and innovative ideas. Feel free to reach out!
            </p>
            
            <div className="info-items">
              <a href={`mailto:${data.email}`} className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-value">{data.email}</span>
                </div>
              </a>
              
              <a href={`tel:${data.phone}`} className="info-item">
                <FaPhone className="info-icon" />
                <div>
                  <span className="info-label">Phone</span>
                  <span className="info-value">{data.phone}</span>
                </div>
              </a>
              
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">{data.location}</span>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-buttons">
                {data.linkedin && (
                  <a 
                    href={data.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn linkedin"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {data.github && (
                  <a 
                    href={data.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn github"
                  >
                    <FaGithub />
                  </a>
                )}
                <a 
                  href={`mailto:${data.email}`}
                  className="social-btn email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="form-input"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`form-button ${sending ? 'sending' : ''}`}
              disabled={sending}
            >
              {sending ? (
                <span>Sending...</span>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
            
            {status && (
              <div className="form-status success">{status}</div>
            )}
          </form>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 {data.name}. All rights reserved.</p>
          <p>Designed & Developed with ❤️ by Ali Talib</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;