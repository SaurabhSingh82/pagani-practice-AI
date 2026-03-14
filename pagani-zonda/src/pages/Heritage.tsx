import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

export default function Heritage() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 bg-pagani-black text-white relative">
        <div className="max-w-4xl mx-auto px-8 md:px-24">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-pagani-gold mb-8 uppercase tracking-wider">
            {t('nav.heritage')}
          </h1>
          
          <div className="space-y-24 mb-32 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-pagani-gold before:to-transparent">
            
            {/* Timeline Item */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-pagani-black bg-pagani-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-carbon-gray p-6 border border-white/5 hover:border-pagani-gold/50 transition-colors duration-500">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold font-orbitron text-xl text-pagani-gold">1992</div>
                </div>
                <h3 className="text-white font-rajdhani text-2xl mb-2">The Dream Begins</h3>
                <div className="text-gray-400 font-rajdhani">
                  Horacio Pagani founds Pagani Composite Research, stepping away from Lamborghini to pursue his own vision of the perfect supercar, blending art and science.
                </div>
              </div>
            </div>

            {/* Timeline Item */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-pagani-black bg-pagani-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-carbon-gray p-6 border border-white/5 hover:border-pagani-gold/50 transition-colors duration-500">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold font-orbitron text-xl text-pagani-gold">1999</div>
                </div>
                <h3 className="text-white font-rajdhani text-2xl mb-2">Zonda C12</h3>
                <div className="text-gray-400 font-rajdhani">
                  Revealed at the Geneva Motor Show. Supported by Juan Manuel Fangio, the Zonda redefines the hypercar segment with its bespoke Mercedes-Benz AMG V12.
                </div>
              </div>
            </div>

            {/* Timeline Item */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-pagani-black bg-pagani-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-carbon-gray p-6 border border-white/5 hover:border-pagani-gold/50 transition-colors duration-500">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold font-orbitron text-xl text-pagani-gold">2011</div>
                </div>
                <h3 className="text-white font-rajdhani text-2xl mb-2">Enter the Huayra</h3>
                <div className="text-gray-400 font-rajdhani">
                  Named after the Andean god of wind, the Huayra introduces active aerodynamics and the revolutionary carbotanium chassis to the world.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
}
