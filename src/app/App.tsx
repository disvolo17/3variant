import { HeroSection } from './components/HeroSection';
import { TechnologySection } from './components/TechnologySection';
import { BahrainSection } from './components/BahrainSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ImplementationSection } from './components/ImplementationSection';
import { ContactSection } from './components/ContactSection';
import { Navigation } from './components/Navigation';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TechnologySection />
      <BahrainSection />
      <ProblemSolutionSection />
      <BenefitsSection />
      <ImplementationSection />
      <ContactSection />
      <BackToTop />
    </div>
  );
}