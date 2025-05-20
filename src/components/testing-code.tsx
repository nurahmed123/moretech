import React from "react";

interface Feature {
  title: string;
  image: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Eye Tracking",
    image: "https://cdn.hack.ngo/slackcdn/9a07b926ac59e497535380a82e1053a6.png",
    description:
      "Leverages precise eye-movement detection to enable hands-free navigation and selection, empowering users with limited mobility to interact intuitively with their environment.",
  },
  {
    title: "Joystick Control",
    image: "https://cdn.hack.ngo/slackcdn/eed58a02eddf6f0a5c9c352d8171487c.png",
    description:
      "Offers a classic manual interface for precise directional control, allowing smooth acceleration, deceleration, and turning with minimal effort.",
  },
  {
    title: "Gesture Control",
    image: "https://cdn.hack.ngo/slackcdn/79a5042534a7fee7eb79ea64c6d09921.png",
    description:
      "Interprets predefined hand or head movements via sensors to execute commands seamlessly, reducing reliance on physical input devices.",
  },
  {
    title: "Accident Prevention",
    image: "https://cdn.hack.ngo/slackcdn/daa73d164ccdf20204db5f7e94a04892.png",
    description:
      "Utilizes ultrasonic and infrared sensors to detect obstacles in real time, triggering automatic braking and alerts to prevent collisions.",
  },
  {
    title: "SOS (Save Our Souls)",
    image: "https://cdn.hack.ngo/slackcdn/56033817b91a186898484c23e5c6fdef.png",
    description:
      "One-touch emergency alert system that instantly notifies caregivers or emergency services with user location and status.",
  },
  {
    title: "Voice-Controlled System Using AI",
    image: "https://cdn.hack.ngo/slackcdn/178ea76d6e3b15e5e2b29933eb50dfbb.png",
    description:
      "Integrates advanced AI-driven speech recognition to process natural language commands, offering hands-free operation and custom voice profiles.",
  },
  {
    title: "Heart Rate Measurement System",
    image: "https://cdn.hack.ngo/slackcdn/a09e1d74eb39490fcf3d639a9dac1a4c.png",
    description:
      "Monitors the user’s pulse in real time to provide continuous feedback on exertion levels and detect irregularities for proactive health management.",
  },
  {
    title: "Blood Pressure Monitoring System",
    image: "https://cdn.hack.ngo/slackcdn/88f3830e19285b9f942730c37cc2c3e8.png",
    description:
      "Tracks systolic and diastolic pressures continuously, alerting users and caregivers if readings exceed safe thresholds.",
  },
  {
    title: "Oxygen Level Measurement System",
    image: "https://cdn.hack.ngo/slackcdn/f3de4ea3dd6788022359aa07f1623c10.png",
    description:
      "Employs pulse oximetry to measure blood oxygen saturation, helping users monitor respiratory health and prevent hypoxia.",
  },
];

const OurProduct: React.FC = () => {
  return (
    <section id="our-products" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          const textOrder = isEven
            ? "order-2 lg:order-1"
            : "order-2 lg:order-2";
          const imageOrder = isEven
            ? "order-1 lg:order-2"
            : "order-1 lg:order-1";

          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-12 mb-16"
            >
              <div className={`${textOrder} lg:w-1/2`}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>

              <div className={`${imageOrder} lg:w-1/2`}>
                <div className="relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-500/20 rounded-2xl" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurProduct;
