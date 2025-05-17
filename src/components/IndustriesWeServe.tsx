import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const IndustriesWeServe = () => {
  const industries = [
    {
      name: "Healthcare",
      icon: "🏥",
      description:
        "Pioneering digital health solutions for hospitals, clinics, and telemedicine providers, enhancing patient care and operational efficiency.",
      image:
        "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Education",
      icon: "🎓",
      description:
        "Transforming learning with e-learning platforms, virtual classrooms, and innovative educational technology solutions for all ages.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "E-Commerce",
      icon: "🛒",
      description:
        "Building dynamic online stores and scalable shopping platforms that drive sales and provide seamless customer experiences.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Finance",
      icon: "💰",
      description:
        "Developing secure digital banking solutions, innovative fintech applications, and robust financial management tools.",
      image:
        "https://images.unsplash.com/photo-1565514020179-026b92b8f4b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description:
        "Integrating smart technology for Industry 4.0, optimizing supply chains, and enhancing production with IoT solutions.",
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Real Estate",
      icon: "🏢",
      description:
        "Creating digital platforms for property listings, virtual tours, and streamlined real estate transaction management.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Travel & Hospitality",
      icon: "✈️",
      description:
        "Designing intuitive booking engines, travel portals, and hospitality management systems for a seamless journey.",
      image:
        "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Logistics & Supply Chain",
      icon: "🚚",
      description:
        "Optimizing logistics operations with advanced tracking systems, warehouse management, and supply chain analytics.",
      image:
        "https://images.unsplash.com/photo-1587293852726-70cdb16571a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      // MODIFIED CLASSNAME HERE:
      className="pt-8 md:pt-12 pb-16 md:pb-20 bg-gradient-to-b from-slate-900 to-gray-900 text-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          {" "}
          {/* This margin-bottom also affects spacing to content below title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Industries We Empower
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We deliver specialized digital solutions, meticulously crafted to
            address the unique challenges and opportunities across various
            industries.
          </motion.p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          // plugins={[autoplayPlugin.current]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {industries.map((industry, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  className="relative group overflow-hidden rounded-xl shadow-2xl shadow-black/30 h-[480px] md:h-[520px] flex flex-col justify-end"
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                >
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none"></div>

                  <div className="relative p-6 md:p-8 z-10">
                    <motion.div className="mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-3xl w-16 h-16 rounded-lg flex items-center justify-center shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
                      {industry.icon}
                    </motion.div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-md">
                      {industry.name}
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {industry.description}
                    </p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-15px] md:left-[-25px] lg:left-[-35px] top-1/2 -translate-y-1/2 z-20 bg-slate-700/80 hover:bg-slate-600 text-white border-slate-600 hover:border-cyan-500 h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg">
            <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-[-15px] md:right-[-25px] lg:right-[-35px] top-1/2 -translate-y-1/2 z-20 bg-slate-700/80 hover:bg-slate-600 text-white border-slate-600 hover:border-cyan-500 h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg">
            <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
          </CarouselNext>
        </Carousel>

        <div className="text-center mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/industries"
              className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-white text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Discover All Industries
              <ArrowRight className="ml-2.5 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default IndustriesWeServe;
