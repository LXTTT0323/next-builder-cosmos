
import { useEffect, useState } from "react";

const MissionSection = () => {
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

    const element = document.getElementById("mission-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  return (
    <section id="mission-section" className="py-24 px-6 relative">
      <div className="stars"></div>
      <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            To the <span className="text-space-highlight">Next Builder</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-highlight to-space-accent mx-auto mb-10"></div>
        </div>
        
        <div className="space-card p-8 rounded-2xl shadow-lg">
          <p className="text-lg leading-relaxed mb-5 text-gray-300">
            In an era where technology evolves overnight and barriers to creation fall away, 
            the power to build has never been more accessible. Yet with this freedom comes
            a question that echoes across dorm rooms, garages, and makeshift labs around the world:
            <em className="text-space-highlight"> "Am I the only one trying to build something that matters?"</em>
          </p>
          
          <p className="text-lg leading-relaxed mb-5 text-gray-300">
            You are not alone. The Next Builder exists because we believe that the greatest innovations
            of our time will come from your generation – unbound by conventional thinking and driven by 
            the urgent need to reshape our world.
          </p>
          
          <p className="text-lg leading-relaxed mb-5 text-gray-300">
            This is more than a community. It's a constellation of minds, each bright with possibility,
            connected across borders and disciplines. Here, you'll find collaborators who share your vision,
            mentors who've walked similar paths, and friends who understand the unique challenges of building
            while the rest of your peers are still figuring out what comes next.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-300">
            Whether you're coding an AI that will transform education, designing hardware that pushes the 
            boundaries of what's possible, or launching a startup that challenges entire industries –
            you belong here. Your ambition, your creativity, your determination to build what doesn't 
            yet exist – these are the qualities that unite us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
