import { Building2, Zap, Cpu, ThermometerSun, Smartphone, LineChart } from 'lucide-react';
import './Expertise.css';

const Expertise = () => {
  const areas = [
    {
      title: 'Green Software Engineering',
      icon: <Cpu size={32} />,
      description: 'Designing and writing code that minimizes energy consumption and reduces the carbon footprint of digital applications.',
    },
    {
      title: 'Smart Energy Monitoring',
      icon: <Zap size={32} />,
      description: 'Developing IoT-based data pipelines to track, analyze, and optimize energy usage in modern infrastructures.',
    },
    {
      title: 'Sustainable Infrastructure',
      icon: <Building2 size={32} />,
      description: 'Evaluating cloud architectures and on-premise systems for ecological impact and long-term sustainability.',
    },
    {
      title: 'Climate Data Analytics',
      icon: <LineChart size={32} />,
      description: 'Utilizing machine learning and statistical models to interpret environmental data and predict climate patterns.',
    },
    {
      title: 'E-Waste Reduction Strategies',
      icon: <Smartphone size={32} />,
      description: 'Formulating IT policies and lifecycle management practices that actively decrease electronic waste in organizations.',
    },
    {
      title: 'Eco-centric System Design',
      icon: <ThermometerSun size={32} />,
      description: 'Creating robust technical frameworks that prioritize environmental resilience without sacrificing performance.',
    },
  ];

  return (
    <section id="expertise" className="section expertise">
      <div className="container">
        <h2 className="section-title reveal">Areas of Focus</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          Specialized skills bridging the gap between advanced information technology and ecological sustainability.
        </p>

        <div className="expertise-grid">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className={`expertise-card card reveal reveal-delay-${(index % 3) + 1}`}
            >
              <div className="expertise-icon">
                {area.icon}
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
