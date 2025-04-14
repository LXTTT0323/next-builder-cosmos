
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-space-dark">
      <div className="stars"></div>
      <div className="text-center z-10">
        <h1 className="text-9xl font-bold mb-4 text-space-highlight glow-text">404</h1>
        <p className="text-xl text-gray-300 mb-6">Lost in space? This page doesn't exist</p>
        <a 
          href="/" 
          className="px-8 py-3 bg-space-highlight/10 text-space-highlight border border-space-highlight/50 rounded-full hover:bg-space-highlight/20 transition-all hover:scale-105"
        >
          Return to Home Base
        </a>
      </div>
    </div>
  );
};

export default NotFound;
