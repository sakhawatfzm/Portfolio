import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader'; // Import the loader

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> 
      ) : (
        <div className="relative shadow-2xl rounded-b-lg overflow-hidden">
          <Navbar /> {/* Navbar Component */}
          <Header /> {/* Hero Component */}
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
