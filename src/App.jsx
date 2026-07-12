import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Particle canvas: completely deferred — not critical, hurts mobile TTI
const ParticleCanvas = lazy(() => import('./components/ParticleCanvas'));

// Lazy-load all below-fold sections
const About        = lazy(() => import('./components/About'));
const Skills       = lazy(() => import('./components/Skills'));
const Projects     = lazy(() => import('./components/Projects'));
const Experience   = lazy(() => import('./components/Experience'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact      = lazy(() => import('./components/Contact'));
const Footer       = lazy(() => import('./components/Footer'));

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
    } catch {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Defer particle canvas until browser is idle (after LCP)
  const [showParticles, setShowParticles] = useState(false);
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return; // never show on mobile — saves ~150ms TTI
    const cb = () => setShowParticles(true);
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(cb, { timeout: 2000 });
      return () => cancelIdleCallback(id);
    } else {
      const t = setTimeout(cb, 1500);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <div data-theme={theme}>
      {showParticles && (
        <Suspense fallback={null}>
          <ParticleCanvas theme={theme} />
        </Suspense>
      )}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content" aria-label="Portfolio content">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
