import React, { useRef, useEffect } from "react";
import {
  LightbulbIcon,
  FlaskConical,
  Users,
  GraduationCap,
  Globe,
  Handshake,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FutureVision: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxLayers = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      if (
        scrollPosition + windowHeight > sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        const relativeScroll = scrollPosition - sectionTop;

        parallaxLayers.current.forEach((layer, index) => {
          if (!layer) return;
          const speed = (index + 1) * 0.05;
          const yOffset = relativeScroll * speed;
          layer.style.transform = `translateY(${yOffset}px)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const roadmapItems = [
    {
      year: "2025",
      title: "Pilot Deployment & Impact Validation",
      description:
        "Launch 50+ smart wheelchairs across rural Bangladesh to validate impact, collect user feedback, and build case studies for scaling.",
      icon: <LightbulbIcon className="h-6 w-6" />,
    },
    {
      year: "2026",
      title: "B2B & Government Partnerships",
      description:
        "Secure contracts with NGOs, rehabilitation centers, and government disability programs to expand nationwide adoption.",
      icon: <Handshake className="h-6 w-6" />,
    },
    {
      year: "2027",
      title: "Assistive Product Line Expansion",
      description:
        "Launch new affordable products like prosthetic legs, robotic hand gloves, and AI-powered navigation aids.",
      icon: <FlaskConical className="h-6 w-6" />,
    },
    {
      year: "2028",
      title: "Regional Expansion in South Asia",
      description:
        "Expand operations to serve Nepal, Bhutan, and Sri Lanka by building cross-border distribution and support channels.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      year: "2029",
      title: "Assistive Technology Innovation Hub",
      description:
        "Establish Bangladesh's first R&D and Training Center for affordable assistive technology, bringing together engineers, medical experts, and disability advocates.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
  ];

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="py-20 overflow-hidden relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div
        ref={(el) => (parallaxLayers.current[0] = el)}
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-200/30 dark:bg-purple-900/20 blur-3xl"
      />
      <div
        ref={(el) => (parallaxLayers.current[1] = el)}
        className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-indigo-200/30 dark:bg-indigo-900/20 blur-3xl"
      />
      <div
        ref={(el) => (parallaxLayers.current[2] = el)}
        className="absolute top-60 right-40 w-40 h-40 rounded-full bg-pink-200/20 dark:bg-pink-900/10 blur-2xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
              Our Vision For The Future
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We're committed to continuously advancing assistive technology and
              expanding our impact globally.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-10 mb-16 relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            ref={(el) => (parallaxLayers.current[3] = el)}
          >
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 blur-2xl opacity-70" />

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Redefining Mobility Through Innovation
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
                At MoreTechBD, we envision a world where mobility limitations no
                longer restrict human potential. Our mission is to harness the
                power of artificial intelligence and cutting-edge technology to
                create solutions that enhance independence, dignity, and quality
                of life for wheelchair users everywhere.
              </p>

              <div className="flex flex-wrap gap-6">
                <ScrollReveal direction="left" delay={0.3}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-gray-900 dark:text-white font-medium">
                      Continuous Innovation
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.4}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-gray-900 dark:text-white font-medium">
                      Global Accessibility
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.5}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                      <FlaskConical className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-gray-900 dark:text-white font-medium">
                      Research-Driven Approach
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mb-20">
          <ScrollReveal>
            <h3 className="text-2xl font-bold mb-10 text-center text-gray-900 dark:text-white">
              Our Future Roadmap
            </h3>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-12 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-indigo-500 rounded-full"></div>

            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <ScrollReveal
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={0.2 * index}
                >
                  <div
                    className="flex flex-col sm:flex-row items-start"
                    ref={(el) => (parallaxLayers.current[4 + index] = el)}
                  >
                    <div className="sm:w-1/2 flex justify-end mb-4 sm:mb-0 hidden sm:block">
                      {index % 2 === 0 && (
                        <div className="mr-10 p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 w-4/5">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                              {item.icon}
                            </div>
                            <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {item.year}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="z-10 pl-12 sm:pl-0 sm:flex sm:items-center sm:justify-center">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 border-4 border-purple-600 flex items-center justify-center shadow-lg">
                        <div className="text-purple-600 dark:text-purple-400">
                          {item.icon}
                        </div>
                      </div>
                    </div>

                    <div className="sm:w-1/2 flex justify-start pl-12 sm:pl-0">
                      {(index % 2 === 1 || window.innerWidth < 640) && (
                        <div className="ml-0 sm:ml-10 p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 sm:w-4/5">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3 sm:hidden">
                              {item.icon}
                            </div>
                            <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {item.year}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <ScrollReveal direction="up" delay={0.2}>
          <div
            className="text-center"
            ref={(el) => (parallaxLayers.current[9] = el)}
          >
            <div className="inline-block p-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-xl">
              <div className="bg-white dark:bg-gray-800 rounded-lg px-8 py-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Be Part of Our Journey
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Whether you're a potential user, healthcare professional,
                  investor, or technology enthusiast, we invite you to join us in
                  shaping the future of mobility.
                </p>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
                >
                  Connect With Us
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FutureVision;