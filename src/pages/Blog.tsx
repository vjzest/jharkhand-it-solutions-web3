import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Placeholder for your JISS brand colors that are NOT the new gradient
const jisBlue = "sky-500"; // Example: text-sky-500, bg-sky-500
const jisTeal = "teal-500"; // Used for some secondary accents if needed
const jisYellow = "amber-400"; // For card hover effects for now, can be changed

// Blog Post Interface (assuming it's the same)
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  comments: number;
  slug: string;
}

const allBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Discover the cutting-edge technologies and methodologies shaping web development in 2024 and beyond.",
    author: "Jane Cooper",
    date: "May 10, 2024",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    comments: 15,
    slug: "future-of-web-development-2024",
  },
  {
    id: 2,
    title: "Why Responsive Design is Non-Negotiable",
    excerpt:
      "Learn why responsive design is critical for user experience, SEO, and conversion rates in modern websites.",
    author: "Robert Fox",
    date: "May 5, 2024",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    comments: 8,
    slug: "responsive-design-non-negotiable",
  },
  {
    id: 3,
    title: "Mobile App Dev: Native vs. Cross-Platform 2024",
    excerpt:
      "A comprehensive comparison of native and cross-platform approaches for mobile app development—which is right for you?",
    author: "Leslie Alexander",
    date: "April 28, 2024",
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    comments: 12,
    slug: "mobile-app-dev-native-vs-cross-platform",
  },
  {
    id: 4,
    title: "SEO Strategies That Actually Work in 2024",
    excerpt:
      "Proven SEO strategies to achieve higher rankings and increased organic traffic in today's competitive landscape.",
    author: "Cameron Williamson",
    date: "April 20, 2024",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    comments: 20,
    slug: "seo-strategies-2024",
  },
  {
    id: 5,
    title: "The Art and Science of UX/UI Design",
    excerpt:
      "Explore how psychology, aesthetics, and functionality merge to create compelling user experiences in design.",
    author: "Kristin Watson",
    date: "April 15, 2024",
    category: "UX/UI Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    comments: 7,
    slug: "art-science-ux-ui-design",
  },
  {
    id: 6,
    title: "E-commerce Development: Building Shops That Convert",
    excerpt:
      "Essential features and strategies for creating high-converting e-commerce platforms that drive sales.",
    author: "Jane Cooper",
    date: "April 8, 2024",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    comments: 10,
    slug: "ecommerce-development-shops-that-convert",
  },
];

const filterCategories = [
  "All Posts",
  "Web Development",
  "Web Design",
  "Mobile Development",
  "Digital Marketing",
  "UX/UI Design",
  "E-commerce",
];
const POSTS_PER_PAGE = 6;

