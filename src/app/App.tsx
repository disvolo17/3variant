import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { BahrainSection } from './components/BahrainSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ImplementationSection } from './components/ImplementationSection';
import { ContactSection } from './components/ContactSection';
import { BackToTop } from './components/BackToTop';

/**
 * Основной компонент приложения Green Unicorn.
 * Включает в себя все секции согласно обновленной структуре ESG-дизайна.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white font-body selection:bg-[#2E7D32] selection:text-white">
      {/* 1. HEADER (Зафиксированный, меняет фон при скролле) */}
      <Navigation />

      <main>
        {/* 2. HERO СЕКЦИЯ (Full-screen с 3D моделью) */}
        <HeroSection />

        {/* 3. ПРОБЛЕМА (Инфографика с цифрами на сером фоне) */}
        <ProblemSection />

        {/* 4. НАШЕ РЕШЕНИЕ (Интерактивный Grid 2x2) */}
        <SolutionSection />

        {/* 5. РЕЗУЛЬТАТЫ В BAHRAIN (Timeline и показатели проекта) */}
        <BahrainSection />

        {/* 6. ПРЕИМУЩЕСТВА (Сетка 3x2: почему выбирают нас) */}
        <BenefitsSection />

        {/* 7. ВНЕДРЕНИЕ (Вертикальный процесс установки) */}
        <ImplementationSection />

        {/* 8. КОНТАКТЫ & FOOTER */}
        <ContactSection />
      </main>

      {/* Вспомогательные элементы */}
      <BackToTop />

      {/* Footer Legal Info (обычно внутри ContactSection или отдельным блоком) */}
      <footer className="py-8 bg-[#F5F5F5] border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-[#666666]">
            © {new Date().getFullYear()} Green Unicorn Technology. All rights reserved. 
            <br className="md:hidden" /> 
            <span className="hidden md:inline mx-2">|</span>
            Kingdom of Bahrain
          </p>
        </div>
      </footer>
    </div>
  );
}
