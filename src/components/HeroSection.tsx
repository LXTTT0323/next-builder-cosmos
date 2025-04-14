
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-nebula-pattern bg-no-repeat bg-cover">
      <div className="stars"></div>
      <div className={`max-w-5xl mx-auto px-6 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight glow-text">
          The Next Builder
        </h1>
        <p className="text-xl md:text-2xl font-medium text-space-highlight mb-8 animate-pulse-glow">
          Connecting the Next Generation of Builders
        </p>
        <p className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed text-gray-300">
          From startup founders to student hackers, from robotics rebels to AI explorers —
          <br className="hidden md:block" />
          We're building a global network where Generation Z builders connect, share, and launch what's next.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#community" 
            className="px-8 py-3 bg-space-highlight/10 text-space-highlight border border-space-highlight/50 rounded-full 
                      hover:bg-space-highlight/20 transition-all hover:scale-105 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Join The Community
          </a>
          <a 
            href="#builders" 
            className="px-8 py-3 bg-transparent text-white border border-white/20 rounded-full 
                      hover:bg-white/5 transition-all hover:scale-105 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            Meet The Builders
          </a>
        </div>
      </div>
      
      {/* Flying particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
