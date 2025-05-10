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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <a
            href="#"
            className="flex items-center md:justify-start justify-center w-full md:w-auto"
          >
            <img
              src="https://files.edgestore.dev/iz2sept3369gmc0f/publicFiles/_public/560b1ad9-dd9e-4458-a6e3-a2878525f718.png"
              alt="MoreTechBD Logo"
              className="h-10 w-auto"
            />
          </a>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400'
                    : 'text-white/90 hover:text-white dark:text-gray-300 dark:hover:text-white'
                } relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-600 after:to-indigo-500 hover:after:w-full after:transition-all after:duration-300`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            <button
              className={`ml-4 p-2 rounded-md md:hidden transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 pt-16 transition-transform duration-500 ease-out transform backdrop-blur-md ${
          isMenuOpen ? 'translate-x-0 bg-white/95 dark:bg-gray-900/95' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col items-center">
          {/* Close Button */}
          <div className="flex justify-end mb-8 w-full">
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-full text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 w-full mx-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block w-full text-center text-xl font-semibold text-gray-900 dark:text-white bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 shadow-md hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
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
