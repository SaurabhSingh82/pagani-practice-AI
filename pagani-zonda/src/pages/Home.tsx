import { useRef } from 'react';
import { useScroll } from 'framer-motion';

import ZondaScrollCanvas from '../components/ZondaScrollCanvas';
import ZondaExperience from '../components/ZondaExperience';
import SpecsGrid from '../components/SpecsGrid';
import Features from '../components/Features';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <PageTransition>
      {/* SCROLL SEQUENCE */}
      <section ref={containerRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ZondaScrollCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={240}
            imageFolderPath="/images/zonda-sequence"
          />
          <ZondaExperience
            scrollYProgress={scrollYProgress}
          />
        </div>
      </section>

      {/* AFTER SCROLL EXPERIENCE */}
      <div className="relative z-20 bg-pagani-black shadow-[0_-20px_50px_rgba(0,0,0,1)]">
        <SpecsGrid />
        <Features />
        <Footer />
      </div>
    </PageTransition>
  );
}
