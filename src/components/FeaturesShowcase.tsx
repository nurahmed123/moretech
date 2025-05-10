import React from 'react';
import { Eye, Aperture as Gesture, Radical as MicVocal, Bell, Activity, PlugZap, HeartPulse, Shield } from 'lucide-react';

const FeaturesShowcase: React.FC = () => {
  const features = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Eye-Tracking Technology",
      description: "Control your wheelchair through intuitive eye movements, making navigation effortless for users with limited mobility."
    },
    {
      icon: <Gesture className="h-8 w-8" />,
      title: "Gesture Recognition",
      description: "Simple hand and head gestures allow for precise control and easy navigation through various environments."
    },
    {
      icon: <MicVocal className="h-8 w-8" />,
      title: "Voice Command System",
      description: "Issue verbal commands to control movement, adjust settings, or activate specific features hands-free."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Emergency Response",
      description: "Built-in alert system automatically detects falls or abnormal situations and notifies emergency contacts."
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Health Monitoring",
      description: "Real-time monitoring of vital signs with personalized alerts for healthcare providers or family members."
    },
    {
      icon: <PlugZap className="h-8 w-8" />,
      title: "Smart Charging",
      description: "Optimized battery management system with quick-charge capability and power efficiency algorithms."
    },
    {
      icon: <HeartPulse className="h-8 w-8" />,
      title: "Biometric Integration",
      description: "Monitors and adapts to the user's physical condition, ensuring optimal support throughout the day."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enhanced Safety",
      description: "Advanced obstacle detection and avoidance systems using AI to ensure the safest navigation possible."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
            Revolutionary Smart Features
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Our AI-powered wheelchair incorporates cutting-edge technology to provide unparalleled mobility, independence, and health monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-500/5 dark:from-purple-600/10 dark:to-indigo-500/10 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-purple-600 dark:text-purple-400">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
                
                <a 
                  href="#story" 
                  className="mt-6 flex items-center text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;