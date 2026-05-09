import { useState, useEffect } from 'react';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Resume', 'Contact'];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="navbar"
        style={{
          background: scrolled
            ? theme === 'light' ? 'rgba(240,245,255,0.88)' : 'rgba(6,11,20,0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a href="#" className="nav-logo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          laharis.dev
        </a>

        {/* Desktop Links */}
        <ul className="nav-desktop">
          {NAV_LINKS.map(link => (
            <li key={link}>
              <button onClick={() => scrollTo(link)} className="nav-link">{link}</button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="nav-theme-btn">
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <a href="mailto:laharisrikotipalli07@gmail.com" className="btn-primary nav-cta">
            Let's Connect
          </a>
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="nav-hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            }
          </button>
        </div>
      </nav>

      {/* Mobile Menu — CSS transition, no framer-motion */}
      <div
        className="mobile-menu"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-12px)',
          background: theme === 'light' ? 'rgba(240,245,255,0.97)' : 'rgba(6,11,20,0.97)',
        }}
      >
        {NAV_LINKS.map(link => (
          <button key={link} onClick={() => scrollTo(link)} className="mobile-nav-link">{link}</button>
        ))}
      </div>

      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 68px; display: flex; align-items: center;
          justify-content: space-between; padding: 0 2rem;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .nav-logo {
          display: flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace; font-size: 0.95rem;
          font-weight: 500; color: var(--cyan); text-decoration: none; letter-spacing: -0.01em;
        }
        .nav-desktop { display: flex; gap: 2.2rem; list-style: none; margin: 0; }
        .nav-link {
          background: none; border: none; font-size: 0.875rem; color: var(--text2);
          cursor: pointer; padding: 4px 0; font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.02em; transition: color 0.2s;
        }
        .nav-link:hover { color: var(--cyan); }
        .nav-theme-btn {
          width: 38px; height: 38px; border-radius: 10px; background: var(--bg3);
          border: 1px solid var(--border); cursor: pointer; display: flex;
          align-items: center; justify-content: center; color: var(--text2);
          transition: border-color 0.2s, color 0.2s; flex-shrink: 0;
        }
        .nav-theme-btn:hover { border-color: var(--cyan); color: var(--cyan); }
        .nav-cta { padding: 8px 18px !important; font-size: 0.82rem !important; border-radius: 8px !important; }
        .nav-hamburger {
          background: none; border: none; color: var(--text); cursor: pointer;
          display: none; padding: 4px;
        }
        .mobile-menu {
          position: fixed; top: 68px; left: 0; right: 0; z-index: 99;
          backdrop-filter: blur(20px); border-bottom: 1px solid var(--border);
          padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 1.2rem;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .mobile-nav-link {
          background: none; border: none; font-size: 1.1rem; color: var(--text);
          cursor: pointer; text-align: left; font-family: 'DM Sans', sans-serif;
          padding: 4px 0; border-bottom: 1px solid var(--border); padding-bottom: 1rem;
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
