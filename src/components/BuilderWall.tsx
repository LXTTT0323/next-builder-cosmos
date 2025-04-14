
import { useEffect, useState } from "react";
import { Users, Rocket, DollarSign, Calendar } from "lucide-react";

// Sample builder data
const builders = [
  {
    id: 1,
    avatar: "👩‍💻",
    projectName: "AI Code Agent (YC W24)",
    fundingStage: "$50M Seed",
    monthlyRevenue: "MRR $110K",
    age: "Born in 2004",
    top: "15%",
    left: "10%",
  },
  {
    id: 2,
    avatar: "🧠",
    projectName: "Neural Interface Tech",
    fundingStage: "$2M Pre-seed",
    monthlyRevenue: "MRR $25K",
    age: "Born in 2005",
    top: "25%",
    left: "65%",
  },
  {
    id: 3,
    avatar: "🌱",
    projectName: "Climate Tech Platform",
    fundingStage: "$7M Series A",
    monthlyRevenue: "MRR $450K",
    age: "Born in 2003",
    top: "55%",
    left: "20%",
  },
  {
    id: 4,
    avatar: "🤖",
    projectName: "Robotics Automation",
    fundingStage: "$15M Seed",
    monthlyRevenue: "MRR $90K",
    age: "Born in 2006",
    top: "65%",
    left: "80%",
  },
  {
    id: 5,
    avatar: "🔒",
    projectName: "Quantum Cryptography",
    fundingStage: "$4M Angel",
    monthlyRevenue: "MRR $40K",
    age: "Born in 2002",
    top: "35%",
    left: "45%",
  },
];

const BuilderCard = ({ builder, isVisible }: { builder: any, isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`builder-card absolute rounded-xl overflow-hidden transition-all duration-700 z-10 w-64 ${isVisible ? 'opacity-70' : 'opacity-0'}`}
      style={{ 
        top: builder.top, 
        left: builder.left, 
        transitionDelay: `${builder.id * 200}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`p-6 backdrop-blur-sm transition-all duration-500 ${isHovered ? 'bg-space-navy/90 shadow-lg shadow-space-highlight/20' : 'bg-space-navy/50'}`}
      >
        <div className="text-4xl mb-3">{builder.avatar}</div>
        <h3 className="text-lg font-bold mb-4 text-space-highlight">{builder.projectName}</h3>
        
        <div className={`space-y-2 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2 text-sm">
            <Rocket className="w-4 h-4 text-space-highlight" />
            <span>{builder.fundingStage}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="w-4 h-4 text-space-highlight" />
            <span>{builder.monthlyRevenue}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-space-highlight" />
            <span>{builder.age}</span>
          </div>
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 opacity-0 ${isHovered ? 'opacity-100' : ''} pointer-events-none`}
        style={{
          background: `radial-gradient(circle at center, rgba(74, 222, 255, 0.3) 0%, transparent 70%)`,
          filter: 'blur(15px)',
          transform: 'scale(1.2)'
        }}
      ></div>
    </div>
  );
};

const BuilderWall = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("builders");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  return (
    <section id="builders" className="py-24 px-6 relative">
      <div className="stars"></div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Builder <span className="text-space-highlight">Wall</span>
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Meet some of the ambitious builders in our community. Each constellation represents a 
          founder and their journey. Hover to discover their stories.
        </p>
        
        <div className="relative w-full h-[600px] mb-10">
          {/* Connecting lines between builder cards */}
          <svg 
            className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`} 
            style={{ transitionDelay: '1000ms' }}
          >
            <line x1="20%" y1="20%" x2="55%" y2="40%" stroke="rgba(74, 222, 255, 0.3)" strokeWidth="1" />
            <line x1="55%" y1="40%" x2="85%" y2="70%" stroke="rgba(74, 222, 255, 0.3)" strokeWidth="1" />
            <line x1="85%" y1="70%" x2="25%" y2="60%" stroke="rgba(74, 222, 255, 0.3)" strokeWidth="1" />
            <line x1="25%" y1="60%" x2="70%" y2="30%" stroke="rgba(74, 222, 255, 0.3)" strokeWidth="1" />
            <line x1="70%" y1="30%" x2="15%" y2="20%" stroke="rgba(74, 222, 255, 0.3)" strokeWidth="1" />
          </svg>
          
          {/* Builder cards */}
          {builders.map(builder => (
            <BuilderCard 
              key={builder.id} 
              builder={builder} 
              isVisible={isVisible} 
            />
          ))}
          
          {/* Star nodes at connection points */}
          {isVisible && (
            <>
              {[
                { top: "20%", left: "20%" },
                { top: "40%", left: "55%" },
                { top: "70%", left: "85%" },
                { top: "60%", left: "25%" },
                { top: "30%", left: "70%" },
              ].map((pos, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-space-highlight animate-pulse-glow"
                  style={{ 
                    top: pos.top, 
                    left: pos.left,
                    boxShadow: '0 0 10px rgba(74, 222, 255, 0.8)',
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BuilderWall;
