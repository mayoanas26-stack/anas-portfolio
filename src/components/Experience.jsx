import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'On-the-job Training (OJT)',
      organization: 'DICT Region 10 Iligan City',
      address: 'Iligan City Hall, Buhanginan Hills, Pala-o, Iligan City, 9200 Lanao del Norte',
      date: 'Present',
      status: 'current'
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title reveal">Experience</h2>
        
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`experience-item card reveal reveal-delay-${index + 1}`}
            >
              <div className="experience-icon">
                <Briefcase size={24} />
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <span className={`status-badge ${exp.status}`}>{exp.status}</span>
                </div>
                <h4 className="organization">{exp.organization}</h4>
                <div className="experience-address">
                  <MapPin size={14} />
                  <span>{exp.address}</span>
                </div>
                <div className="experience-date">
                  <Calendar size={16} />
                  <span>{exp.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
