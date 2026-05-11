import { Leaf, Heart, Globe, ArrowRight } from 'lucide-react';
import './About.css';
import profileImg from '/profile.jpg';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-image-column reveal reveal-delay-1">
            <div className="premium-image-wrapper">
              <div className="image-backdrop"></div>
              <img 
                src={profileImg} 
                alt="Anas Mayo Portrait" 
                className="premium-profile-image"
              />
              
              {/* Floating Elements */}
              <div className="floating-badge badge-1 glass">
                <Leaf size={20} className="badge-icon" />
                <span>Resilience</span>
              </div>
              <div className="floating-badge badge-2 glass">
                <Globe size={20} className="badge-icon" />
                <span>Global Impact</span>
              </div>
            </div>
          </div>

          <div className="about-text-column reveal reveal-delay-2">
            <div className="about-header">
              <h2 className="about-title">
                Innovating for a <span className="text-highlight">Sustainable</span> World
              </h2>
              <div className="title-underline"></div>
            </div>
            
            <h3 className="about-subtitle">
              Information Technology Student at Mindanao State University, Marawi City
            </h3>
            
            <div className="about-description">
              <p>
                My passion lies at the intersection of technological advancement and environmental preservation. As an IT student, I am dedicated to discovering how digital solutions can actively combat climate change and promote ecological balance.
              </p>
              <p>
                I firmly believe that software engineering and data analytics hold the key to building smarter, more resilient communities. By rethinking the way we design and deploy digital infrastructure, we can transition from simply consuming resources to actively regenerating them, ensuring that technology serves as a catalyst for environmental good.
              </p>
              <p>
                Looking ahead, my goal is to develop intelligent systems that empower local communities and drive global sustainability initiatives. I am eager to collaborate on projects that use coding, IoT, and innovative tech frameworks to leave a lasting, positive impact on our planet.
              </p>
            </div>
            
            <a href="#projects" className="btn btn-primary mt-8">
              Explore My Work <ArrowRight size={18} />
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
