import { motion } from 'motion/react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float } from '@react-three/drei';

function Model() {
  // Путь к твоей модели, которую ты сделал в Meshy
  const { scene } = useGLTF('./models/desert_regeneration.glb');
  return <primitive object={scene} scale={2.5} position={[0, -1, 0]} />;
}

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Фоновый декор */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2E7D32]/5 skew-x-12 transform origin-top" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[48px] text-[#2E7D32] leading-tight mb-4">
            Everything is Reborn
          </h1>
          <p className="text-[24px] text-[#666666] mb-8 font-light">
            Converting sewage sludge into fertile soil
          </p>
          
          <div className="flex gap-12 mb-10 py-6 border-y border-gray-100">
            <div>
              <div className="text-3xl font-bold text-[#2E7D32]">15+</div>
              <div className="text-[12px] uppercase text-gray-400 font-bold">Years Exp</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#2E7D32]">1M м³</div>
              <div className="text-[12px] uppercase text-gray-400 font-bold">Processed</div>
            </div>
          </div>

          <button className="px-10 py-4 bg-[#FF9800] text-white font-bold rounded-lg shadow-lg hover:bg-[#E68900] transition-all uppercase text-sm tracking-widest">
            Discover Our Technology
          </button>
        </motion.div>

        <div className="h-[500px] lg:h-[600px] relative">
          <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Model />
              </Float>
              <Environment preset="sunny" />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
