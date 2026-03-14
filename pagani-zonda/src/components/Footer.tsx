import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 md:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <h1 className="text-2xl font-orbitron font-bold tracking-widest text-white/50 group-hover:text-white transition-colors">
              PAGANI
            </h1>
            <span className="text-pagani-gold/50 font-orbitron text-xl font-light">AUTOMOBILI</span>
          </Link>
          
          <div className="flex gap-8 font-rajdhani text-sm text-gray-500 tracking-widest uppercase">
            <Link to="/models" className="hover:text-pagani-gold transition-colors">Models</Link>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="hover:text-pagani-gold transition-colors uppercase tracking-widest cursor-pointer"
            >
              Contact
            </button>
          </div>

          <p className="font-rajdhani text-xs text-gray-600 tracking-wider">
            &copy; {new Date().getFullYear()} Pagani Automobili S.p.A. All rights reserved.
          </p>
        </div>
      </footer>

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
}
