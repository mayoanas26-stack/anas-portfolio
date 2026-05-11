import { ExternalLink, ArrowRight } from 'lucide-react';
import './Projects.css';
import chickenImg from '/chicken.jpg';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title reveal">Projects & Research</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          Practical applications of research in sustainable built environments.
        </p>

        <div className="projects-grid">
          {/* Featured Project */}
          <div className="project-card featured-project reveal reveal-delay-2 card">
            <div className="project-image">
              <img 
                src={chickenImg} 
                alt="Poultry Farm IoT System" 
              />
              <div className="project-overlay">
                <a href="#" className="project-link"><ExternalLink size={24} /></a>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">Capstone Project</span>
              <h3 className="project-title">Design of an IoT-Based Monitoring Environmental Condition of Poultry Farms in Balo-i, Lanao Del Norte</h3>
              <p className="project-description">
                A comprehensive IoT system developed to monitor critical environmental factors such as temperature, humidity, and air quality in poultry farms. Designed specifically for agricultural settings in Balo-i, this solution provides real-time data to help farmers optimize conditions, improve yield, and ensure the well-being of their livestock.
              </p>
              <a href="#" className="btn-text">View Repository <ArrowRight size={16} /></a>
            </div>
          </div>

          {/* Placeholder Projects */}
          <div className="project-card reveal reveal-delay-3 card">
            <div className="project-image placeholder-image">
              <div className="placeholder-content">
                <span>In Progress</span>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">Software Development</span>
              <h3 className="project-title">Carbon Tracker API</h3>
              <p className="project-description">
                Developing a lightweight API that allows businesses to calculate the carbon footprint of their server requests in real-time.
              </p>
            </div>
          </div>

          <div className="project-card reveal reveal-delay-3 card">
            <div className="project-image placeholder-image">
              <div className="placeholder-content">
                <span>Planning Phase</span>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">Hardware Lifecycle</span>
              <h3 className="project-title">E-Waste Management App</h3>
              <p className="project-description">
                Designing a mobile platform to connect university departments with certified electronics recyclers to ensure zero-landfill hardware disposal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
