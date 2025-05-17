import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Briefcase,
  ArrowRight,
  ExternalLink,
  Filter,
  Layers,
  Palette,
  Smartphone,
  ShoppingCart,
  SearchCode,
  Send, // Make sure Send is imported if used in CTA
} from "lucide-react";
import { cn } from "@/lib/utils";

// Placeholder for your JISS brand colors - REPLACE THESE
const jisBrown = "orange-700";
const jisYellow = "amber-400"; // This is used for non-active button elements perhaps, or other accents

// Portfolio Item Interface
interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  slug: string;
}

const allPortfolioItems: PortfolioItem[] = [
  {
    id: "proj1",
    title: "E-Commerce Replatforming",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Modernized an outdated e-commerce site, improving UX and conversion rates significantly.",
    slug: "/portfolio/ecommerce-replatforming",
  },
  {
    id: "proj2",
    title: "Healthcare Mobile App",
    category: "Mobile Apps",
    image:
      "https://images.unsplash.com/photo-1600096194534-95cf570115d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Developed a cross-platform app for patient-doctor communication and appointment scheduling.",
    slug: "/portfolio/healthcare-mobile-app",
  },
  {
    id: "proj3",
    title: "Corporate Website Redesign",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Complete overhaul of a corporate website focusing on modern aesthetics and SEO.",
    slug: "/portfolio/corporate-website-redesign",
  },
  {
    id: "proj4",
    title: "SaaS Platform UI/UX",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Designed an intuitive and scalable user interface for a complex SaaS application.",
    slug: "/portfolio/saas-platform-uiux",
  },
  {
    id: "proj5",
    title: "Retail Inventory App",
    category: "Mobile Apps",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb16571a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "An internal mobile tool for managing retail inventory across multiple locations.",
    slug: "/portfolio/retail-inventory-app",
  },
  {
    id: "proj6",
    title: "Online Booking System",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Custom booking and payment gateway integration for a service-based business.",
    slug: "/portfolio/online-booking-system",
  },
  {
    id: "proj7",
    title: "Fintech Web Application",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Secure and responsive web app for financial data visualization and management.",
    slug: "/portfolio/fintech-web-app",
  },
  {
    id: "proj8",
    title: "Educational Game App",
    category: "Mobile Apps",
    image:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Engaging educational game for children, available on iOS and Android platforms.",
    slug: "/portfolio/educational-game-app",
  },
];

const filterCategories = [
  "All Projects",
  "Web Design",
  "Mobile Apps",
  "E-commerce",
];

