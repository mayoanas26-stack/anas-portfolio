import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Active link tracking
      const sections = ['about', 'education', 'experience', 'projects', 'expertise', 'achievements', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY >= section.offsetTop - 120) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',         href: '#about' },
    { name: 'Education',    href: '#education' },
    { name: 'Experience',   href: '#experience' },
    { name: 'Projects',     href: '#projects' },
    { name: 'Expertise',    href: '#expertise' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">

          {/* Logo */}
          <a href="#about" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
            Anas<span> Mayo</span>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links desktop-nav">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={activeLink === link.href.replace('#', '') ? 'active' : ''}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a href="#contact" className="nav-cta desktop-nav">
            Get In Touch
          </a>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={activeLink === link.href.replace('#', '') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>
              Get In Touch
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="drawer-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
