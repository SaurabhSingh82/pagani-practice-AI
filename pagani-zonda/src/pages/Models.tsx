import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

export default function Models() {
  const { t } = useTranslation();

  const models = [
    { name: "Zonda R", img: "/images/zonda-sequence/ezgif-frame-001.jpg", desc: "The Ultimate Expression." },
    { name: "Huayra R", img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80", desc: "Art and Science synthesized." },
    { name: "Utopia", img: "https://images.unsplash.com/photo-1544839688-66afdbabdd26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80", desc: "The new standard of Hypercars." }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 px-8 md:px-24 bg-pagani-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pagani-gold/5 blur-[150px] pointer-events-none rounded-full" />
        
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-16 uppercase relative z-10">
          {t('nav.models')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-24">
          {models.map((model, idx) => (
            <div key={idx} className="group cursor-pointer border border-pagani-gold/20 hover:border-pagani-gold transition-colors duration-500 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={model.img} 
                  alt={model.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6 bg-carbon-gray">
                <h3 className="text-2xl font-orbitron text-white mb-2 tracking-wider group-hover:text-pagani-gold transition-colors">{model.name}</h3>
                <p className="text-gray-400 font-rajdhani">{model.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
}
