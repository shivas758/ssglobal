import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen hero-pattern">
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center space-y-8">
          <h1 className="text-8xl font-bold tehno-gradient-text animate-scale-in animate-delay-200">404</h1>
          <p className="text-2xl text-muted-foreground animate-fade-in-up animate-delay-300">Oops! Page not found</p>
          <div className="animate-fade-in-up animate-delay-400">
            <a href="/" className="inline-block tehno-gradient hover:shadow-lg hover:shadow-primary/30 text-white px-8 py-4 rounded-xl font-semibold tehno-button-hover">
              Return to Home
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
