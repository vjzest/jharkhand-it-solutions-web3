
import React from 'react';
import EnhancedHero from '../components/EnhancedHero';
import TechnologyShowcase from '../components/TechnologyShowcase';
import ServicesSlider from '../components/ServicesSlider';
import IndustriesWeServe from '../components/IndustriesWeServe';
import CompanyAwards from '../components/CompanyAwards';
import EnhancedTestimonials from '../components/EnhancedTestimonials';
import PortfolioSection from '../components/PortfolioSection';
import ConsultationCTA from '../components/ConsultationCTA';
import BlogSection from '../components/BlogSection';
import Layout from "../components/Layout";

const Index: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="py-8 md:py-12">
        <EnhancedHero />
      </div>
      
      {/* Technology Showcase */}
      <div className="py-10 md:py-14">
        <TechnologyShowcase />
      </div>
      
      {/* Services Slider */}
      <div className="py-10 md:py-14">
        <ServicesSlider />
      </div>
      
      {/* Industries We Serve */}
      <div className="py-10 md:py-14">
        <IndustriesWeServe />
      </div>
      
      {/* Company Awards */}
      <div className="py-8 md:py-12">
        <CompanyAwards />
      </div>
      
      {/* Testimonials */}
      <div className="py-10 md:py-14">
        <EnhancedTestimonials />
      </div>
      
      {/* Portfolio */}
      <div className="py-10 md:py-14">
        <PortfolioSection />
      </div>
      
      {/* Talk to Consultant */}
      <div className="py-8 md:py-12">
        <ConsultationCTA />
      </div>
      
      {/* Blog Section */}
      <div className="py-10 md:py-14">
        <BlogSection />
      </div>
    </Layout>
  );
};

export default Index;
