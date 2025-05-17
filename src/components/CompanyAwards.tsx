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

const CompanyAwards = () => {
  const awardProviders = [
    {
      id: "clutch",
      // Using a white PNG version for Clutch. Replace with your own hosted asset for production.
      logoUrl:
        "https://www.interoadvisory.com/wp-content/uploads/2021/06/clutch-logo-white.png",
      name: "Clutch",
      description:
        "NBT is one of the top Web & Mobile App Development company as per Clutch.co rankings.",
      link: "#",
    },
    {
      id: "goodfirms",
      logoUrl: "https://assets.goodfirms.co/images/goodfirms-logo.svg",
      name: "GoodFirms",
      description:
        "NBT knows as top App and Web Development Company on Goodfirms.co rankings.",
      link: "#",
    },
  ];

  const certificateBadges = [
    {
      id: "badge1",
      imageUrl:
        "https://d10M72a36m2tsm.cloudfront.net/Content/img/Goodfirms-badge-TPM.svg",
      alt: "Top Mobile App Development Company by GoodFirms",
    },
    {
      id: "badge2",
      imageUrl:
        "https://www.clutch.co/assets/static/images/badges/top_developers_india_2023.png",
      alt: "Top Developers India 2023 Clutch",
    },
    {
      id: "badge3",
      imageUrl:
        "https://cdn.mfmeb.com/wp-content/uploads/2022/04/top-app-development-clutch.png",
      alt: "Top App Developers Clutch",
    },
    {
      id: "badge4",
      imageUrl:
        "https://www.itfirms.co/wp-content/uploads/2020/01/top-mobile-app-development-companies.png",
      alt: "IT Firms Top Mobile App Development",
    },
    {
      id: "badge5",
      imageUrl:
        "https://www.topdevelopers.co/assets/badges/app-developers-2024.png",
      alt: "Top App Developers 2024 TopDevelopers",
    },
    {
      id: "badge6",
      imageUrl: "https://assets.goodfirms.co/badges/color/app-development.svg",
      alt: "GoodFirms App Development",
    },
    {
      id: "badge7",
      imageUrl: "https://via.placeholder.com/150/FFFFFF/000000?text=Award+2023",
      alt: "Placeholder Award Badge 2023",
    },
    {
      id: "badge8",
      imageUrl: "https://via.placeholder.com/150/EEEEEE/333333?text=Certified",
      alt: "Placeholder Certified Badge",
    },
  ];

  const duplicatedBadges = [...certificateBadges, ...certificateBadges];

  const autoplayPluginBadges = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
    })
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95, rotate: -1 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 12,
        duration: 0.9,
        staggerChildren: 0.15,
      },
    },
  };

  const contentBlockVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  const imageBlockVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15, delay: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="pt-12 md:pt-16 pb-16 md:pb-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={contentBlockVariants} className="mb-10 md:mb-12">
          <p className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-1 relative inline-block">
            Awards
            <span className="absolute bottom-[-2px] left-0 w-1/2 h-0.5 bg-cyan-400"></span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            We Are Awarded & Certified
            <br />
            For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl text-base md:text-lg">
            We stay on top of our industry by being experts in yours.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <motion.div className="lg:w-[45%]" variants={contentBlockVariants}>
            <div className="space-y-6 mb-8">
              {awardProviders.map((provider) => (
                <motion.div
                  key={provider.id}
                  className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-600/70 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                  variants={cardVariants}
                >
                  <div className="flex items-center justify-between mb-3">
                    <img
                      src={provider.logoUrl}
                      alt={`${provider.name} Logo`}
                      className="h-7 md:h-8 object-contain"
                    />
                    {provider.link && (
                      <Link
                        to={provider.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div className="w-9 h-9 rounded-full border-2 border-orange-500 group-hover:bg-orange-500/20 flex items-center justify-center transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-orange-500 group-hover:text-orange-400 transition-colors" />
                        </div>
                      </Link>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {provider.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-10" variants={cardVariants}>
              <Carousel
                opts={{ align: "start", loop: true, dragFree: true }}
                plugins={[autoplayPluginBadges.current]}
                className="w-full bg-slate-800/50 py-4 px-2 rounded-lg border border-slate-700"
              >
                <CarouselContent className="-ml-4">
                  {duplicatedBadges.map((badge, index) => (
                    <CarouselItem
                      key={`${badge.id}-${index}`}
                      className="pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 flex-shrink-0"
                    >
                      <div className="p-1 bg-white/5 rounded-md h-20 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <img
                          src={badge.imageUrl}
                          alt={badge.alt}
                          className="max-h-14 w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-[55%] relative"
            variants={imageBlockVariants}
          >
            <div className="relative w-full aspect-[4/3.5] shadow-2xl shadow-black/50">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaborating on project"
                className="w-full h-full object-cover rounded-tl-3xl rounded-tr-3xl rounded-bl-[80px] rounded-br-2xl"
                loading="lazy"
              />
              <motion.div
                className="absolute top-[5%] right-[5%] w-[35%] md:w-[30%] aspect-video bg-gray-700 rounded-2xl shadow-xl border-2 border-slate-600 overflow-hidden"
                initial={{ opacity: 0, scale: 0.5, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Team discussion"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CompanyAwards;
