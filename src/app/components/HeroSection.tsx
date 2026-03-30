import { motion } from 'motion/react';
import { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/desert_regeneration.glb');
  return <primitive object={scene} scale={2.5} position={[0, -1, 0]} />;
}

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Абстрактные геометрические формы на фоне */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2E7D32] clip-path-polygon" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[#2E7D32] mb-4">Everything is Reborn</h1>
          <p className="text-2xl text-[#666666] mb-8 font-light">
            Converting sewage sludge into fertile soil
          </p>
          
          <div className="flex flex-wrap gap-8 mb-10 py-6 border-y border-gray-100">
            <div>
              <div className="text-3xl font-bold text-[#2E7D32]">15+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Years Exp</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#2E7D32]">100+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#2E7D32]">1M м³</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Processed</div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#E68900' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#FF9800] text-white font-bold rounded-lg shadow-lg transition-all uppercase tracking-wider"
          >
            Discover Our Technology
          </motion.button>
        </motion.div>

        <div className="h-[500px] lg:h-[600px] cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Model />
              </Float>
              <Environment preset="sunny" />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
            </Suspense>
            <OrbitControls enableZoom={false} makeDefault />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
