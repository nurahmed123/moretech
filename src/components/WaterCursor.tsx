import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const WaterCursor: React.FC = () => {
  const { theme } = useTheme();
  const cursorRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const body = document.body;
    
    const onMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        if (Math.random() > 0.7) {
          createTrail(e.clientX, e.clientY);
        }
      }
    };

    const onMouseDown = () => {
      if (cursor) {
        cursor.style.width = '60px';
        cursor.style.height = '60px';
      }
    };

    const onMouseUp = () => {
      if (cursor) {
        cursor.style.width = '80px';
        cursor.style.height = '80px';
      }
    };

    const createTrail = (x: number, y: number) => {
      const trail = document.createElement('div');
      trail.className = `absolute pointer-events-none rounded-full mix-blend-screen z-[9998] animate-fadeOut
        ${theme === 'dark' 
          ? 'bg-[radial-gradient(circle,rgba(147,51,234,0.3)_0%,rgba(147,51,234,0.1)_70%,rgba(147,51,234,0)_100%)]' 
          : 'bg-[radial-gradient(circle,rgba(107,70,193,0.3)_0%,rgba(107,70,193,0.1)_70%,rgba(107,70,193,0)_100%)]'
        }`;
      
      const size = Math.random() * 30 + 10;
      trail.style.width = `${size}px`;
      trail.style.height = `${size}px`;
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      
      body.appendChild(trail);
      
      setTimeout(() => trail.remove(), 800);
    };

    const createRipple = (x: number, y: number) => {
      const ripple = document.createElement('div');
      ripple.className = `absolute pointer-events-none rounded-full z-[9997] animate-ripple
        ${theme === 'dark' 
          ? 'border-2 border-purple-400/50' 
          : 'border-2 border-purple-600/50'
        }`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      body.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 800);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', (e) => {
      onMouseDown();
      createRipple(e.clientX, e.clientY);
    });
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [theme]);

  return (
    <div 
      ref={cursorRef}
      className={`fixed w-[80px] h-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full mix-blend-screen filter blur-[5px] z-[9999] transition-[width,height] duration-200
        ${theme === 'dark'
          ? 'bg-[radial-gradient(circle,rgba(147,51,234,0.6)_0%,rgba(147,51,234,0.4)_45%,rgba(147,51,234,0.2)_75%,rgba(147,51,234,0)_100%)]'
          : 'bg-[radial-gradient(circle,rgba(107,70,193,0.6)_0%,rgba(107,70,193,0.4)_45%,rgba(107,70,193,0.2)_75%,rgba(107,70,193,0)_100%)]'
        }`
      }
    >
      <div 
        className={`absolute top-[15%] left-[15%] w-[25%] h-[25%] rounded-full filter blur-[2px]
          ${theme === 'dark' 
            ? 'bg-white/80' 
            : 'bg-white/80'
          }`
        }
      />
    </div>
  );
};

export default WaterCursor;