import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';

// Placeholder 3D Car Model (Abstract Representation since no GLTF is provided)
function CarPlaceholder({ color }: { color: string }) {
  return (
    <group position={[0, -0.5, 0]}>
      {/* Main Body */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[4, 0.8, 1.8]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Cabin */}
      <mesh position={[-0.2, 1.1, 0]} castShadow>
        <boxGeometry args={[1.8, 0.5, 1.4]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Wheels */}
      {[-1.2, 1.2].map((x) =>
        [-0.95, 0.95].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, 0.2, z]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
            <meshStandardMaterial color="#222" metalness={0.5} roughness={0.8} />
          </mesh>
        ))
      )}
    </group>
  );
}

export default function Configurator() {
  const { t } = useTranslation();
  const [carColor, setCarColor] = useState('#D4AF37'); // Default Pagani Gold

  const colors = [
    { name: 'Pagani Gold', hex: '#D4AF37' },
    { name: 'Carbon Black', hex: '#1a1a1a' },
    { name: 'Rosso Dubai', hex: '#8b0000' },
    { name: 'Bianco Benny', hex: '#f0f0f0' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-pagani-black relative flex flex-col md:flex-row">
        
        {/* 3D Canvas Area */}
        <div className="w-full md:w-2/3 h-[50vh] md:h-screen relative cursor-grab active:cursor-grabbing">
          <Canvas shadows camera={{ position: [5, 2, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
            <Suspense fallback={null}>
              <CarPlaceholder color={carColor} />
              <Environment preset="city" />
              <ContactShadows position={[0, -0.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
            </Suspense>
            <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2 + 0.1} minDistance={3} maxDistance={10} />
          </Canvas>
          <div className="absolute bottom-8 left-8 pointer-events-none text-white/50 font-rajdhani text-sm tracking-widest uppercase">
            Drag to Rotate &bull; Scroll to Zoom
          </div>
        </div>

        {/* UI Controls Area */}
        <div className="w-full md:w-1/3 min-h-[50vh] bg-carbon-gray border-l border-white/10 p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-orbitron font-bold text-white mb-2 uppercase tracking-wider">
            {t('nav.configurator')}
          </h1>
          <p className="text-gray-400 font-rajdhani mb-12">Personalize your masterpiece.</p>

          <div className="space-y-8">
            <div>
              <h3 className="text-pagani-gold font-orbitron text-sm tracking-[0.2em] uppercase mb-4">Select Paint</h3>
              <div className="grid grid-cols-4 gap-4">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setCarColor(c.hex)}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${carColor === c.hex ? 'border-pagani-gold scale-110 shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'border-transparent hover:scale-105'}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
              <p className="mt-4 font-rajdhani text-white text-lg">{colors.find(c => c.hex === carColor)?.name}</p>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <button className="w-full py-4 bg-transparent border border-gray-600 text-white font-orbitron tracking-widest uppercase hover:border-pagani-gold hover:bg-pagani-gold/10 transition-colors duration-500">
                {t('nav.inquire')}
              </button>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
