import { motion, MotionValue, useTransform } from 'framer-motion';
import { CAR_DATA } from '../data/carData';

interface ZondaExperienceProps {
  scrollYProgress: MotionValue<number>;
}

export default function ZondaExperience({ scrollYProgress }: ZondaExperienceProps) {
  // Hero Phase: 0% to 33%
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.33], [0, -50]);

  // Design Phase: 33% to 66%
  const designOpacity = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  const designY = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [50, 0, 0, -50]);

  // Engine Phase: 66% to 100%
  const engineOpacity = useTransform(scrollYProgress, [0.58, 0.66, 0.9, 1], [0, 1, 1, 1]);
  const engineY = useTransform(scrollYProgress, [0.58, 0.66], [50, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center px-8 md:px-24">
      
      {/* HUD Borders / Technical Overlay */}
      <div className="absolute inset-0 border border-pagani-gold/10 m-8 mix-blend-screen pointer-events-none">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-pagani-gold"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pagani-gold"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pagani-gold"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-pagani-gold"></div>
      </div>

      {/* Hero Section */}
      <motion.div 
        style={{ opacity: heroOpacity, y: heroY }}
        className="absolute top-1/2 -translate-y-1/2 left-8 md:left-24 max-w-lg"
      >
        <p className="text-pagani-gold tracking-[0.3em] font-orbitron text-sm mb-4">THE ULTIMATE EXPRESSION</p>
        <h2 className="text-6xl md:text-8xl font-orbitron font-bold text-white mb-2 tracking-wider">
          {CAR_DATA.name}
        </h2>
        <div className="h-[1px] w-1/3 bg-bright-gold mb-6 shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>
        <p className="text-2xl font-rajdhani text-gray-300 tracking-widest mb-8">
          {CAR_DATA.price}
        </p>
        <div className="pointer-events-auto w-fit">
          <button className="relative px-8 py-3 bg-transparent border border-gray-600 text-white font-orbitron tracking-widest uppercase overflow-hidden group hover:border-pagani-gold transition-colors duration-500">
            <span className="relative z-10">Inquire Now</span>
            <div className="absolute inset-0 bg-pagani-gold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
        </div>
      </motion.div>

      {/* Design Section */}
      <motion.div 
        style={{ opacity: designOpacity, y: designY }}
        className="absolute top-1/2 -translate-y-1/2 right-8 md:right-24 max-w-md text-right border-r border-pagani-gold/30 pr-8"
      >
        <h3 className="text-4xl md:text-6xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pagani-gold mb-4">
          DESIGN
        </h3>
        <ul className="space-y-6">
          <li className="font-rajdhani">
            <p className="text-pagani-gold/70 text-xs tracking-[0.2em] uppercase">Chassis</p>
            <p className="text-xl text-white tracking-wider">{CAR_DATA.design.chassis}</p>
          </li>
          <li className="font-rajdhani">
            <p className="text-pagani-gold/70 text-xs tracking-[0.2em] uppercase">Body</p>
            <p className="text-xl text-white tracking-wider">{CAR_DATA.design.body}</p>
          </li>
          <li className="font-rajdhani">
            <p className="text-pagani-gold/70 text-xs tracking-[0.2em] uppercase">Aerodynamics</p>
            <p className="text-xl text-white tracking-wider">{CAR_DATA.design.aero}</p>
          </li>
        </ul>
      </motion.div>

      {/* Engine Section */}
      <motion.div 
        style={{ opacity: engineOpacity, y: engineY }}
        className="absolute top-1/2 -translate-y-1/2 left-8 md:left-24 max-w-md border-l border-pagani-gold/30 pl-8 backdrop-blur-sm bg-pagani-black/20 p-6"
      >
        <h3 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
          ENGINE
        </h3>
        <div className="grid grid-cols-2 gap-8 font-rajdhani">
          <div>
            <p className="text-pagani-gold/70 text-xs tracking-[0.2em] uppercase mb-1">Powerplant</p>
            <p className="text-2xl text-white tracking-wider font-semibold">{CAR_DATA.specs.engine}</p>
          </div>
          <div>
            <p className="text-pagani-gold/70 text-xs tracking-[0.2em] uppercase mb-1">Output</p>
            <p className="text-3xl text-bright-gold tracking-wider font-bold drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">{CAR_DATA.specs.horsepower}</p>
          </div>
          <div>
            <p className="text-pagani-gold/70 text-xs tracking-[0.2em] uppercase mb-1">Top Speed</p>
            <p className="text-2xl text-white tracking-wider font-semibold">{CAR_DATA.specs.topSpeed}</p>
          </div>
          <div>
            <p className="text-pagani-gold/70 text-xs tracking-[0.2em] uppercase mb-1">Acceleration</p>
            <p className="text-2xl text-white tracking-wider font-semibold">{CAR_DATA.specs.acceleration}</p>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}
