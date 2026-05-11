import { Mail, Send, Phone } from 'lucide-react';
import './Contact.css';

const LinkedinIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title reveal">Get In Touch</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          Interested in sustainability, urban development, or collaboration? Let's connect.
        </p>

        <div className="contact-grid">
          <div className="contact-info reveal reveal-delay-2">
            <h3>Contact Information</h3>
            <p>
              I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="contact-methods">
              <a href="mailto:mayoanas26@gmail.com" className="contact-method">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <span>mayoanas26@gmail.com</span>
                </div>
              </a>
              
              <a href="#" className="contact-method">
                <div className="contact-icon">
                  <LinkedinIcon size={24} />
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <span>Connect with me</span>
                </div>
              </a>
              
              <a href="tel:+639700810461" className="contact-method">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <span>+63 970 081 0461</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="contact-form-wrapper card reveal reveal-delay-3">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="How can we collaborate?" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
