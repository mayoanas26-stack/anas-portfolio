import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-blob shape-1"></div>
        <div className="gradient-blob shape-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content reveal">
          <p className="hero-subtitle">Information Technology • Sustainability • Innovation</p>
          <h1 className="hero-title">
            Anas <span>Mayo</span>
          </h1>
          <p className="hero-tagline">
            Leveraging modern technology and data-driven solutions to build sustainable, eco-friendly digital ecosystems.
          </p>
          <div className="hero-actions">
            <a href="#about" className="btn btn-primary">
              Discover My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
