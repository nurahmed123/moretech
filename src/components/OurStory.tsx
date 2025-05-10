import React from "react";
import { Award, Users, Globe } from "lucide-react";

const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
              Our Story
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              MoreTechBD was born in 2022, not in a fancy lab or a corporate
              office—but in the small bedroom of a 15-year-old dreamer, Khan
              Prince Yeasir Arafat, in Satkhira, Bangladesh. Inspired by his
              school bus driver, Sadik uncle, who lost his leg in an accident,
              Prince set out to solve a problem millions silently suffer
              from—lack of affordable assistive technologies in Bangladesh.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Starting with just basic tools, recycled materials, and pure
              determination, he built his first smart wheelchair prototype to
              empower people with disabilities to regain their independence.
              What began as a personal mission has now grown into
              RoboAid—Bangladesh’s rising leader in smart, locally manufactured
              assistive technologies. From smart wheelchairs to robotic aids, we
              are on a mission to make independence accessible for all.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  5+ Awards
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  For Innovation
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  1000+
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Lives Improved
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  10+
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Countries Served
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/bcf37744eeb6dcde725a802e5333a0846ea815bf_screenshot_2025-05-10_at_9.50.56___pm.png"
                alt="Our Team"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-500/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
