import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Initialize particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 20);
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 5 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * 1 - 0.5;
        const speedY = Math.random() * 1 - 0.5;
        
        const colors = theme === 'dark' 
          ? ['rgba(107, 70, 193, 0.3)', 'rgba(79, 70, 229, 0.3)'] 
          : ['rgba(107, 70, 193, 0.2)', 'rgba(79, 70, 229, 0.2)'];
          
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push({ x, y, size, speedX, speedY, color });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
      }
      
      requestAnimationFrame(animateParticles);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };

    createParticles();
    animateParticles();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-500/10 dark:from-purple-600/20 dark:to-indigo-500/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500 leading-tight">
              Bangladesh's First AI-Powered Smart Wheelchair
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
              Redefining mobility with cutting-edge artificial intelligence, bringing independence and dignity to every user through intuitive control and advanced health monitoring.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#features" 
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Features
              </a>
              
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-medium rounded-lg hover:bg-purple-600/10 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/10 to-indigo-500/10 dark:from-purple-600/20 dark:to-indigo-500/20 p-4 sm:p-8 shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/6570c09670395fd65b52c39f5f28087eaa66d8fa_img-20250407-wa0007.jpg" 
                alt="AI-Powered Smart Wheelchair" 
                className="rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 transition-all duration-500 w-full max-w-md mx-auto"
              />
              
              <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md animate-pulse">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400 shadow-md">
                Moretechbd
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-600 dark:text-purple-400 animate-bounce"
        aria-label="Scroll to features"
      >
        <ArrowDownCircle className="h-10 w-10" />
      </button>
    </section>
  );
};

export default Hero;