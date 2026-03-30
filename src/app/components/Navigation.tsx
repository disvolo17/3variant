import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#2E7D32]">GREEN UNICORN</div>
        
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="#tech" className="hover:text-[#2E7D32] transition-colors">Technology</a>
          <a href="#bahrain" className="hover:text-[#2E7D32] transition-colors">Results</a>
          <a href="#benefits" className="hover:text-[#2E7D32] transition-colors">ESG</a>
        </div>

        <button className="px-6 py-2 border-2 border-[#2E7D32] text-[#2E7D32] font-bold rounded-lg hover:bg-[#2E7D32] hover:text-white transition-all">
          Contact Us
        </button>
      </div>
    </nav>
  );
};
