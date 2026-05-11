import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Expertise />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
