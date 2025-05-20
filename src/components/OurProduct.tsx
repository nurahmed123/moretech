import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface Feature {
  title: string;
  image: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Eye Tracking",
    image: "https://cdn.hack.ngo/slackcdn/9a07b926ac59e497535380a82e1053a6.png",
    description: "Leverages precise eye-movement detection to enable hands-free navigation and selection, empowering users with limited mobility to interact intuitively with their environment.",
  },
  {
    title: "Joystick Control",
    image: "https://cdn.hack.ngo/slackcdn/eed58a02eddf6f0a5c9c352d8171487c.png",
    description: "Offers a classic manual interface for precise directional control, allowing smooth acceleration, deceleration, and turning with minimal effort.",
  },
  {
    title: "Gesture Control",
    image: "https://cdn.hack.ngo/slackcdn/79a5042534a7fee7eb79ea64c6d09921.png",
    description: "Interprets predefined hand or head movements via sensors to execute commands seamlessly, reducing reliance on physical input devices.",
  },
  {
    title: "Accident Prevention",
    image: "https://cdn.hack.ngo/slackcdn/daa73d164ccdf20204db5f7e94a04892.png",
    description: "Utilizes ultrasonic and infrared sensors to detect obstacles in real time, triggering automatic braking and alerts to prevent collisions.",
  },
  {
    title: "SOS (Save Our Souls)",
    image: "https://cdn.hack.ngo/slackcdn/56033817b91a186898484c23e5c6fdef.png",
    description: "One-touch emergency alert system that instantly notifies caregivers or emergency services with user location and status.",
  },
  {
    title: "Voice-Controlled System Using AI",
    image: "https://cdn.hack.ngo/slackcdn/178ea76d6e3b15e5e2b29933eb50dfbb.png",
    description: "Integrates advanced AI-driven speech recognition to process natural language commands, offering hands-free operation and custom voice profiles.",
  },
  {
    title: "Heart Rate Measurement System",
    image: "https://cdn.hack.ngo/slackcdn/a09e1d74eb39490fcf3d639a9dac1a4c.png",
    description: "Monitors the user's pulse in real time to provide continuous feedback on exertion levels and detect irregularities for proactive health management.",
  },
  {
    title: "Blood Pressure Monitoring System",
    image: "https://cdn.hack.ngo/slackcdn/88f3830e19285b9f942730c37cc2c3e8.png",
    description: "Tracks systolic and diastolic pressures continuously, alerting users and caregivers if readings exceed safe thresholds.",
  },
  {
    title: "Oxygen Level Measurement System",
    image: "https://cdn.hack.ngo/slackcdn/f3de4ea3dd6788022359aa07f1623c10.png",
    description: "Employs pulse oximetry to measure blood oxygen saturation, helping users monitor respiratory health and prevent hypoxia.",
  },
];

const FeatureCard: React.FC<{ feature: Feature; index: number; isActive: boolean }> = ({ feature, index, isActive }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, mass: 0.2 };

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const translateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, -100]);

  const springY = useSpring(y, springConfig);
  const springOpacity = useSpring(opacity, springConfig);
  const springScale = useSpring(scale, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);
  const springTranslateZ = useSpring(translateZ, springConfig);

  return (
    <div className="h-screen snap-center flex items-center justify-center px-4" ref={cardRef}>
      <motion.div
        className="w-full max-w-4xl"
        style={{
          opacity: springOpacity,
          y: springY,
          scale: springScale,
          rotateX: springRotateX,
          translateZ: springTranslateZ,
          transformPerspective: 1000,
          pointerEvents: isActive ? "auto" : "none",
          visibility: isActive ? "visible" : "hidden",
          transition: "visibility 0s linear 0.3s",
        }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative aspect-video overflow-hidden">
            <motion.img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-8">
            <motion.h3
              className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {feature.title}
            </motion.h3>

            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {feature.description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const OurProduct: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isTransitioning || !containerRef.current) return;

      const container = containerRef.current;
      const scrollPosition = container.scrollTop;
      const viewportHeight = window.innerHeight;
      const currentIndex = Math.round(scrollPosition / viewportHeight);

      if (currentIndex !== activeIndex) {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveIndex(currentIndex);
          setIsTransitioning(false);
        }, 3000); // 3-second delay
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex, isTransitioning]);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div 
        ref={containerRef}
        className="min-h-screen snap-y snap-mandatory overflow-y-scroll"
        style={{ scrollBehavior: isTransitioning ? 'auto' : 'smooth' }}
      >
        <motion.div
          className="h-screen snap-center flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center px-4">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the future of mobility with our cutting-edge smart wheelchair technology
            </p>
          </div>
        </motion.div>

        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            feature={feature} 
            index={index} 
            isActive={!isTransitioning || index === activeIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProduct;