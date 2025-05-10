import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesShowcase from './components/FeaturesShowcase';
import AchievementsTimeline from './components/AchievementsTimeline';
import FutureVision from './components/FutureVision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <AnimatePresence>
          {loading && <LoadingScreen progress={progress} />}
        </AnimatePresence>
        <Header scrollPosition={scrollPosition} />
        <main>
          <Hero />
          <FeaturesShowcase />
          <AchievementsTimeline />
          <FutureVision />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;