import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ServicesSlider = () => {
  const services = [
    {
      icon: "https://img.icons8.com/fluency/96/web-design.png",
      title: "Web Design & Graphics",
      description:
        "Crafting visually stunning, intuitive, and user-centric designs that elevate your brand and create deeply engaging digital experiences.",
      link: "/web-design-&-graphics",
    },
    {
      icon: "https://img.icons8.com/fluency/96/web-development.png",
      title: "Web Development",
      description:
        "Building robust, scalable, and high-performance websites and sophisticated web applications leveraging cutting-edge frameworks.",
      link: "/web-development",
    },
    {
      icon: "https://img.icons8.com/fluency/96/smartphone-tablet.png",
      title: "Mobile App Development",
      description:
        "Developing innovative, feature-rich native and cross-platform mobile applications for iOS & Android, extending your market reach.",
      link: "/software-&-mobile",
    },
    {
      icon: "https://img.icons8.com/fluency/96/search-in-cloud.png",
      title: "SEO & Digital Marketing",
      description:
        "Boosting your online visibility and driving targeted organic traffic through comprehensive, strategic SEO & digital marketing campaigns.",
      link: "/web-marketing",
    },
    {
      icon: "https://img.icons8.com/fluency/96/cloud-development.png",
      title: "Cloud Solutions",
      description:
        "Providing highly scalable, secure cloud infrastructure, seamless deployment, and expert management for optimal business performance.",
      link: "/cloud-solutions",
    },
    {
      icon: "https://img.icons8.com/fluency/96/commercial-development-management.png",
      title: "E-Commerce Development",
      description:
        "Creating powerful, conversion-focused e-commerce platforms that enhance user shopping experiences and maximize online sales.",
      link: "/ecommerce",
    },
  ];

  const [autoplayPlugin] = React.useState(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  // Eccentric Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9, rotate: -1.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 45, // Softer spring for a smoother, slightly bouncy feel
        damping: 15,
        duration: 0.9,
        staggerChildren: 0.15, // Stagger direct motion children
      },
    },
  };

  const childContentVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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

  return (
    <motion.section
      className="pt-8 md:pt-12 pb-16 md:pb-24 bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white overflow-hidden" // pb-24 for more space at bottom
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of section is visible
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={childContentVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400"
            // Sub-element animation (can be simpler if parent handles stagger)
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }} // Relative to parent's animation start
          >
            Our Spectrum of Services
          </motion.h2>
          <motion.p
            className="text-gray-300/90 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} // Relative to parent's animation start
          >
            Empowering your vision with a comprehensive suite of cutting-edge
            digital solutions, meticulously crafted for impact.
          </motion.p>
        </motion.div>

        <motion.div variants={childContentVariants}>
          {" "}
          {/* Carousel block */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin]} // Autoplay plugin activated
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    className="bg-slate-800/60 backdrop-blur-md rounded-xl min-h-[460px] border border-slate-700/70 group/card shadow-xl hover:shadow-cyan-500/25 flex flex-col overflow-hidden relative transition-all duration-300 ease-out hover:border-cyan-500/50"
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: 0.2 + index * 0.1, // Stagger cards within carousel block
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.15 }}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                  >
                    {/* Optional: Subtle animated gradient border on hover */}
                    <div
                      className="absolute -inset-px rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(120deg, transparent, rgba(0, 229, 255, 0.3), transparent)",
                      }}
                    ></div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow z-10">
                      {" "}
                      {/* Content above potential gradient border */}
                      <div className="mb-6 self-start p-3.5 bg-gradient-to-br from-sky-500/20 via-cyan-500/20 to-teal-500/20 rounded-full shadow-lg ring-1 ring-cyan-500/30">
                        <img
                          src={service.icon}
                          alt={`${service.title} icon`}
                          className="w-9 h-9 md:w-10 md:h-10"
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>
                      <Link
                        to={service.link}
                        className="mt-auto self-start inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-cyan-300 bg-cyan-600/10 hover:bg-cyan-600/20 rounded-lg transition-colors duration-300 group-hover/card:text-cyan-200 ring-1 ring-cyan-500/30 hover:ring-cyan-400/50"
                      >
                        Discover More
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/card:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-15px] md:left-[-25px] lg:left-[-40px] top-1/2 -translate-y-1/2 z-20 bg-slate-700/80 hover:bg-slate-600/90 text-white border-slate-600 hover:border-cyan-500 h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg">
              <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-[-15px] md:right-[-25px] lg:right-[-40px] top-1/2 -translate-y-1/2 z-20 bg-slate-700/80 hover:bg-slate-600/90 text-white border-slate-600 hover:border-cyan-500 h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg">
              <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
            </CarouselNext>
          </Carousel>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSlider;
