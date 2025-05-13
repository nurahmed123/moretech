import React from 'react';
import {
  Compass,
  Mic,
  Grid,
  Leaf,
  Heart,
  Tag
} from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const features = [
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Advanced Navigation",
      description:
        "Ultrasonic sensors with real-time mapping for seamless obstacle avoidance"
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Voice & Gesture Control",
      description:
        "Hands-free operation via voice commands and intuitive gesture inputs"
    },
    {
      icon: <Grid className="h-6 w-6" />,
      title: "Modular Design",
      description:
        "Customizable components adaptable to diverse user needs and preferences"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Eco-Friendly Materials",
      description:
        "Constructed with recyclable and sustainable materials for minimal environmental impact"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health Monitoring",
      description:
        "Integrated sensors track vitals and notify caregivers in real-time"
    },
    {
      icon: <Tag className="h-6 w-6" />,
      title: "Affordable Pricing",
      description:
        "Priced at 35,000 BDT—significantly lower than imported alternatives"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Replace src with your actual wheelchair image */}
              <img
                src="https://cdn.hack.ngo/slackcdn/66e360c0620a4f562a7cbd73156c5ca5.png"
                alt="RoboAid Smart Wheelchair"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-500/20 rounded-2xl" />
            </div>
          </div>

          {/* Text & Features */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
              RoboAid Smart Wheelchair
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Our flagship smart wheelchair blends cutting-edge robotics with ergonomic design,
              empowering independence with safety, comfort, and affordability.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
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

            {/* Calls to Action */}
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Buy Now
              </button>
              <button className="px-6 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-medium rounded-lg hover:bg-purple-600/10 transition-colors duration-300">
                <a href="#details">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
