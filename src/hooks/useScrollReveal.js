import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 100;

      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
