import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import CV from './sections/CV';
import Education from './sections/Education';
import Experience from './sections/Experience';
import LearningJourney from './sections/LearningJourney';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CV />
        <Education />
        <Experience />
        <LearningJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
