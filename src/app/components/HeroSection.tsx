import { motion } from 'motion/react';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Float, Sphere } from '@react-three/drei';

function PlaceholderModel() {
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={1.8}>
        <MeshDistortMaterial
          color="#2E7D32"
          speed={3}
          distort={0.4}
          radius={1}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Мягкий градиент на фоне */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent opacity-50 z-0" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 rounded-full border border-[#2E7D32]/30 text-[#2E7D32] text-xs font-bold mb-6 tracking-widest uppercase">
            Sustainability First
          </span>
          <h1 className="text-[56px] lg:text-[72px] text-[#333333] leading-[1.1] mb-6">
            Everything is <br />
            <span className="text-[#2E7D32]">Reborn</span>
          </h1>
          <p className="text-[22px] text-[#666666] mb-10 font-light max-w-lg">
            Converting sewage sludge into fertile soil using revolutionary biotech.
          </p>
          
          <div className="flex gap-12 mb-10 py-8 border-y border-gray-100">
            <div>
              <div className="text-4xl font-bold text-[#333333]">15+</div>
              <div className="text-[11px] uppercase text-[#2E7D32] font-black tracking-widest mt-1">Years Exp</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#333333]">1M м³</div>
              <div className="text-[11px] uppercase text-[#2E7D32] font-black tracking-widest mt-1">Processed</div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-[#FF9800] text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(255,152,0,0.3)] hover:bg-[#E68900] transition-all uppercase text-sm tracking-[0.2em]"
          >
            Discover Technology
          </motion.button>
        </motion.div>

        <div className="h-[500px] lg:h-[700px] relative">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <PlaceholderModel />
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]} intensity={2} />
              <pointLight position={[-10, -10, -10]} color="#2E7D32" intensity={1} />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
          
          {/* Декоративная подпись рядом с объектом */}
          <div className="absolute bottom-10 right-0 text-[10px] text-gray-300 font-mono uppercase tracking-[0.5em] rotate-90 origin-right">
            Organic Structure Alpha-01
          </div>
        </div>
      </div>
    </section>
  );
};
