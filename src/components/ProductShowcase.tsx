import React from 'react';
import { Battery, Wifi, Zap, Shield } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const features = [
    {
      icon: <Battery className="h-6 w-6" />,
      title: "Long Battery Life",
      description: "Up to 12 hours of continuous use with quick charging capability"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Smart Connectivity",
      description: "Built-in WiFi and Bluetooth for seamless device integration"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Powerful Motors",
      description: "Dual 350W motors for smooth and efficient movement"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Safety",
      description: "Multiple sensors and emergency stop systems"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/33d295e623d7543ee5af99c5918f532670076e69_8672adcc-38db-4713-a0e4-6d672731cc4c.jpeg" 
                alt="Smart Wheelchair" 
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-500/20 rounded-2xl" />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
              Next-Generation Mobility Solution
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Our flagship smart wheelchair combines cutting-edge technology with ergonomic design to provide unparalleled comfort and independence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                    <div className="text-purple-600 dark:text-purple-400">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Order Now
              </button>
              <button className="px-6 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-medium rounded-lg hover:bg-purple-600/10 transition-colors duration-300">
                <a href="#story">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;