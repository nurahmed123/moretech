import React from 'react';
import { Eye, Mic, Aperture as Gesture, Smartphone } from 'lucide-react';

const SmartControls: React.FC = () => {
  const controls = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Eye Control",
      description: "Advanced eye-tracking technology allows precise control through natural eye movements, making navigation intuitive and effortless."
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Voice Control",
      description: "State-of-the-art voice recognition system enables hands-free operation through natural language commands."
    },
    {
      icon: <Gesture className="h-8 w-8" />,
      title: "Gesture Control",
      description: "Sophisticated motion sensors interpret hand and head gestures for seamless control and navigation."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Remote Control",
      description: "Connect and control through our mobile app, offering comprehensive wheelchair management from your smart device."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
            Revolutionary Smart Controls
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Experience unparalleled control and independence with our cutting-edge smart control systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {controls.map((control, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6">
                <div className="text-purple-600 dark:text-purple-400">
                  {control.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {control.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300">
                {control.description}
              </p>
              
              <div className="mt-6 flex items-center text-purple-600 dark:text-purple-400">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartControls;