
import { useEffect, useState } from "react";
import { Users, MessageSquare, Search } from "lucide-react";

const featureData = [
  {
    icon: Users,
    title: "Find Collaborators",
    description: "Connect with co-founders, early employees, product thinkers, and technical builders.",
    delay: 0
  },
  {
    icon: MessageSquare,
    title: "Join Conversations",
    description: "Talk to people who are figuring things out, just like you.",
    delay: 200
  },
  {
    icon: Search,
    title: "Be Discovered",
    description: "Tell us what you're building — we'll showcase you and help you meet the right people.",
    delay: 400
  }
];

const statsData = [
  { value: "500+", label: "Gen Z Founders" },
  { value: "100+", label: "Investors" },
  { value: "20+", label: "Industry Partners" }
];

const FeaturesSection = () => {
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = document.querySelectorAll('.feature-item');
    featureElements.forEach(el => observer.observe(el));
    
    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 relative">
      <div className="stars"></div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What You Can <span className="text-space-highlight">Do Here</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {featureData.map((feature, index) => (
            <div 
              id={`feature-${index}`} 
              key={index} 
              className={`feature-item space-card p-8 rounded-2xl transition-all duration-1000 transform ${visible[`feature-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-space-highlight/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-space-highlight" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          id="stats-section" 
          className={`space-card p-8 rounded-2xl transition-all duration-1000 transform ${visible['stats-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <p className="text-center text-lg mb-10">
            And you're not alone. We've already connected:
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-space-highlight mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
