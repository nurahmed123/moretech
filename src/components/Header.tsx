import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollPosition: number;
}

const Header: React.FC<HeaderProps> = ({ scrollPosition }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isScrolled = scrollPosition > 10;
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 rounded-2xl ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/30 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="https://files.edgestore.dev/iz2sept3369gmc0f/publicFiles/_public/560b1ad9-dd9e-4458-a6e3-a2878525f718.png" 
              alt="MoreTechBD Logo" 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 
                  ${isScrolled 
                    ? 'text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400' 
                    : 'text-white/90 hover:text-white dark:text-gray-300 dark:hover:text-white'
                  } relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-600 after:to-indigo-500 hover:after:w-full after:transition-all after:duration-300`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className={`ml-4 p-2 rounded-md md:hidden transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 pt-16 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-6">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-xl font-medium text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;