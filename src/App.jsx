import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ArticleGrid from './components/ArticleGrid';
import EditionsSection from './components/EditionsSection';
import Footer from './components/Footer';

function App() {
  const getInitialSection = () => {
    if (typeof window !== 'undefined' && window.location.hash === '#ediciones') {
      return 'ediciones';
    }
    return 'inicio';
  };

  const [activeSection, setActiveSection] = useState(getInitialSection);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#ediciones') {
        setActiveSection('ediciones');
      } else if (window.location.hash === '#inicio' || window.location.hash === '' || window.location.hash === '#') {
        setActiveSection('inicio');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'inicio') {
      window.history.pushState(null, '', '#inicio');
    } else if (sectionId === 'ediciones') {
      window.history.pushState(null, '', '#ediciones');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark font-sans selection:bg-primary-200 selection:text-primary-900 transition-colors">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        {activeSection === 'inicio' && (
          <>
            <HeroSection onGoToEditions={() => handleNavigate('ediciones')} />
            <ArticleGrid />
          </>
        )}
        {activeSection === 'ediciones' && (
          <EditionsSection />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
