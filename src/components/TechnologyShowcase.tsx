import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TechnologyShowcase = () => {
  const technologies = [
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png",
      name: "React",
      description: "Frontend library for building user interfaces",
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      name: "Next.js",
      description: "React framework for production",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-angular-3-226070.png",
      name: "Angular",
      description: "Platform for building mobile & desktop web apps",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png",
      name: "Vue.js",
      description: "Progressive JavaScript framework",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1-1174935.png",
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 engine",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png",
      name: "TypeScript",
      description: "Typed superset of JavaScript",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png",
      name: "Python",
      description: "Programming language for web and data science",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png",
      name: "Java",
      description: "Object-oriented programming language",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 1 }, // Container itself can be visible, children handle their own opacity
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child's animation start
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Card starts more offset downwards and invisible
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // How long each card's animation takes
        ease: "easeOut", // Optional: easing function
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technologies We Master
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            We leverage a robust stack of modern technologies to build
            innovative, scalable, and high-performance digital solutions.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} // Added slight delay to overall section animation
            viewport={{ once: true }}
          >
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }} // Grid animation triggers when 10% is visible
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={itemVariants} // Each card will use these variants
                  // whileHover and its transition are for hover effects, separate from "show" animation
                  whileHover={{ scale: 1.05, y: -8 }} // Made hover y-lift slightly more
                  transition={{ type: "spring", stiffness: 300 }} // This transition is for whileHover
                >
                  <div className="bg-slate-800 p-5 rounded-xl w-full h-44 flex flex-col items-center justify-center text-center shadow-xl hover:shadow-cyan-500/25 border border-slate-700 hover:border-cyan-500/70 transition-all duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-14 h-14 object-contain mb-4"
                    />
                    <h3 className="text-base font-semibold text-white">
                      {tech.name}
                    </h3>
                  </div>

                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[calc(100%+12px)] w-56 bg-slate-700 rounded-lg shadow-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                    <div className="text-sm font-semibold text-white mb-1">
                      {tech.name}
                    </div>
                    <div className="text-xs text-gray-300 leading-snug">
                      {tech.description}
                    </div>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-slate-700 rotate-45"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} // Added slight delay
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-900/30 h-full">
              <img
                src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern Web Development Technology Stack"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex flex-col justify-end p-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Cutting-Edge Stack
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Building robust, scalable, and future-proof digital
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            to="/tech-stack"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Full Tech Stack
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;
