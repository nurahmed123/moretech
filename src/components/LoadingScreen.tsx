import React from 'react';
import { motion } from 'framer-motion';
import { Armchair as Wheelchair } from 'lucide-react';

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-600/10 to-indigo-500/10 dark:from-purple-600/20 dark:to-indigo-500/20 backdrop-blur-lg"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-8"
        >
          <Wheelchair className="w-16 h-16 text-purple-600 dark:text-purple-400" />
        </motion.div>

        <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 relative"
          >
            <motion.div
              animate={{
                x: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-600 dark:text-gray-300"
        >
          Coming...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;