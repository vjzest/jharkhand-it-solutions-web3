import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  CalendarDays,
  UserCircle,
  MessageCircle,
  ArrowRight,
  Filter as FilterIcon,
  Layers,
  Palette,
  Cpu,
  TrendingUp,
  Smartphone,
  ShoppingCart,
  SearchCode,
  Settings2,
  ShieldCheck,
  Zap,
  Server,
  Database,
  Users,
  FileText,
  Brain,
  Shuffle,
  Mail,
  Briefcase,
  Cloud,
  BarChart3,
  ChevronRight,
  RefreshCcw,
} from "lucide-react";

// Assuming 'cn' utility is in '@/lib/utils'
// If not, you'll need to provide its implementation or remove it if not used elsewhere.
// Example cn utility:
//
// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"
//
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }
import { cn } from "@/lib/utils"; // Adjust this path if your 'cn' function is elsewhere

// import ServiceTicker from "@/components/ServiceTicker"; // Adjust path as needed

interface ServiceItemDetail {
  name: string;
  path: string;
  icon?: React.ReactElement;
}

interface ServiceCategory {
  category: string;
  path: string;
  description: string;
  icon: React.ReactElement;
  services: ServiceItemDetail[];
}

const serviceItems: ServiceCategory[] = [
  {
    category: "Web Design & Graphics",
    path: "/services/web-design",
    description:
      "Crafting visually stunning and user-friendly web experiences and brand identities.",
    icon: <Palette size={26} className="text-emerald-400" />,
    services: [
      {
        name: "UI/UX Design",
        path: "/services/web-design/ui-ux",
        icon: <FilterIcon size={16} />,
      },
      {
        name: "Branding & Identity",
        path: "/services/web-design/branding",
        icon: <Users size={16} />,
      },
      {
        name: "Responsive Design",
        path: "/services/web-design/responsive",
        icon: <Smartphone size={16} />,
      }, // Shortened
      {
        name: "Graphic Design",
        path: "/services/web-design/graphics",
        icon: <Layers size={16} />,
      },
    ],
  },
  {
    category: "Web Development",
    path: "/services/web-development",
    description:
      "Building robust, scalable, and high-performance web applications and websites.",
    icon: <SearchCode size={26} className="text-emerald-400" />,
    services: [
      {
        name: "Frontend Dev",
        path: "/services/web-development/frontend",
        icon: <Palette size={16} />,
      }, // Shortened
      {
        name: "Backend Dev",
        path: "/services/web-development/backend",
        icon: <Server size={16} />,
      }, // Shortened
      {
        name: "E-commerce",
        path: "/services/web-development/ecommerce",
        icon: <ShoppingCart size={16} />,
      }, // Shortened
      {
        name: "CMS Development",
        path: "/services/web-development/cms",
        icon: <FileText size={16} />,
      },
    ],
  },
  {
    category: "Software & Mobile",
    path: "/services/software-mobile",
    description:
      "Developing custom software and mobile applications to meet diverse business needs.",
    icon: <Cpu size={26} className="text-emerald-400" />,
    services: [
      {
        name: "Mobile App Dev",
        path: "/services/software-mobile/mobile-apps",
        icon: <Smartphone size={16} />,
      }, // Shortened
      {
        name: "Custom Software",
        path: "/services/software-mobile/custom-software",
        icon: <Settings2 size={16} />,
      }, // Shortened
      {
        name: "API Development",
        path: "/services/software-mobile/api-dev",
        icon: <Shuffle size={16} />,
      },
      {
        name: "QA & Testing",
        path: "/services/software-mobile/qa-testing",
        icon: <ShieldCheck size={16} />,
      },
    ],
  },
  {
    category: "Web Marketing",
    path: "/services/web-marketing",
    description:
      "Driving online growth and visibility through strategic digital marketing campaigns.",
    icon: <TrendingUp size={26} className="text-emerald-400" />,
    services: [
      {
        name: "SEO Strategy",
        path: "/services/web-marketing/seo",
        icon: <SearchCode size={16} />,
      },
      {
        name: "Content Marketing",
        path: "/services/web-marketing/content",
        icon: <FileText size={16} />,
      },
      {
        name: "Social Media",
        path: "/services/web-marketing/smm",
        icon: <Users size={16} />,
      }, // Shortened
      {
        name: "PPC Advertising",
        path: "/services/web-marketing/ppc",
        icon: <BarChart3 size={16} />,
      },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    path: "/services/cloud-infrastructure",
    description:
      "Scalable cloud solutions and robust infrastructure management for modern enterprises.",
    icon: <Cloud size={26} className="text-emerald-400" />,
    services: [
      {
        name: "Cloud Migration",
        path: "/services/cloud-infrastructure/migration",
        icon: <Shuffle size={16} />,
      },
      {
        name: "Managed Cloud",
        path: "/services/cloud-infrastructure/managed-services",
        icon: <Settings2 size={16} />,
      },
      {
        name: "DevOps & Automation",
        path: "/services/cloud-infrastructure/devops",
        icon: <Zap size={16} />,
      },
      {
        name: "Infra Security",
        path: "/services/cloud-infrastructure/security",
        icon: <ShieldCheck size={16} />,
      },
    ],
  },
  {
    category: "Business Process",
    path: "/services/business-process",
    description:
      "Optimizing operations with technology-driven process automation and analytics.",
    icon: <Briefcase size={26} className="text-emerald-400" />,
    services: [
      {
        name: "RPA Solutions",
        path: "/services/business-process/rpa",
        icon: <Cpu size={16} />,
      },
      {
        name: "Data Analytics & BI",
        path: "/services/business-process/analytics",
        icon: <BarChart3 size={16} />,
      },
      {
        name: "CRM Solutions",
        path: "/services/business-process/crm",
        icon: <UserCircle size={16} />,
      }, // Shortened
      {
        name: "Workflow Automation",
        path: "/services/business-process/workflow",
        icon: <Zap size={16} />,
      },
    ],
  },
  {
    category: "Business Applications",
    path: "/services/business-applications",
    description:
      "Custom enterprise applications designed to solve unique business challenges.",
    icon: <Layers size={26} className="text-emerald-400" />,
    services: [
      {
        name: "Enterprise Apps",
        path: "/services/business-applications/custom-software",
        icon: <SearchCode size={16} />,
      }, // Shortened
      {
        name: "App Integration",
        path: "/services/business-applications/integration",
        icon: <Shuffle size={16} />,
      },
      {
        name: "SaaS Development",
        path: "/services/business-applications/saas",
        icon: <Cloud size={16} />,
      },
      {
        name: "App Modernization",
        path: "/services/business-applications/modernization",
        icon: <Settings2 size={16} />,
      },
    ],
  },
  {
    category: "Design & Development",
    path: "/services/design-development-solutions",
    description:
      "Innovative design and end-to-end development for impactful digital products.",
    icon: <Brain size={26} className="text-emerald-400" />,
    services: [
      {
        name: "Product Strategy",
        path: "/services/design-development-solutions/product-strategy",
        icon: <Zap size={16} />,
      },
      {
        name: "UI/UX Prototyping",
        path: "/services/design-development-solutions/prototyping",
        icon: <FilterIcon size={16} />,
      },
      {
        name: "Agile Development",
        path: "/services/design-development-solutions/agile-dev",
        icon: <RefreshCcw size={16} />,
      },
      {
        name: "Full-Cycle Dev",
        path: "/services/design-development-solutions/full-cycle",
        icon: <Layers size={16} />,
      },
    ],
  },
];

const ServicesPage: React.FC = () => {
  const navigate = useNavigate(); // Keep if you use navigate for other actions, though Link covers navigation here.

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  };

  const categoryCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
    hover: {
      y: -5,
      scale: 1.015,
      boxShadow: "0px 10px 30px -5px rgba(0, 190, 140, 0.25)",
      borderColor: "rgba(6, 182, 212, 0.6)",
    },
  };

  const subServiceListVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
  };

  const subServiceItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const categoryGridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-black text-gray-300">
      {/* <ServiceTicker /> */}

      <motion.main
        className="flex-grow"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section className="relative bg-gradient-to-br from-blue-800/60 via-emerald-600/50 to-slate-900/80 py-20 md:py-28 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_70%)] opacity-50"></div>
          <motion.div
            className="container mx-auto px-4 relative z-10"
            variants={itemVariants}
          >
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                className="text-4xl sm:text-5xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300"
                variants={itemVariants}
              >
                Our Expert Services
              </motion.h1>
              <motion.p
                className="text-base md:text-lg text-cyan-100/70 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Tailored digital solutions to empower your business, drive
                innovation, and achieve sustainable growth.
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        <section className="py-12 md:py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
              variants={sectionTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              Explore Our Expertise
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              variants={categoryGridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }} // Trigger earlier for grid animation
            >
              {serviceItems.map((category) => (
                <motion.div
                  key={category.category}
                  className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl border border-slate-700/80 p-5 md:p-6 flex flex-col transition-all duration-300 hover:border-cyan-500/70" // Added direct hover border change
                  variants={categoryCardVariants} // Applies hidden, visible, hover for motion properties
                  // Framer Motion's whileInView will use the 'visible' variant when in view.
                  // 'initial' and 'whileInView' are handled by the parent grid for staggering.
                  // If applying directly to card, need initial="hidden" and whileInView="visible" here too.
                >
                  <Link
                    to={category.path}
                    className="block mb-4 group flex-grow flex flex-col"
                  >
                    {" "}
                    {/* Make Link grow and be flex container */}
                    <div className="flex items-start gap-3.5 mb-2.5">
                      <span className="flex-shrink-0 mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-emerald-600/25 via-slate-700/30 to-slate-700/40 border border-slate-600 shadow-md group-hover:border-emerald-500/50 transition-colors">
                        {React.cloneElement(category.icon, { size: 22 })}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-200 mb-0.5">
                          {category.category}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 group-hover:text-slate-300 transition-colors">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center text-xs text-cyan-500 group-hover:text-cyan-400 font-medium transition-colors duration-200 mt-1">
                      Explore Category{" "}
                      <ArrowRight size={12} className="ml-1.5" />
                    </span>
                    {/* Spacer to push Key Services to bottom, used with flex-grow on Link */}
                    <div className="mt-auto"></div>
                  </Link>

                  <motion.div
                    className="border-t border-slate-700 pt-4 mt-4" // mt-4 instead of mt-auto here as Link is flex-grow
                    variants={subServiceListVariants}
                  >
                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                      Key Services:
                    </h4>
                    <ul className="space-y-1.5">
                      {category.services.slice(0, 3).map((service) => (
                        <motion.li
                          key={service.name}
                          variants={subServiceItemVariants}
                          className="group"
                        >
                          <Link
                            to={service.path}
                            className="flex items-center text-slate-300 hover:text-cyan-400 text-sm transition-colors duration-150"
                          >
                            <ChevronRight
                              size={14}
                              className="mr-1.5 text-slate-500 group-hover:text-cyan-500 transition-colors duration-150 flex-shrink-0"
                            />
                            <span className="truncate">{service.name}</span>
                          </Link>
                        </motion.li>
                      ))}
                      {category.services.length > 3 && (
                        <motion.li
                          variants={subServiceItemVariants}
                          className="mt-1"
                        >
                          <Link
                            to={category.path}
                            className="text-xs font-medium text-emerald-500 hover:text-emerald-400 inline-flex items-center gap-1"
                          >
                            View all <ArrowRight size={12} />
                          </Link>
                        </motion.li>
                      )}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.main>
    </div>
  );
};

export default ServicesPage;
