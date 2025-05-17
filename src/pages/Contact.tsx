import React from "react";
import { motion } from "framer-motion";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* <TopBar />
      <Navbar /> */}

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-jis-green/80 to-jis-teal/80 py-20">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Get In Touch
              </motion.h1>
              <motion.p
                className="text-lg text-gray-900 mb-8 drop-shadow-md font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Have a project in mind or questions about our services? We'd
                love to hear from you.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 relative z-10">
              <motion.div
                className="card-3d bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-xl border border-gray-700 hover:shadow-jis-teal/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-jis-teal to-jis-green mb-4 shadow-lg hover:shadow-jis-teal/50 transition-all">
                    <Mail className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Email Us
                  </h3>
                  <p className="text-gray-400 mb-4">
                    For general inquiries and information
                  </p>
                  <a
                    href="mailto:info@company.com"
                    className="text-jis-teal hover:underline"
                  >
                    info@company.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="card-3d bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-xl border border-gray-700 hover:shadow-jis-teal/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-jis-green to-jis-yellow mb-4 shadow-lg hover:shadow-jis-green/50 transition-all">
                    <Phone className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Call Us
                  </h3>
                  <p className="text-gray-400 mb-4">
                    For direct assistance and consultation
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-jis-green hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="card-3d bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-xl border border-gray-700 hover:shadow-jis-teal/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-jis-yellow to-jis-orange mb-4 shadow-lg hover:shadow-jis-yellow/50 transition-all">
                    <MapPin className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Visit Us
                  </h3>
                  <p className="text-gray-400 mb-4">Our office location</p>
                  <address className="text-jis-yellow not-italic">
                    123 Tech Street, Innovation City, ST 12345
                  </address>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="card-3d bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 shadow-xl h-full">
                  <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-jis-teal via-jis-green to-jis-teal">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Fill out the form and we'll get back to you as soon as
                    possible.
                  </p>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-1"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-jis-teal transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-jis-teal transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-jis-teal transition-all duration-300"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-jis-teal transition-all duration-300 resize-none"
                        placeholder="Type your message here..."
                      ></textarea>
                    </div>

                    <div>
                      <motion.button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-jis-teal to-jis-green text-white font-medium rounded-md shadow-lg hover:shadow-jis-teal/50 transition-all button-3d transform hover:-translate-y-1 flex items-center justify-center group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Message
                        <ArrowRight
                          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          size={16}
                        />
                      </motion.button>
                    </div>
                  </form>
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="card-3d bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 shadow-xl h-full">
                  <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-jis-yellow via-jis-orange to-jis-yellow">
                    More Ways to Connect
                  </h2>

                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-jis-teal/20 to-jis-green/20 shadow-inner border border-gray-700">
                          <MessageSquare className="text-jis-teal" size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">
                          Live Chat Support
                        </h3>
                        <p className="text-gray-400">
                          Get instant answers through our live chat service
                          during business hours.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-jis-yellow/20 to-jis-orange/20 shadow-inner border border-gray-700">
                          <Clock className="text-jis-yellow" size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">
                          Business Hours
                        </h3>
                        <p className="text-gray-400">
                          Monday-Friday: 9AM-6PM
                          <br />
                          Saturday: 10AM-4PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="relative mt-8 rounded-lg overflow-hidden h-64 border border-gray-700">
                      <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                        <p className="text-gray-500 text-center">
                          Interactive Map
                          <br />
                          (Google Maps would be embedded here)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-jis-green/10 to-jis-teal/10 rotate-2 transform-gpu"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Common questions about contacting us and our services. If you
                don't find what you're looking for, don't hesitate to reach out.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {[
                  {
                    question: "How quickly can I expect a response?",
                    answer:
                      "We typically respond to all inquiries within 24-48 business hours. For urgent matters, please consider using our live chat or phone support for faster assistance.",
                  },
                  {
                    question: "Do you offer services internationally?",
                    answer:
                      "Yes, we work with clients worldwide. Our team is equipped to handle projects across different time zones and can accommodate international requirements.",
                  },
                  {
                    question:
                      "I'm not sure which service I need. Can you help?",
                    answer:
                      "Absolutely! Contact us with your project goals, and our consultants will help determine the best services and solutions for your specific needs.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    className="card-3d bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 shadow-xl hover:shadow-jis-teal/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    <h3 className="text-xl font-medium text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
