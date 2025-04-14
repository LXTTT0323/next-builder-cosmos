
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-space-dark/80 backdrop-blur-lg shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            The Next <span className="text-space-highlight">Builder</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-space-highlight transition-colors">Home</a>
            <a href="#mission-section" className="text-white hover:text-space-highlight transition-colors">Mission</a>
            <a href="#builders" className="text-white hover:text-space-highlight transition-colors">Builders</a>
            <a 
              href="#community" 
              className="px-6 py-2 bg-space-highlight/10 text-space-highlight border border-space-highlight/50 rounded-full 
                        hover:bg-space-highlight/20 transition-all"
            >
              Join Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white hover:text-space-highlight"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-space-navy/95 backdrop-blur-lg shadow-lg border-t border-white/10">
          <div className="p-5 space-y-4">
            <a 
              href="#" 
              className="block py-2 text-white hover:text-space-highlight transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#mission-section" 
              className="block py-2 text-white hover:text-space-highlight transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mission
            </a>
            <a 
              href="#builders" 
              className="block py-2 text-white hover:text-space-highlight transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Builders
            </a>
            <a 
              href="#community" 
              className="block py-2 text-white hover:text-space-highlight transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
