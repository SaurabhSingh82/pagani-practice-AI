import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { scrollY } = useScroll();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Only apply scroll transparency if we are on the Home page (so static pages stay solid)
  const isHome = location.pathname === '/';

  const background = useTransform(
    scrollY,
    [0, 100],
    [isHome ? 'rgba(26, 26, 26, 0)' : 'rgba(26, 26, 26, 0.95)', 'rgba(26, 26, 26, 0.95)']
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    [isHome ? 'blur(0px)' : 'blur(10px)', 'blur(10px)']
  );

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'it' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <motion.nav
      style={{ background, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/5 transition-colors duration-300 hover:border-pagani-gold/20"
    >
      <Link to="/" className="flex items-center gap-2 cursor-pointer group">
        <h1 className="text-2xl font-orbitron font-bold tracking-widest text-white group-hover:text-gray-300 transition-colors">
          PAGANI
        </h1>
        <span className="text-pagani-gold font-orbitron text-xl font-light">ZONDA R</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 font-rajdhani text-sm text-white tracking-widest uppercase">
        <Link to="/models" className="hover:text-pagani-gold transition-colors">{t('nav.models')}</Link>
        <Link to="/heritage" className="hover:text-pagani-gold transition-colors">{t('nav.heritage')}</Link>
        <Link to="/configurator" className="hover:text-pagani-gold transition-colors">{t('nav.configurator')}</Link>
        <Link to="/admin" className="hover:text-pagani-gold transition-colors">{t('nav.admin')}</Link>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={toggleLanguage}
          className="font-rajdhani text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
        >
          {i18n.language === 'en' ? 'IT' : 'EN'}
        </button>

        <button className="px-6 py-2 border border-pagani-gold text-pagani-gold font-orbitron text-sm uppercase tracking-wider hover:bg-pagani-gold hover:text-pagani-black transition-all duration-300 cursor-pointer">
          {t('nav.inquire')}
        </button>
      </div>
    </motion.nav>
  );
}