const getCategoryIcon = (categoryName: string): React.ReactNode => {
  const iconProps = { size: 16, className: "inline mr-1.5 -mt-0.5" };
  switch (categoryName) {
    case "All Posts":
      return <Layers {...iconProps} />;
    case "Web Development":
      return <Cpu {...iconProps} />; // Changed from Palette
    case "Web Design":
      return <Palette {...iconProps} />;
    case "Mobile Development":
      return <Smartphone {...iconProps} />; // Changed from Smartphone
    case "Digital Marketing":
      return <TrendingUp {...iconProps} />;
    case "UX/UI Design":
      return <FilterIcon {...iconProps} />; // Changed from FilterIcon (FilterIcon is a bit generic)
    case "E-commerce":
      return <ShoppingCart {...iconProps} />;
    default:
      return <Layers {...iconProps} />; // Default to Layers or FilterIcon
  }
};

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialFilter = queryParams.get("category") || "All Posts";
  const initialPage = parseInt(queryParams.get("page") || "1", 10);

  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  useEffect(() => {
    const params = new URLSearchParams();
    if (activeFilter !== "All Posts") params.set("category", activeFilter);
    if (currentPage > 1) params.set("page", currentPage.toString());
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  }, [activeFilter, currentPage, navigate, location.pathname]);

  const filteredPosts = useMemo(() => {
    if (activeFilter === "All Posts") return allBlogPosts;
    return allBlogPosts.filter((post) => post.category === activeFilter);
  }, [activeFilter]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({
        top: document.getElementById("blog-grid-section")?.offsetTop || 0,
        behavior: "smooth",
      });
    }
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
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.4,
      },
    },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: `0px 12px 25px -8px rgba(var(--color-cyan-rgb, 0, 183, 255)/0.3)`,
    }, // Using cyan for card hover shadow
  };
  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -1,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-black text-gray-300">
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          className={`relative bg-gradient-to-br from-blue-800/70 via-emerald-700/60 to-slate-900 py-20 md:py-28 overflow-hidden`} // Adjusted hero gradient
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_70%)] opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                // HEADING COLOR CHANGED
                className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 drop-shadow-[0_3px_8px_rgba(var(--color-cyan-rgb,0,183,255)/0.3)]`}
                variants={itemVariants}
              >
                Our Insights & Blog
              </motion.h1>
              <motion.p
                className={`text-lg md:text-xl text-cyan-200/80 mb-8 leading-relaxed font-medium`}
                variants={itemVariants}
              >
                Stay informed with our latest articles, industry trends, expert
                advice, and company news from Jharkhand IT Solutions.
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8"
                variants={itemVariants}
              >
                {filterCategories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => handleFilterChange(category)}
                    className={cn(
                      `px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-opacity-70 shadow-sm hover:shadow-md`,
                      activeFilter === category
                        ? // ACTIVE FILTER BUTTON COLOR CHANGED
                          `bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-white ring-cyan-300`
                        : `bg-slate-700/50 text-gray-300 hover:bg-slate-600/70 ring-slate-600 hover:text-white`
                    )}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {getCategoryIcon(category)}
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Blog Posts Grid Section - ID added for scroll target */}
        <motion.section
          id="blog-grid-section"
          className="py-16 md:py-20 bg-slate-900"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <div className="container mx-auto px-4">
            <AnimatePresence mode="popLayout">
              {paginatedPosts.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                >
                  {paginatedPosts.map((post) => (
                    <motion.div
                      layout
                      key={post.slug}
                      className={`bg-slate-800/60 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl shadow-black/30 border border-slate-700/60 flex flex-col group transition-all duration-300 hover:border-cyan-500/50`}
                      variants={cardVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      whileHover="hover"
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className="block group/cardlink flex flex-col h-full"
                      >
                        <AspectRatio
                          ratio={16 / 9}
                          className="bg-slate-700/40 w-full"
                        >
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover/cardlink:scale-105"
                            loading="lazy"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-90 group-hover/cardlink:opacity-100 transition-opacity duration-300`}
                          ></div>
                        </AspectRatio>
                        <div className="p-5 md:p-6 flex flex-col flex-grow">
                          <div className="mb-3">
                            <span
                              className={`text-xs font-semibold inline-block py-1 px-2.5 rounded-full bg-cyan-500/20 text-cyan-400 uppercase tracking-wider`}
                            >
                              {post.category}
                            </span>
                          </div>
                          <h3
                            className={`text-lg md:text-xl font-bold text-white mb-3 group-hover/cardlink:text-cyan-300 transition-colors duration-300 line-clamp-2`}
                          >
                            {post.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                            {post.excerpt}
                          </p>
                          <div className="mt-auto border-t border-slate-700/80 pt-4">
                            <div className="flex flex-wrap justify-between items-center text-xs text-gray-500 gap-y-2">
                              <div className="flex items-center gap-1.5">
                                <UserCircle size={14} /> {post.author}
                              </div>
                              <div className="flex items-center gap-1.5">
                                <CalendarDays size={14} /> {post.date}
                              </div>
                              <div className="flex items-center gap-1.5">
                                <MessageCircle size={14} /> {post.comments}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.p
                  className="text-center text-gray-400 text-xl py-10"
                  variants={itemVariants}
                >
                  No posts found for "{activeFilter}". Please try another
                  category.
                </motion.p>
              )}
            </AnimatePresence>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <motion.div
                className="flex justify-center items-center mt-12 md:mt-16 space-x-1 sm:space-x-2"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-slate-700/80 hover:bg-slate-600/80 text-gray-300 disabled:hover:bg-slate-700/80`}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Previous
                </motion.button>
                {[...Array(totalPages)].map((_, i) => (
                  <motion.button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={cn(
                      `px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium rounded-md transition-colors duration-200`,
                      currentPage === i + 1
                        ? // CURRENT PAGE BUTTON COLOR CHANGED
                          `bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-white shadow-md shadow-cyan-500/30`
                        : `bg-slate-700/60 hover:bg-slate-600/70 text-gray-400 hover:text-gray-200`
                    )}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {i + 1}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-slate-700/80 hover:bg-slate-600/80 text-gray-300 disabled:hover:bg-slate-700/80`}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Next
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 to-black"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 via-emerald-600/10 to-transparent opacity-40 transform-gpu -rotate-3 scale-110`}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className={`max-w-3xl mx-auto bg-slate-800/70 backdrop-blur-xl rounded-2xl p-1 shadow-2xl shadow-black/40 border border-slate-700/60 perspective`}
              variants={itemVariants}
            >
              <motion.div
                className="bg-slate-900/90 rounded-xl p-8 md:p-12"
                initial={{ rotateY: 0, rotateX: 0 }}
                whileHover={{ rotateY: 0.5, rotateX: -0.5, scale: 1.005 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                      delay: 0.2,
                    }}
                    className="w-20 h-20 mb-6 relative"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 opacity-25 rounded-full blur-xl`}
                    ></div>
                    <div
                      className={`relative w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-500 border-2 border-white/20 shadow-lg shadow-cyan-500/30`}
                    >
                      <Mail className="text-white text-3xl" />
                    </div>
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="text-gray-300/90 mb-8 max-w-lg leading-relaxed">
                    Stay updated with our latest articles, industry insights,
                    and company news delivered straight to your inbox. No spam,
                    ever.
                  </p>

                  <form
                    className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <motion.input
                      type="email"
                      placeholder="Enter your email address"
                      className={`px-5 py-3 bg-slate-700/60 border border-slate-600 rounded-lg text-white placeholder-gray-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 flex-grow transition-all duration-300`}
                      variants={itemVariants}
                    />
                    <motion.button
                      type="submit"
                      // NEWSLETTER SUBSCRIBE BUTTON COLOR CHANGED
                      className={`px-7 py-3 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/40 transition-all duration-300`}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Subscribe
                    </motion.button>
                  </form>
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

export default Blog;
