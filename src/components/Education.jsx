import { MapPin, BookOpen } from 'lucide-react';
import './Education.css';
import msuLogo from '/msulogo.png';

const Education = () => {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title reveal">Education</h2>
        
        <div className="education-list">
          <div className="education-item premium-card reveal reveal-delay-1">
            <div className="education-header-row">
              <div className="education-logo-box">
                <img src={msuLogo} alt="MSU Logo" className="education-main-logo" />
              </div>
              
              <div className="education-header-info">
                <h3 className="degree-title">Bachelor of Science in Information Technology</h3>
                <h4 className="institution-name">Mindanao State University</h4>
                
                <div className="education-meta">
                  <span className="school-campus">Main Campus Marawi City</span>
                  <span className="meta-divider">•</span>
                  <span className="location"><MapPin size={14} /> Marawi City, Philippines</span>
                </div>
              </div>
            </div>
            
            <div className="education-divider"></div>
            
            <div className="focus-areas">
              <div className="focus-header">
                <BookOpen size={18} className="focus-icon" /> 
                <h5>Key Focus Areas</h5>
              </div>
              <div className="tags premium-tags">
                <span className="tag">Software Engineering</span>
                <span className="tag">Database Management</span>
                <span className="tag">Web Development</span>
                <span className="tag">Network Security</span>
                <span className="tag">Data Structures</span>
                <span className="tag">IoT Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
