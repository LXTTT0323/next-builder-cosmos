import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.4,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const MissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // 信封展开动画的变换值
  const envelopeScale = useTransform(scrollYProgress, 
    [0.1, 0.2], 
    [0.6, 1]
  );
  const envelopeY = useTransform(scrollYProgress,
    [0.1, 0.2],
    [-100, 0]
  );
  const letterY = useTransform(scrollYProgress,
    [0.1, 0.25],
    [100, 0]
  );
  const letterOpacity = useTransform(scrollYProgress,
    [0.1, 0.25],
    [0, 1]
  );

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

  const paragraphs = [
    `In an era where technology evolves overnight and barriers to creation fall away, the power to build has never been more accessible. Yet with this freedom comes a question that echoes across dorm rooms, garages, and makeshift labs around the world: "Am I the only one trying to build something that matters?"`,
    `You are not alone. The Next Builder exists because we believe that the greatest innovations of our time will come from your generation – unbound by conventional thinking and driven by the urgent need to reshape our world.`,
    `This is more than a community. It's a constellation of minds, each bright with possibility, connected across borders and disciplines. Here, you'll find collaborators who share your vision, mentors who've walked similar paths, and friends who understand the unique challenges of building while the rest of your peers are still figuring out what comes next.`,
    `Whether you're coding an AI that will transform education, designing hardware that pushes the boundaries of what's possible, or launching a startup that challenges entire industries – you belong here. Your ambition, your creativity, your determination to build what doesn't yet exist – these are the qualities that unite us.`,
  ];

  return (
    <section id="mission-section" className="py-32 px-6 relative overflow-hidden min-h-screen">
      <div className="stars absolute inset-0 opacity-50"></div>

      {/* 信封容器 */}
      <motion.div
        className="relative max-w-4xl mx-auto"
        style={{
          scale: envelopeScale,
          y: envelopeY,
        }}
      >
        {/* 信封顶部 */}
        <motion.div
          className="relative w-full h-20 mx-auto mb-[-2px] z-20"
          initial={{ rotateX: 0 }}
          animate={isVisible ? { rotateX: 180 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            transformOrigin: "top",
            perspective: "1000px"
          }}
        >
          <div className="absolute w-full h-full bg-[#0e1a2f] rounded-t-2xl shadow-lg">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-space-highlight/50 to-space-accent/50 rounded-full blur-sm" />
          </div>
        </motion.div>

        {/* 信纸主内容 */}
        <motion.div
          className="relative space-card p-10 md:p-12 rounded-2xl shadow-2xl bg-white/5 backdrop-blur-lg border border-white/10"
          style={{
            y: letterY,
            opacity: letterOpacity,
          }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold glow-text text-center mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            To the <span className="text-space-highlight">Next Builder</span>
          </motion.h2>

          <div className="prose prose-invert max-w-none text-gray-300">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                className="text-lg leading-relaxed mb-5"
                variants={letterVariants}
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                custom={i}
              >
                {text.includes("Am I the only") ? (
                  <>
                    In an era where technology evolves overnight and barriers to creation fall away, the power to build has never been more accessible. Yet with this freedom comes a question that echoes across dorm rooms, garages, and makeshift labs around the world:{" "}
                    <em className="text-space-highlight">"Am I the only one trying to build something that matters?"</em>
                  </>
                ) : (
                  text
                )}
              </motion.p>
            ))}

            <motion.div
              className="mt-12 text-right"
              variants={letterVariants}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              custom={paragraphs.length}
            >
              <p className="text-lg leading-relaxed">With excitement for what we'll build together,</p>
              <p className="text-lg leading-relaxed mt-2">— The Next Builder Team</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionSection;
