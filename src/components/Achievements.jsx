import { Award, Star, Users } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <h2 className="section-title reveal">Achievements & Fellowships</h2>
        
        <div className="achievements-grid">
          {/* Featured Card */}
          <div className="achievement-card featured reveal reveal-delay-1 card">
            <div className="card-icon featured-icon">
              <Star size={32} />
            </div>
            <h3>Global Eco-Tech Innovators Fellowship</h3>
            <span className="achievement-meta">2025 Cohort • Top 1% of Applicants</span>
            <p>
              Selected to participate in a prestigious international programme dedicated to training the next generation of IT professionals. Focused on deploying smart city technologies to advance sustainable community development and reduce carbon footprints.
            </p>
          </div>

          <div className="achievement-card reveal reveal-delay-2 card">
            <div className="card-icon">
              <Award size={28} />
            </div>
            <h3>Green Computing Excellence Award</h3>
            <span className="achievement-meta">Academic Excellence</span>
            <p>
              Recognized for outstanding research and implementation of energy-efficient software algorithms that significantly lower the processing power required for large-scale data analysis.
            </p>
          </div>

          <div className="achievement-card reveal reveal-delay-3 card">
            <div className="card-icon">
              <Users size={28} />
            </div>
            <h3>IT Student Council Representative</h3>
            <span className="achievement-meta">MSU Main Campus</span>
            <p>
              Elected by peers to lead technology-driven campus initiatives, bridging the gap between student needs and administrative capabilities while promoting digital literacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
