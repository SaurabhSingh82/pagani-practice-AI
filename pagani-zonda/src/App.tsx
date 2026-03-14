import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

// Pages
import Home from './pages/Home';
import Models from './pages/Models';
import Heritage from './pages/Heritage';
import Configurator from './pages/Configurator';
import Admin from './pages/Admin';

function App() {
  const location = useLocation();

  return (
    <>
      <CustomCursor />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/configurator" element={<Configurator />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
