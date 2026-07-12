import { useEffect, useState, useRef } from 'react';

const STATS = [
  { num: '7+', label: 'Projects' },
  { num: '3+', label: 'Certs' },
  { num: '8.2', label: 'CGPA' },
];

// Scroll-based parallax — GPU only, disabled on mobile to boost TTI
function useScrollParallax(speed = 0.12) {
  const ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Skip on mobile and reduced-motion — major perf win
    if (window.innerWidth <= 768) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const update = () => {
      el.style.transform = `translateY(${window.scrollY * speed}px)`;
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        update();
        rafRef.current = null;
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  return ref;
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const layer1Ref = useScrollParallax(-0.08);
  const layer2Ref = useScrollParallax(-0.14);
  const layer3Ref = useScrollParallax(-0.22);
  const layer4Ref = useScrollParallax(-0.30);
  const badgeRef  = useScrollParallax(-0.05);
  const bioRef    = useScrollParallax(-0.10);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center',
        paddingTop: 'calc(68px + 3rem)', paddingBottom: '4rem',
        position: 'relative', zIndex: 1, overflow: 'hidden',
      }}
    >
      {/* Depth layers — hidden on mobile via CSS to avoid paint cost */}
      <div ref={layer1Ref} className="parallax-layer" style={{
        top: '8%', left: '-12%', width: 520, height: 520,
        background: 'radial-gradient(circle, rgba(0,212,255,0.09) 0%, transparent 70%)',
        willChange: 'transform',
      }} />
      <div ref={layer2Ref} className="parallax-layer" style={{
        top: '30%', right: '-8%', width: 420, height: 420,
        background: 'radial-gradient(circle, rgba(167,139,250,0.09) 0%, transparent 70%)',
        willChange: 'transform',
      }} />
      <div ref={layer3Ref} className="parallax-layer parallax-border" style={{
        bottom: '15%', left: '5%', width: 180, height: 180,
        border: '1px solid rgba(0,212,255,0.1)',
        borderRadius: 32, rotate: '15deg',
        willChange: 'transform',
      }} />
      <div ref={layer4Ref} className="parallax-layer parallax-border" style={{
        top: '20%', right: '8%', width: 100, height: 100,
        border: '1px solid rgba(167,139,250,0.12)',
        borderRadius: 20, rotate: '-20deg',
        willChange: 'transform',
      }} />
      <div ref={useScrollParallax(-0.06)} className="parallax-layer" style={{
        bottom: '10%', right: '5%', width: 280, height: 280,
        background: 'radial-gradient(circle, rgba(244,114,182,0.07) 0%, transparent 70%)',
        willChange: 'transform',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <div
          ref={badgeRef}
          className={`hero-item ${visible ? 'hero-visible' : ''}`}
          style={{ transitionDelay: '0.05s', display: 'flex', justifyContent: 'center', marginBottom: '2rem', willChange: 'transform' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 20px', borderRadius: 100,
            border: '1px solid rgba(0,245,200,0.3)', background: 'rgba(0,245,200,0.06)',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.76rem',
            color: 'var(--cyan2)', letterSpacing: '0.07em',
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%', background: '#00f5c8',
              flexShrink: 0, display: 'inline-block',
              animation: 'pulseDot 2s ease-in-out infinite',
            }} />
            Cloud Architect &amp; DevOps Engineer
          </div>
        </div>

        {/* Avatar — explicit dimensions prevent CLS */}
        <div className={`hero-item ${visible ? 'hero-visible' : ''}`}
          style={{ transitionDelay: '0.1s', display: 'flex', justifyContent: 'center', marginBottom: '1.8rem' }}>
          <div style={{
            width: 124, height: 124,
            flexShrink: 0,
            borderRadius: '50%', padding: 3,
            background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
            boxShadow: '0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(0,212,255,0.1)',
          }}>
            <img
              src="/profile.webp"
              alt="Lahari Sri Kotipalli"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              width={118}
              height={118}
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        {/* Name */}
        <h1 className={`hero-item ${visible ? 'hero-visible' : ''}`} style={{
          transitionDelay: '0.15s',
          fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.8rem, 7vw, 5.8rem)',
          fontWeight: 800, lineHeight: 0.95, marginBottom: '1.6rem', letterSpacing: '-0.03em',
        }}>
          <span style={{ display: 'block', color: 'var(--text)' }}>Lahari</span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, var(--cyan) 0%, var(--purple) 60%, var(--pink) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Sri Kotipalli</span>
        </h1>

        {/* Bio */}
        <p
          ref={bioRef}
          className={`hero-item ${visible ? 'hero-visible' : ''}`}
          style={{
            transitionDelay: '0.2s', willChange: 'transform',
            fontSize: '1.05rem', color: 'var(--text2)',
            maxWidth: 540, margin: '0 auto 2.8rem', lineHeight: 1.8,
          }}
        >
          Cloud-native architect focused on resilient systems, automated pipelines,
          and the evolution of{' '}
          <span style={{ color: '#00f5ff', fontWeight: 500 }}>DevOps</span> at{' '}
          <span style={{ color: 'var(--purple)', fontWeight: 500 }}>scale</span>.
        </p>

        {/* CTA Buttons */}
        <div className={`hero-item ${visible ? 'hero-visible' : ''}`}
          style={{ transitionDelay: '0.25s', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.2rem' }}>
          <a href="#projects" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            View My Work
          </a>
          <a href="https://drive.google.com/file/d/1ihF8Iqpq8Do8A9nZV3plpBCFWdoPdjJa/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="9" y1="13" x2="15" y2="13"/>
              <line x1="9" y1="17" x2="15" y2="17"/>
            </svg>
            View Resume
          </a>
        </div>

        {/* Stats Bar */}
        <div className={`hero-item ${visible ? 'hero-visible' : ''}`} style={{ transitionDelay: '0.3s', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'flex', borderRadius: 12,
            background: 'rgba(6,11,20,0.7)',
            border: '1px solid rgba(0,245,255,0.15)',
            backdropFilter: 'blur(12px)', overflow: 'hidden',
            boxShadow: '0 0 20px rgba(0,245,255,0.05)',
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                textAlign: 'center', padding: '0.8rem 2.2rem',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(0,245,255,0.1)' : 'none',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: i === 0
                    ? 'linear-gradient(90deg,#00f5ff,#00f5c8)'
                    : i === 1
                    ? 'linear-gradient(90deg,#a78bfa,#f472b6)'
                    : 'linear-gradient(90deg,#f472b6,#00f5ff)',
                  opacity: 0.7,
                }} />
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.58rem', color: 'rgba(0,245,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.9rem', fontWeight: 800, color: '#00f5ff', lineHeight: 1, textShadow: '0 0 16px rgba(0,245,255,0.35)' }}>{s.num}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: visible ? 1 : 0, transition: 'opacity 1s ease 1.2s' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: 'rgba(0,245,255,0.25)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>scroll</span>
          <svg className="scroll-bounce" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,245,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      <style>{`
        .hero-item { opacity: 0; transform: translateY(22px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .hero-visible { opacity: 1; transform: translateY(0); }

        .parallax-layer {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          will-change: transform;
          z-index: 0;
          animation: floatAmbient 20s ease-in-out infinite;
        }
        .parallax-border { border-radius: 20px; background: transparent; }

        @keyframes floatAmbient {
          0%,100% { margin-top: 0px; }
          50%      { margin-top: -14px; }
        }

        .parallax-layer:nth-child(1) { animation-duration: 20s; animation-delay: 0s; }
        .parallax-layer:nth-child(2) { animation-duration: 25s; animation-delay: -8s; }
        .parallax-layer:nth-child(3) { animation-duration: 18s; animation-delay: -4s; }
        .parallax-layer:nth-child(4) { animation-duration: 22s; animation-delay: -12s; }
        .parallax-layer:nth-child(5) { animation-duration: 28s; animation-delay: -6s; }

        @keyframes pulseDot {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.4); }
        }
        @keyframes scrollBounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(7px); }
        }
        .scroll-bounce { animation: scrollBounce 1.5s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .parallax-layer { animation: none !important; }
          .hero-item { transition: none !important; }
          .scroll-bounce { animation: none !important; }
        }

        /* On mobile: hide glow layers entirely, save paint + composite budget */
        @media (max-width: 768px) {
          .parallax-layer { display: none !important; }
        }
      `}</style>
    </section>
  );
}
