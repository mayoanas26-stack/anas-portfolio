import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Junior Software Engineer Intern',
      organization: 'GreenTech Solutions Inc.',
      date: 'Upcoming',
      status: 'upcoming'
    },
    {
      title: 'Student Intern',
      organization: 'DICT Region 10 Iligan City',
      date: 'Present',
      status: 'current'
    },
    {
      title: 'Data Analytics Workshop Facilitator',
      organization: 'Local Tech Hub Mindanao',
      date: '2023',
      status: 'completed'
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
