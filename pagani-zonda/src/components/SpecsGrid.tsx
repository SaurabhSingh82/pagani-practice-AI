import { CAR_DATA } from '../data/carData';

export default function SpecsGrid() {
  return (
    <section className="bg-pagani-black py-24 px-8 md:px-24 border-t border-pagani-gold/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-pagani-gold to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm tracking-[0.3em] text-pagani-gold font-orbitron mb-2 uppercase">Performance</h2>
          <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-white">TECHNICAL SPECIFICATIONS</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-pagani-gold/20 p-px">
          <div className="bg-pagani-black p-8 group hover:bg-carbon-gray transition-colors duration-500">
            <span className="text-pagani-gold/50 text-xs font-rajdhani tracking-widest uppercase mb-4 block group-hover:text-pagani-gold transition-colors">Engine</span>
            <p className="text-2xl text-white font-rajdhani">{CAR_DATA.specs.engine}</p>
          </div>
          <div className="bg-pagani-black p-8 group hover:bg-carbon-gray transition-colors duration-500">
            <span className="text-pagani-gold/50 text-xs font-rajdhani tracking-widest uppercase mb-4 block group-hover:text-pagani-gold transition-colors">Output</span>
            <p className="text-2xl text-white font-rajdhani">{CAR_DATA.specs.horsepower}</p>
          </div>
          <div className="bg-pagani-black p-8 group hover:bg-carbon-gray transition-colors duration-500">
            <span className="text-pagani-gold/50 text-xs font-rajdhani tracking-widest uppercase mb-4 block group-hover:text-pagani-gold transition-colors">Top Speed</span>
            <p className="text-2xl text-white font-rajdhani">{CAR_DATA.specs.topSpeed}</p>
          </div>
          <div className="bg-pagani-black p-8 group hover:bg-carbon-gray transition-colors duration-500">
            <span className="text-pagani-gold/50 text-xs font-rajdhani tracking-widest uppercase mb-4 block group-hover:text-pagani-gold transition-colors">Weight</span>
            <p className="text-2xl text-white font-rajdhani">{CAR_DATA.specs.weight}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
