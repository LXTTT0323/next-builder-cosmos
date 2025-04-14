
import { useEffect, useState } from "react";
import { MessageCircle, UserPlus } from "lucide-react";

const CommunitySection = () => {
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

    const element = document.getElementById("community");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  return (
    <section id="community" className="py-24 px-6 relative">
      <div className="stars"></div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Join Our <span className="text-space-highlight">Community</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Discord Card */}
          <div 
            className={`space-card p-8 rounded-2xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-[#5865F2]/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-[#5865F2]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Join Our Discord</h3>
              <p className="text-gray-300 mb-6 flex-grow">
                Real-time conversations and announcements.
                <br />
                Hang out, ask questions, get inspired.
              </p>
              <a 
                href="https://discord.gg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#5865F2] text-white rounded-full hover:bg-[#4752C4] transition-all hover:scale-105"
              >
                Join Discord →
              </a>
            </div>
          </div>
          
          {/* Profile Card */}
          <div 
            className={`space-card p-8 rounded-2xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-space-accent/20 flex items-center justify-center mb-6">
                <UserPlus className="w-8 h-8 text-space-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Leave Your Builder Profile</h3>
              <p className="text-gray-300 mb-6 flex-grow">
                Be featured. Get matched. Get support.
                <br />
                Takes 1 min. Helps us know you and support your journey.
              </p>
              <a 
                href="https://forms.google.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-space-accent text-white rounded-full hover:bg-space-accent-light transition-all hover:scale-105"
              >
                Submit Your Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
