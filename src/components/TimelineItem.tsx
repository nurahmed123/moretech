import React, { useRef, useEffect } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imagePath: string;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  icon,
  imagePath,
  isLeft
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove(isLeft ? '-translate-x-12' : 'translate-x-12');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [isLeft]);

  return (
    <div 
      ref={itemRef}
      className={`flex flex-col ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center transition-all duration-700 opacity-0 transform ${
        isLeft ? '-translate-x-12' : 'translate-x-12'
      }`}
    >
      {/* Year Marker */}
      <div className={`md:w-1/2 flex ${isLeft ? 'md:justify-end' : 'md:justify-start'} mb-4 md:mb-0`}>
        <div className={`w-full md:w-4/5 p-6 ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
          <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            <div className="relative h-48">
              <img 
                src={imagePath} 
                alt={title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4">
                  <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {year}
                  </div>
                  <h3 className="text-white text-lg font-bold">{title}</h3>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Node */}
      <div className="hidden md:flex items-center justify-center z-10">
        <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 border-4 border-purple-600 flex items-center justify-center shadow-lg">
          <div className="text-purple-600 dark:text-purple-400">
            {icon}
          </div>
        </div>
      </div>

      {/* Empty Space for alignment */}
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  );
};

export default TimelineItem;