const getCategoryIcon = (categoryName: string): React.ReactNode => {
  const iconProps = { size: 16, className: "inline mr-1.5 -mt-0.5" };
  switch (categoryName) {
    case "All Projects":
      return <Layers {...iconProps} />;
    case "Web Design":
      return <Palette {...iconProps} />;
    case "Mobile Apps":
      return <Smartphone {...iconProps} />;
    case "E-commerce":
      return <ShoppingCart {...iconProps} />;
    default:
      return <Filter {...iconProps} />;
  }
};

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");
  const [visibleItemsCount, setVisibleItemsCount] = useState<number>(6);
  const navigate = useNavigate();

  const filteredItems = useMemo(() => {
    if (activeFilter === "All Projects") {
      return allPortfolioItems;
    }
    return allPortfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const itemsToShow = useMemo(() => {
    return filteredItems.slice(0, visibleItemsCount);
  }, [filteredItems, visibleItemsCount]);

  const loadMoreItems = () => {
    setVisibleItemsCount((prevCount) => prevCount + 6);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: `0px 12px 25px -8px rgba(var(--color-${jisYellow}-rgb, 250, 204, 21)/0.3)`,
    }, // jisYellow is still used for card hover here
  };
  const ctaButtonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-black text-gray-300">
      <main className="flex-grow">
        <motion.section
          className={`relative bg-gradient-to-br from-${jisBrown}/70 via-${jisYellow}/60 to-slate-900 py-20 md:py-28 overflow-hidden`} // jisBrown & jisYellow used here
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_top_left,white_20%,transparent_70%)] opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-yellow-300 drop-shadow-[0_3px_8px_rgba(250,204,21,0.3)]"
                variants={itemVariants}
              >
                Our Portfolio
              </motion.h1>
              <motion.p
                className={`text-lg md:text-xl text-amber-300/80 mb-8 leading-relaxed font-medium`}
                variants={itemVariants}
              >
                {" "}
                {/* Example: using amber for text to match jisYellow */}
                Explore our diverse range of successful projects that showcase
                our expertise, innovation, and creative prowess.
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8"
                variants={itemVariants}
              >
                {filterCategories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => {
                      setActiveFilter(category);
                      setVisibleItemsCount(6);
                    }}
                    className={cn(
                      `px-4 py-2 sm:px-5 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-50`,
                      activeFilter === category
                        ? `bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/30 ring-2 ring-cyan-400` // ACTIVE STATE MODIFIED
                        : `bg-slate-700/50 text-gray-200 hover:bg-slate-600/70 ring-slate-600 hover:ring-slate-500` // Inactive state slightly improved hover
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getCategoryIcon(category)}
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-16 md:py-20 bg-slate-900"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <div className="container mx-auto px-4">
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
              >
                {itemsToShow.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    className={`bg-slate-800/60 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl shadow-black/30 border border-slate-700/60 flex flex-col group transition-all duration-300 hover:border-amber-400/50`} // Example: jisYellow for card hover border
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover="hover" // This uses the hover defined in cardVariants
                  >
                    <Link to={project.slug} className="block group/cardlink">
                      <AspectRatio ratio={16 / 10} className="bg-slate-700/40">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover/cardlink:scale-105"
                          loading="lazy"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover/cardlink:opacity-90 transition-opacity duration-300`}
                        ></div>
                      </AspectRatio>
                      <div className="p-5 md:p-6 flex flex-col flex-grow">
                        <div className="mb-3">
                          <span
                            className={`text-xs font-semibold inline-block py-1 px-2.5 rounded-full bg-amber-400/20 text-amber-400 uppercase tracking-wider`}
                          >
                            {" "}
                            {/* Example: jisYellow for category tag */}
                            {project.category}
                          </span>
                        </div>
                        <h3
                          className={`text-lg md:text-xl font-bold text-white mb-2 group-hover/cardlink:text-amber-300 transition-colors duration-300 line-clamp-2`}
                        >
                          {" "}
                          {/* Example: jisYellow for title hover */}
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                          {project.excerpt}
                        </p>
                        <div
                          className={`inline-flex items-center text-amber-400/80 group-hover/cardlink:text-amber-300 font-medium text-sm transition-colors duration-300 mt-auto self-start`}
                        >
                          {" "}
                          {/* Example: jisYellow for link */}
                          View Details{" "}
                          <ExternalLink size={16} className="ml-1.5" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {itemsToShow.length < filteredItems.length && (
              <motion.div
                className="text-center mt-12 md:mt-16"
                variants={itemVariants}
              >
                <motion.button
                  onClick={loadMoreItems}
                  className={`bg-${jisYellow} hover:bg-${jisYellow}/90 text-slate-900 font-semibold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-${jisYellow}/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0`}
                  variants={ctaButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Load More Projects
                </motion.button>
              </motion.div>
            )}
            {itemsToShow.length === 0 && activeFilter !== "All Projects" && (
              <motion.p
                className="text-center text-gray-400 mt-12 text-lg"
                variants={itemVariants}
              >
                No projects found for "{activeFilter}". Try a different
                category!
              </motion.p>
            )}
          </div>
        </motion.section>

        <motion.section
          className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-t from-black via-slate-900 to-slate-900"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r from-${jisBrown}/15 via-${jisYellow}/15 to-transparent opacity-50 transform-gpu rotate-2 scale-110`}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className={`max-w-4xl mx-auto bg-slate-800/70 backdrop-blur-xl rounded-2xl p-1 shadow-2xl shadow-black/40 border border-slate-700/60 perspective`}
              variants={itemVariants}
            >
              <motion.div
                className="bg-slate-900/90 rounded-xl p-8 md:p-12"
                initial={{ rotateY: 0, rotateX: 0 }}
                whileHover={{ rotateY: 1, rotateX: -1, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-2/3 text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      Ready to Start Your Next Project?
                    </h2>
                    <p className="text-gray-300/90 mb-8 text-lg leading-relaxed">
                      Let's collaborate to bring your vision to life with our
                      expertise in design, development, and cutting-edge digital
                      strategies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <motion.button
                        onClick={() =>
                          navigate("/contact?reason=project-discussion")
                        }
                        className={`bg-${jisBrown} hover:bg-${jisBrown}/90 text-white px-8 py-3.5 rounded-lg shadow-lg font-semibold text-base button-3d transform transition hover:-translate-y-1 active:translate-y-0`}
                        variants={ctaButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        Discuss Your Project{" "}
                        <Send size={18} className="inline ml-2" />
                      </motion.button>
                      <motion.button
                        onClick={() => {
                          setActiveFilter("All Projects");
                          setVisibleItemsCount(6);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className={`bg-transparent border-2 border-${jisYellow} text-${jisYellow} hover:bg-${jisYellow}/10 px-8 py-3.5 rounded-lg shadow font-semibold text-base button-3d transform transition hover:-translate-y-1 active:translate-y-0`}
                        variants={ctaButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        View All Projects{" "}
                        <Layers size={18} className="inline ml-2" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="lg:w-1/3 flex justify-center mt-8 lg:mt-0">
                    <motion.div
                      className="w-40 h-40 md:w-48 md:h-48 relative"
                      animate={{ y: ["0%", "-10%", "0%"] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-${jisBrown}/25 rounded-full blur-2xl`}
                      ></div>
                      <div
                        className={`relative w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-${jisBrown} to-${jisYellow} border-2 border-white/20 shadow-2xl shadow-${jisYellow}/40`}
                      >
                        <Briefcase
                          size={50}
                          className="text-white opacity-90"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Portfolio;
