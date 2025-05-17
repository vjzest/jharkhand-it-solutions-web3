
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const UnifiedNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <nav className="bg-gray-900 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://www.jharkhanditsolutions.com/wp-content/uploads/2016/10/logo-1.png"
              alt="JIS Logo"
              className="h-10"
            />
            <div>
              <h1 className="text-[#ff9900] text-2xl font-bold leading-tight">
                JIS
              </h1>
              <p className="text-[#00bfff] text-[10px] tracking-wider uppercase">
                Jharkhand IT Solutions
              </p>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/company"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              to="/hire-us"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Hire Us
            </Link>
            <Link 
              to="/portfolio"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Link 
              to="/blog"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Contact
            </Link>
            <div className="relative group">
              <Link
                to="/services" 
                className="text-white hover:text-cyan-400 transition-colors font-medium flex items-center"
              >
                Services <ChevronDown size={16} className="ml-1" />
              </Link>
              
              <div className="absolute right-0 mt-2 w-64 bg-gray-900 shadow-lg rounded-md p-4 invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-1 z-50">
                <div className="grid grid-cols-1 gap-2">
                  <Link to="/web-design-&-graphics" className="text-gray-300 hover:text-cyan-400 text-sm py-1">Web Design & Graphics</Link>
                  <Link to="/web-development" className="text-gray-300 hover:text-cyan-400 text-sm py-1">Web Development</Link>
                  <Link to="/software-&-mobile" className="text-gray-300 hover:text-cyan-400 text-sm py-1">Software & Mobile</Link>
                  <Link to="/web-marketing" className="text-gray-300 hover:text-cyan-400 text-sm py-1">Web Marketing</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <Link 
            to="/contact"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-md transition-all"
          >
            Get Started
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-gray-900 shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/"
              className="text-white hover:text-cyan-400 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/company"
              className="text-white hover:text-cyan-400 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/hire-us"
              className="text-white hover:text-cyan-400 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Us
            </Link>
            <Link 
              to="/portfolio"
              className="text-white hover:text-cyan-400 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/blog"
              className="text-white hover:text-cyan-400 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="py-2">
              <button 
                className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={() => toggleDropdown('services')}
              >
                Services
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${
                    activeDropdown === 'services' ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  activeDropdown === 'services' ? "max-h-[300px] pt-2" : "max-h-0"
                }`}
              >
                <div className="pl-4 flex flex-col space-y-2">
                  <Link 
                    to="/web-design-&-graphics" 
                    className="text-gray-300 hover:text-cyan-400 text-sm py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Web Design & Graphics
                  </Link>
                  <Link 
                    to="/web-development" 
                    className="text-gray-300 hover:text-cyan-400 text-sm py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link 
                    to="/software-&-mobile" 
                    className="text-gray-300 hover:text-cyan-400 text-sm py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Software & Mobile
                  </Link>
                  <Link 
                    to="/web-marketing" 
                    className="text-gray-300 hover:text-cyan-400 text-sm py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Web Marketing
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-md text-center transition-all mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UnifiedNavbar;
