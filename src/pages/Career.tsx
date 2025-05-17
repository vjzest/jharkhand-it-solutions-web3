import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaBriefcase,
  FaLaptop,
  FaUserGraduate,
  FaHandshake,
} from "react-icons/fa";

const Career = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <TopBar />
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-jis-teal/80 to-jis-green/80 py-20">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">
                Join Our Team
              </h1>
              <p className="text-lg text-gray-200 mb-8 drop-shadow-md">
                Build your career with us and be part of a team that's shaping
                the future of technology.
              </p>
              <div className="card-3d inline-block p-8 -rotate-1 hover:rotate-0 transition-all duration-500">
                <div className="bg-gradient-to-br from-jis-green to-jis-teal p-1 rounded-lg shadow-xl">
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Looking for your next opportunity?
                    </h3>
                    <button className="bg-jis-yellow hover:bg-jis-yellow/90 text-gray-900 font-semibold px-6 py-3 rounded-md shadow-lg hover:shadow-jis-yellow/30 transform transition-all hover:-translate-y-1 button-3d">
                      Explore Open Positions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-jis-green via-jis-teal to-white">
              Why Join JIS?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaLaptop className="text-jis-green text-4xl" />,
                  title: "Innovative Work",
                  description:
                    "Work on cutting-edge projects using the latest technologies.",
                },
                {
                  icon: <FaUserGraduate className="text-jis-teal text-4xl" />,
                  title: "Learning & Growth",
                  description:
                    "Continuous learning opportunities and career advancement paths.",
                },
                {
                  icon: <FaHandshake className="text-jis-blue text-4xl" />,
                  title: "Collaborative Culture",
                  description:
                    "Supportive team environment that values diverse perspectives.",
                },
                {
                  icon: <FaBriefcase className="text-jis-yellow text-4xl" />,
                  title: "Competitive Benefits",
                  description:
                    "Attractive compensation and benefits package for all employees.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="card-3d bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 shadow-xl hover:shadow-jis-green/20 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-gray-800 border border-gray-700 shadow-inner mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">
              Current Openings
            </h2>
            <p className="text-center mb-12 text-gray-300 max-w-2xl mx-auto">
              We're looking for talented individuals to join our team. Explore
              our current job openings.
            </p>

            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Senior React Developer",
                  type: "Full-time",
                  location: "Ranchi, Jharkhand (Remote Option Available)",
                  experience: "3+ years",
                },
                {
                  title: "UI/UX Designer",
                  type: "Full-time",
                  location: "Ranchi, Jharkhand",
                  experience: "2+ years",
                },
                {
                  title: "Android Developer",
                  type: "Full-time",
                  location: "Hybrid",
                  experience: "2-5 years",
                },
                {
                  title: "Digital Marketing Specialist",
                  type: "Full-time",
                  location: "Remote",
                  experience: "1-3 years",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="card-3d bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 shadow-xl hover:shadow-jis-green/20 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="bg-jis-green/20 text-jis-green text-xs font-medium px-2.5 py-1 rounded">
                            {job.type}
                          </span>
                          <span className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded">
                            {job.location}
                          </span>
                          <span className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded">
                            {job.experience}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4">
                          We're looking for a {job.title.toLowerCase()} to join
                          our team and help us build amazing products for our
                          clients.
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <button className="bg-jis-teal hover:bg-jis-teal/90 text-white px-5 py-2.5 rounded-md shadow-lg button-3d transform transition hover:-translate-y-1">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-jis-yellow hover:bg-jis-yellow/90 text-gray-900 font-semibold px-6 py-3 rounded-md shadow-lg hover:shadow-jis-yellow/30 transition-all duration-300 button-3d transform hover:-translate-y-1">
                View All Openings
              </button>
            </div>
          </div>
        </section>

        {/* 3D Effect CTA */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-jis-green/10 to-jis-teal/10 rotate-2 transform-gpu"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="card-3d max-w-4xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-1">
              <div className="bg-gray-900 rounded-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-2/3">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                      Don't See a Perfect Fit?
                    </h2>
                    <p className="text-gray-300 mb-6">
                      We're always looking for talented individuals to join our
                      team. Send us your resume, and we'll keep it on file for
                      future opportunities.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-jis-green hover:bg-jis-green/90 text-white px-6 py-3 rounded-md shadow-lg font-medium button-3d transform transition hover:-translate-y-1">
                        Send Your Resume
                      </button>
                      <button className="bg-transparent border border-jis-teal text-jis-teal hover:bg-jis-teal/10 px-6 py-3 rounded-md shadow button-3d transform transition hover:-translate-y-1">
                        Learn About Our Culture
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="w-40 h-40 relative animate-float">
                      <div className="absolute inset-0 bg-jis-green/20 rounded-full blur-xl"></div>
                      <div className="relative w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-jis-green to-jis-teal border border-white/10 shadow-lg">
                        <FaBriefcase className="text-white text-4xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Career;
