import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const featuredProjects = [
    {
      id: "project1",
      title: "Nova E-Commerce Suite",
      category: "Web Development",
      description:
        "A cutting-edge e-commerce platform with advanced analytics and personalized shopping experiences.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Increased width
      link: "/portfolio/e-commerce-platform",
    },
    {
      id: "project2",
      title: "HealthSync Mobile App",
      category: "Mobile Application",
      description:
        "An intuitive mobile app connecting patients with healthcare providers for seamless consultation and monitoring.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Increased width
      link: "/portfolio/healthcare-mobile-app",
    },
  ];

  // Eccentric Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95, rotate: 1 }, // Slightly different "eccentric" start
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 40, // Softer spring
        damping: 12,
        duration: 0.9,
        staggerChildren: 0.2, // Stagger direct children
      },
    },
  };

  const childContentVariants = {
    // For text block and button
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 10,
      },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      className="pt-12 md:pt-20 pb-16 md:pb-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={childContentVariants}
        >
          <h2
            className="lg:text-5xl text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500
"
          >
            Our Showcase Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Explore a glimpse of our capabilities through these handpicked
            projects, demonstrating innovation and excellence.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          // This div can also have variants if we want the grid itself to animate as a block
          // before its children. For now, cards animate individually.
          // variants={childContentVariants} // Example if grid was a child of section to stagger
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group overflow-hidden rounded-xl shadow-2xl shadow-black/40 bg-slate-800/50"
              variants={projectCardVariants} // Use specific card variants
              initial="hidden" // Will inherit from parent if not set, but explicit is fine
              whileInView="visible" // Triggers when card itself is in view
              viewport={{ once: true, amount: 0.2 }} // Card animates when 20% visible
              // Delay based on index, and ensure it considers the parent section's animation timing
              // This transition will be for the 'visible' state of the card
              // whileHover is a separate transition
              transition={{ delay: index * 0.2 + 0.3 }} // Stagger cards, 0.3s base delay after section content starts
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 20px 40px -10px rgba(255, 255, 255, 0.1)",
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
            >
              <Link
                to={project.link}
                className="block h-[450px] md:h-[500px] flex flex-col"
              >
                {" "}
                {/* Fixed height for consistency */}
                <div className="relative h-3/5 overflow-hidden">
                  {" "}
                  {/* Image takes up top 60% */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-slate-800/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative p-6 flex flex-col flex-grow justify-between bg-slate-800/80 rounded-b-xl">
                  {" "}
                  {/* Content area for bottom 40% */}
                  <div>
                    <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-white text-xs font-semibold rounded-full mb-4 tracking-wide">
                      {project.category}
                    </span>
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white mb-2from-emerald-400 via-cyan-400 to-blue-500
 duration-300"
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-300/90  via-cyan-400 to-blue-500 text-sm mb-4 line-clamp-2">
                      {" "}
                      {/* Added brief description */}
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="inline-flex items-center font-medium transition-colors duration-300 text-sm">
                      Explore Project <ExternalLink className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12 md:mt-16"
          variants={childContentVariants}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500
 text-white text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1.5"
          >
            View All Our Work
            <ArrowRight className="ml-2.5 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
