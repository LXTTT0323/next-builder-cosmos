import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 神秘的建设者数据
const mysteriousBuilders = [
  {
    id: 1,
    avatar: "🤖",
    hint: "AI Agent Builder",
    details: {
      project: "AI Code Assistant",
      funding: "$50M Seed",
      revenue: "$110K MRR",
      generation: "Gen Z (2004)"
    },
    position: { top: "10%", left: "8%" }
  },
  {
    id: 2,
    avatar: "🧠",
    hint: "Neural Tech Explorer",
    details: {
      project: "Brain-Computer Interface",
      funding: "$2M Pre-seed",
      revenue: "$25K MRR",
      generation: "Gen Z (2005)"
    },
    position: { top: "10%", left: "65%" }
  },
  {
    id: 3,
    avatar: "🌱",
    hint: "Climate Innovation",
    details: {
      project: "Carbon Capture Tech",
      funding: "$7M Series A",
      revenue: "$450K MRR",
      generation: "Gen Z (2003)"
    },
    position: { top: "40%", left: "45%" }
  },
  {
    id: 4,
    avatar: "⚡",
    hint: "Energy Revolution",
    details: {
      project: "Fusion Energy",
      funding: "$15M Seed",
      revenue: "$90K MRR",
      generation: "Gen Z (2006)"
    },
    position: { top: "70%", left: "20%" }
  },
  {
    id: 5,
    avatar: "🔮",
    hint: "Future Computing",
    details: {
      project: "Quantum Systems",
      funding: "$4M Angel",
      revenue: "$40K MRR",
      generation: "Gen Z (2002)"
    },
    position: { top: "70%", left: "80%" }
  }
];

const MysteriousCard = ({ builder, isVisible }: { builder: any, isVisible: boolean }) => {
  const [isActivated, setIsActivated] = useState(false);

  return (
    <motion.div
      className="absolute w-64"
      style={{ 
        top: builder.position.top, 
        left: builder.position.left,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, delay: builder.id * 0.2 }}
    >
      <div
        className={`relative group cursor-pointer transition-all duration-500 ${
          isActivated ? 'transform scale-105' : ''
        }`}
        onClick={() => setIsActivated(!isActivated)}
        onMouseEnter={() => setIsActivated(true)}
        onMouseLeave={() => setIsActivated(false)}
      >
        {/* 背景光晕效果 */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 rounded-xl ${
            isActivated ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(circle at center, rgba(74, 222, 255, 0.2) 0%, transparent 70%)',
            filter: 'blur(10px)',
            transform: 'scale(1.2)',
          }}
        />

        {/* 卡片主体 */}
        <div
          className={`relative p-6 rounded-xl backdrop-blur-sm border transition-all duration-500 ${
            isActivated
              ? 'bg-space-navy/90 border-space-highlight/30 shadow-lg shadow-space-highlight/20'
              : 'bg-space-navy/20 border-white/5'
          }`}
        >
          {/* 头像和提示 */}
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">{builder.avatar}</div>
            <div className={`text-lg font-medium transition-all duration-500 ${
              isActivated ? 'text-space-highlight' : 'text-gray-400'
            }`}>
              {builder.hint}
            </div>
          </div>

          {/* 详细信息 */}
          <div className={`space-y-2 transition-all duration-500 ${
            isActivated ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}>
            <div className="text-sm text-gray-300">{builder.details.funding}</div>
            <div className="text-sm text-gray-300">{builder.details.revenue}</div>
            <div className="text-sm text-gray-300">{builder.details.generation}</div>
          </div>

          {/* 神秘光点装饰 */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
            <div className={`w-1 h-1 rounded-full transition-all duration-500 ${
              isActivated ? 'bg-space-highlight shadow-lg shadow-space-highlight/50' : 'bg-white/20'
            }`} />
          </div>
        </div>
      </div>
    </motion.div>
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
    <section id="builders" className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-[#040B14]/90" />
      <div className="stars absolute inset-0 opacity-50" />
      <div className="nebula-effect absolute inset-0 opacity-20" />

      {/* 内容区域 */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Builder <span className="text-space-highlight">Wall</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Meet some of the ambitious builders in our community. Each constellation represents a 
          founder and their journey. Hover to discover their stories.
        </p>
        
        {/* 建设者卡片墙 */}
        <div className="relative w-full h-[800px] max-w-[1200px] mx-auto">
          {/* 连接线 */}
          <svg 
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              isVisible ? 'opacity-20' : 'opacity-0'
            }`}
            style={{ strokeDasharray: "5,5" }}
          >
            {mysteriousBuilders.map((builder, i) => {
              const next = mysteriousBuilders[(i + 1) % mysteriousBuilders.length];
              return (
                <line
                  key={i}
                  x1={builder.position.left}
                  y1={builder.position.top}
                  x2={next.position.left}
                  y2={next.position.top}
                  stroke="rgba(74, 222, 255, 0.3)"
                  strokeWidth="1"
                />
              );
            })}
          </svg>

          {/* 连接点 */}
          {mysteriousBuilders.map((builder, i) => (
            <div
              key={`node-${i}`}
              className="absolute w-2 h-2 rounded-full bg-space-highlight/50"
              style={{
                top: builder.position.top,
                left: builder.position.left,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 10px rgba(74, 222, 255, 0.5)',
                transition: 'all 0.5s ease-in-out',
              }}
            />
          ))}

          {/* 卡片 */}
          {mysteriousBuilders.map(builder => (
            <MysteriousCard
              key={builder.id}
              builder={builder}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuilderWall;
