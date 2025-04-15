import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RippleButton from "./ui/rippleButton";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Connecting the Next Generation of Builders";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingSpeed = 40;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-black">
      {/* 深色背景层 */}
      <div className="absolute inset-0 bg-[#040B14]" />

      {/* 星云效果层 */}
      <div className="absolute inset-0 z-[1] nebula-effect opacity-40" />

      {/* 星星效果层 */}
      <div className="stars absolute inset-0 z-[2] opacity-60" />

      {/* 流星效果层 */}
      <div className="shooting-stars absolute inset-0 z-[2] opacity-70" />

      {/* 动态星星层 */}
      <div className="twinkling-stars absolute inset-0 z-[2]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="animate-twinkle absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* 星星流动效果 */}
      <div className="star-flow absolute inset-0 z-[2] opacity-40" />

      {/* 渐变叠加层 */}
      <div className="absolute inset-0 z-[3]" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(4, 11, 20, 0.7) 100%)',
          backdropFilter: 'blur(1px)',
        }}
      />

      {/* 文字内容 */}
      <motion.div
        className="max-w-5xl mx-auto px-6 text-center z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight glow-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
          The Next Builder
        </h1>

        <p className="text-2xl md:text-3xl font-medium mb-8 min-h-[3rem] text-cyan-300">
          {typedText}
          {showCursor && <span className="blinking-cursor">|</span>}
        </p>

        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-gray-300/90 backdrop-blur-sm py-4 px-6 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          From startup founders to student hackers, from robotics rebels to AI explorers —
          <br className="hidden md:block" />
          We're building a global network where Generation Z builders connect, share, and launch what's next.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          <RippleButton
            href="#community"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded-full
                      hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50
                      transition-all duration-300 ease-out backdrop-blur-sm"
          >
            Join The Community
          </RippleButton>

          <RippleButton
            href="#builders"
            className="px-8 py-4 bg-transparent text-white/90 border border-white/20 rounded-full
                      hover:bg-white/10 hover:border-white/40 hover:text-white
                      transition-all duration-300 ease-out backdrop-blur-sm"
          >
            Meet The Builders
          </RippleButton>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
