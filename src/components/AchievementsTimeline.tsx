import React from 'react';
import TimelineItem from './TimelineItem';
import { Trophy, Award, FileText, Star } from 'lucide-react';

const AchievementsTimeline: React.FC = () => {
  const achievements = [
    {
      year: '2023',
      title: 'National Innovation Award',
      description: 'Recognized by the Bangladesh Innovation Authority for breakthrough technology in assistive devices.',
      icon: <Trophy className="h-6 w-6" />,
      imagePath: 'https://images.pexels.com/photos/8553862/pexels-photo-8553862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      year: '2023',
      title: 'IEEE Conference Featured Research',
      description: 'Our AI algorithm for wheelchair control was featured at the IEEE International Conference on Robotics and Automation.',
      icon: <FileText className="h-6 w-6" />,
      imagePath: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      year: '2024',
      title: 'Asia MedTech Innovation Competition',
      description: 'Gold Medal winner at the prestigious Asia-Pacific Medical Technology Innovation Competition.',
      icon: <Award className="h-6 w-6" />,
      imagePath: 'https://images.pexels.com/photos/8370425/pexels-photo-8370425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      year: '2024',
      title: 'WHO Recognition',
      description: 'Endorsed by the World Health Organization as an exemplary innovation in accessible healthcare technology.',
      icon: <Star className="h-6 w-6" />,
      imagePath: 'https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      year: '2025',
      title: 'Global Accessibility Award',
      description: 'Received the Global Accessibility Innovation Award for making mobility solutions accessible to diverse populations.',
      icon: <Award className="h-6 w-6" />,
      imagePath: 'https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
            Our Achievements Journey
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Celebrating milestones and recognition in our mission to revolutionize mobility solutions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-indigo-500 rounded-full hidden md:block"></div>
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <TimelineItem 
                key={index}
                year={achievement.year}
                title={achievement.title}
                description={achievement.description}
                icon={achievement.icon}
                imagePath={achievement.imagePath}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-xl">
            <div className="bg-white dark:bg-gray-800 rounded-lg px-8 py-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Join Our Journey of Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                We're constantly pushing the boundaries of what's possible in assistive technology. 
                Stay tuned for more groundbreaking developments in our mission to enhance mobility.
              </p>
              <a 
                href="#vision" 
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
              >
                See Our Vision
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline;