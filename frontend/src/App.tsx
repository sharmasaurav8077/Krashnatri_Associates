import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import ErrorBoundary from './components/ErrorBoundary';
import { initMagneticHover } from './utils/magneticHover';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import EBrochure from './pages/EBrochure';
import Industries from './pages/Industries';
import FAQ from './pages/FAQ';
import CaseStudies from './pages/CaseStudies';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top on route change, not on hash changes (anchor links)
    // This prevents scrolling to top when clicking anchor links within the same page
    if (!window.location.hash) {
      // Detect mobile browsers for optimized scroll behavior
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      
      // Mobile-optimized scroll to prevent flicker
      const scrollToTop = () => {
        // Use both methods for maximum compatibility
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For older Safari versions
      };

      if (isMobile || isSafari) {
        // For mobile browsers, use a small delay to ensure layout is complete
        // This prevents flicker on Safari iOS and Chrome mobile
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scrollToTop();
          });
        });
      } else {
        // For desktop, single requestAnimationFrame is sufficient
        requestAnimationFrame(() => {
          scrollToTop();
        });
      }
    }
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    // Initialize magnetic hover effect for all interactive elements
    const cleanup = initMagneticHover({
      maxTranslate: 8,
      minTranslate: 4,
    });

    return cleanup;
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <Loader />
          <CustomCursor />
          <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            <main className="flex-grow pt-20 w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/e-brochure" element={<EBrochure />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/case-studies" element={<CaseStudies />} />
              </Routes>
            </main>
            <div className="mt-12 sm:mt-0">
              <Footer />
            </div>
            <WhatsAppButton />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
