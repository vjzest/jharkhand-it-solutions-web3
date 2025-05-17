import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  UserCircle,
} from "lucide-react"; // Relevant icons

// Sample Blog Post Data
interface BlogPost {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string; // For the link
}

const latestPosts: BlogPost[] = [
  {
    id: "blog1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Discover the upcoming technologies and methodologies shaping the future of web development, from AI integration to serverless architectures.",
    author: "Alex Johnson",
    date: "October 26, 2023",
    slug: "/blog/future-of-web-development-2024",
  },
  {
    id: "blog2",
    title: "Mastering Mobile First Design: A Comprehensive Guide",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Learn the principles and best practices of mobile-first design to create seamless user experiences across all devices.",
    author: "Sarah Miller",
    date: "October 18, 2023",
    slug: "/blog/mastering-mobile-first-design",
  },
  {
    id: "blog3",
    title: "Unlocking Business Growth with Cloud-Native Solutions",
    category: "Cloud Computing",
    image:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Explore how adopting cloud-native strategies can enhance scalability, resilience, and innovation for your business.",
    author: "David Lee",
    date: "October 10, 2023",
    slug: "/blog/unlocking-growth-cloud-native",
  },
];

const LatestBlogSection = () => {
  // Eccentric Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 70, scale: 0.9, rotate: 0.5 },
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

  const titleBlockVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 10 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 15, duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="pt-12 md:pt-16 pb-16 md:pb-24 bg-gradient-to-b from-black via-slate-900 to-black text-white relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.025] [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)] opacity-70"></div>

      {/* Decorative Animated Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={titleBlockVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400">
            Latest Insights from Our Blog
          </h2>
          <p className="text-gray-300/90 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Stay updated with our expert articles on industry trends, technology
            insights, and innovative strategies.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          // Stagger children if this div itself is a motion component staggered by section
          // For now, cards will stagger based on their own viewport entry and delay
        >
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-slate-800/70 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-slate-700/60 flex flex-col group transition-all duration-300 hover:border-cyan-500/50"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.15 + 0.2 }} // Stagger cards, base delay after title
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 15px 30px -10px rgba(0, 229, 255, 0.15)",
              }}
            >
              <Link to={post.slug} className="block">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-grow">
                <Link to={post.slug}>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto border-t border-slate-700/80 pt-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <UserCircle size={14} className="text-slate-600" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-slate-600" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link
                    to={post.slug}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium mt-4 group/link text-sm"
                  >
                    Read Full Article
                    <ArrowRight className="ml-1.5 h-4 w-4 transform transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {latestPosts.length > 0 && ( // Only show button if there are posts
          <motion.div
            className="text-center mt-12 md:mt-16"
            variants={titleBlockVariants} // Reusing titleBlockVariants for consistency
          >
            <Link
              to="/blog" // Link to your main blog page
              className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-600 text-white text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Explore All Posts
              <BookOpenText className="ml-2.5 h-5 w-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default LatestBlogSection;
