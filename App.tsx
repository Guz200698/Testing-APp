import React, { useState, useRef } from 'react';
import { TabType } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { TarotSection } from './components/TarotSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('cursos');
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    // Smooth scroll to content if not already there
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-gray-800 bg-amber-50/50 flex flex-col">
      <Navbar onNavigate={handleTabChange} />
      
      <main className="flex-grow">
        <Hero activeTab={activeTab} onTabChange={handleTabChange} />
        
        <section 
          id="contenido-dinamico" 
          ref={contentRef}
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[600px] transition-all duration-500"
        >
          {activeTab === 'cursos' ? (
            <div className="animate-fade-in">
              <CoursesSection />
            </div>
          ) : (
            <div className="animate-fade-in">
              <TarotSection />
            </div>
          )}
        </section>

        <Newsletter />
      </main>

      <Footer onNavigate={handleTabChange} />
    </div>
  );
};

export default App;