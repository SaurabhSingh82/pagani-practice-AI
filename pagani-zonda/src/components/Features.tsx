export default function Features() {
  return (
    <section className="bg-pagani-black py-24 relative">
      <div className="max-w-7xl mx-auto px-8 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative aspect-square lg:aspect-auto lg:h-[600px] border border-pagani-gold/20 p-4">
            <div className="w-full h-full bg-carbon-gray flex items-center justify-center relative overflow-hidden group">
              {/* Optional background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pagani-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <p className="font-orbitron tracking-[0.4em] text-pagani-gold/30 rotate-90 absolute right-8 origin-bottom-right">CARBON TITANIUM</p>
              <div className="w-2/3 h-2/3 border border-white/5 flex items-center justify-center">
                 <span className="font-rajdhani text-white/50 tracking-widest uppercase text-sm">Monocoque Structure Abstract</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-pagani-gold"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-pagani-gold"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-sm tracking-[0.3em] text-pagani-gold font-orbitron mb-2 uppercase">Innovation</h2>
              <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-white leading-tight">
                A SYMPHONY OF <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-pagani-gold to-white">ENGINEERING</span>
              </h3>
            </div>
            
            <p className="font-rajdhani text-gray-400 text-lg md:text-xl leading-relaxed">
              The central carbon-titanium chassis incorporates a roll cage in CrMo alloy. 
              The car's overall weight is reduced significantly, while rigidity is enhanced to handle 
              the extreme aerodynamic loads generated down the track.
            </p>

            <ul className="space-y-4 font-rajdhani text-gray-300">
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-pagani-gold rotate-45"></div>
                <span className="tracking-wider">Forged magnesium alloy wheels</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-pagani-gold rotate-45"></div>
                <span className="tracking-wider">Inconel 625 composite exhaust system</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-pagani-gold rotate-45"></div>
                <span className="tracking-wider">Brembo carbon-ceramic brakes</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
