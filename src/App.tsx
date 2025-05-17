import { Toaster } from "@/components/ui/toaster"; // Assuming this is your main app toaster
import { Toaster as SonnerToaster } from "@/components/ui/sonner"; // Rename to avoid conflict
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Page imports
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebDesignGraphics from "./pages/WebDesignGraphics";
import WebDevelopment from "./pages/WebDevelopment";
import SoftwareMobile from "./pages/SoftwareMobile";
import WebMarketing from "./pages/WebMarketing";
import HireUs from "./pages/HireUs";
import Portfolio from "./pages/Portfolio";
import Company from "./pages/Company";
import Training from "./pages/Training"; // This must be used as <Training />
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Services from "./pages/Services";

// Submenu page imports
import ResponsiveWebDesigning from "./pages/WebDesignSubPages/ResponsiveWebDesigning";
import WebsiteRedesigning from "./pages/WebDesignSubPages/WebsiteRedesigning";
import LogoDesigning from "./pages/WebDesignSubPages/LogoDesigning";
import WordpressDevelopment from "./pages/WebDevelopmentSubPages/WordpressDevelopment";
import CustomDevelopment from "./pages/WebDevelopmentSubPages/CustomDevelopment";
import MobileAppDevelopment from "./pages/SoftwareMobileSubPages/MobileAppDevelopment";
import SeoServices from "./pages/WebMarketingSubPages/SeoServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <SonnerToaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Main menu routes */}
          <Route
            path="/web-design-&-graphics"
            element={
              <Layout>
                <WebDesignGraphics />
              </Layout>
            }
          />
          <Route
            path="/web-development"
            element={
              <Layout>
                <WebDevelopment />
              </Layout>
            }
          />
          <Route
            path="/software-&-mobile"
            element={
              <Layout>
                <SoftwareMobile />
              </Layout>
            }
          />
          <Route
            path="/web-marketing"
            element={
              <Layout>
                <WebMarketing />
              </Layout>
            }
          />
          <Route
            path="/hire-us"
            element={
              <Layout>
                <HireUs />
              </Layout>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Layout>
                <Portfolio />
              </Layout>
            }
          />
          <Route
            path="/company"
            element={
              <Layout>
                <Company />
              </Layout>
            }
          />
          <Route
            path="/training"
            element={
              <Layout>
                <Training />
              </Layout>
            }
          />{" "}
          {/* FIXED */}
          <Route
            path="/career"
            element={
              <Layout>
                <Career />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/faq"
            element={
              <Layout>
                <FAQ />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/Service"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
          {/* Web Design & Graphics submenu */}
          <Route
            path="/web-designing/responsive-web-designing"
            element={
              <Layout>
                <ResponsiveWebDesigning />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
          <Route
            path="/web-designing/website-redesigning"
            element={
              <Layout>
                <WebsiteRedesigning />
              </Layout>
            }
          />
          <Route
            path="/graphics-design-services/logo-designing"
            element={
              <Layout>
                <LogoDesigning />
              </Layout>
            }
          />
          {/* Web Development submenu */}
          <Route
            path="/cms-development/wordpress-development"
            element={
              <Layout>
                <WordpressDevelopment />
              </Layout>
            }
          />
          <Route
            path="/backend-development/custom-development"
            element={
              <Layout>
                <CustomDevelopment />
              </Layout>
            }
          />
          {/* Software & Mobile submenu */}
          <Route
            path="/mobile-apps/android-development"
            element={
              <Layout>
                <MobileAppDevelopment />
              </Layout>
            }
          />
          {/* Web Marketing submenu */}
          <Route
            path="/seo-services/on-page-seo"
            element={
              <Layout>
                <SeoServices />
              </Layout>
            }
          />
          {/* 404 fallback */}
          {/* <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
