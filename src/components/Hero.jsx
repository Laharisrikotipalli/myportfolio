import { motion } from 'framer-motion';

const STATS = [
  { num: '7+', label: 'Projects' },
  { num: '3+', label: 'Certs' },
  { num: '8.2', label: 'CGPA' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay },
});

export default function Hero() {
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
      {/* Film grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.018,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat', backgroundSize: '128px 128px',
      }} />

      {/* PARALLAX EFFECT: Floating glows (CSS animated - GPU accelerated) */}
      <div className="parallax-glow glow-1" />
      <div className="parallax-glow glow-2" />
      <div className="parallax-glow glow-3" />
      <div className="parallax-glow glow-4" />

      {/* Main content */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <motion.div {...fadeUp(0.1)} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
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
            }} />
            Cloud Architect &amp; DevOps Engineer
          </div>
        </motion.div>

        {/* Avatar - FIXED: Changed from profile.jpeg to profile.webp */}
        <motion.div {...fadeUp(0.15)} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.8rem' }}>
          <div style={{
            width: 118, height: 118, borderRadius: '50%', padding: 3,
            background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
            boxShadow: '0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(0,212,255,0.1)', flexShrink: 0,
          }}>
            <img
              src="/profile.webp"
              alt="Lahari Sri Kotipalli"
              loading="eager"
              fetchPriority="high"
              width={112}
              height={112}
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.8rem, 7vw, 5.8rem)',
          fontWeight: 800, lineHeight: 0.95, marginBottom: '1.6rem', letterSpacing: '-0.03em',
        }}>
          <span style={{ display: 'block', color: 'var(--text)' }}>Lahari</span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, var(--cyan) 0%, var(--purple) 60%, var(--pink) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Sri Kotipalli</span>
        </motion.h1>

        {/* Bio */}
        <motion.p {...fadeUp(0.25)} style={{
          fontSize: '1.05rem', color: 'var(--text2)',
          maxWidth: 540, margin: '0 auto 2.8rem', lineHeight: 1.8,
        }}>
          Cloud-native architect focused on resilient systems, automated pipelines,
          and the evolution of{' '}
          <span style={{ color: '#00f5ff', fontWeight: 500 }}>DevOps</span> at{' '}
          <span style={{ color: 'var(--purple)', fontWeight: 500 }}>scale</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.2rem' }}>
          <a href="#projects" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            View My Work
          </a>
          <a href="https://drive.google.com/file/d/1ihF8Iqpq8Do8A9nZV3plpBCFWdoPdjJa/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="9" y1="13" x2="15" y2="13"/>
              <line x1="9" y1="17" x2="15" y2="17"/>
            </svg>
            View Resume
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div {...fadeUp(0.35)} style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'flex', gap: 0, borderRadius: 12,
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
                  background: i === 0 ? 'linear-gradient(90deg, #00f5ff, #00f5c8)' : i === 1 ? 'linear-gradient(90deg, #a78bfa, #f472b6)' : 'linear-gradient(90deg, #f472b6, #00f5ff)',
                  opacity: 0.7,
                }} />
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.58rem', color: 'rgba(0,245,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.9rem', fontWeight: 800, color: '#00f5ff', lineHeight: 1, textShadow: '0 0 16px rgba(0,245,255,0.35)' }}>{s.num}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: 'rgba(0,245,255,0.25)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>scroll</span>
          <motion.svg
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="rgba(0,245,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </motion.svg>
        </motion.div>
      </div>

      <style>{`
        /* PARALLAX EFFECT: Floating animated glows */
        .parallax-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          will-change: transform;
          z-index: 0;
        }
        .glow-1 {
          top: 8%;
          left: -12%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0,212,255,0.09) 0%, transparent 70%);
          animation: floatGlow1 20s ease-in-out infinite;
        }
        .glow-2 {
          top: 30%;
          right: -8%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(167,139,250,0.09) 0%, transparent 70%);
          animation: floatGlow2 25s ease-in-out infinite;
        }
        .glow-3 {
          bottom: 15%;
          left: 5%;
          width: 180px;
          height: 180px;
          border: 1px solid rgba(0,212,255,0.08);
          border-radius: 32px;
          transform: rotate(15deg);
          animation: floatBorder 18s ease-in-out infinite;
        }
        .glow-4 {
          top: 20%;
          right: 8%;
          width: 100px;
          height: 100px;
          border: 1px solid rgba(167,139,250,0.1);
          border-radius: 20px;
          transform: rotate(-20deg);
          animation: floatBorder2 22s ease-in-out infinite;
        }
        
        @keyframes floatGlow1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(25px, -20px) scale(1.05); }
        }
        @keyframes floatGlow2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-20px, 15px) scale(1.08); }
        }
        @keyframes floatBorder {
          0%, 100% { transform: rotate(15deg) translate(0px, 0px); }
          50% { transform: rotate(20deg) translate(-10px, -8px); }
        }
        @keyframes floatBorder2 {
          0%, 100% { transform: rotate(-20deg) translate(0px, 0px); }
          50% { transform: rotate(-25deg) translate(12px, 8px); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .parallax-glow { animation: none !important; }
        }
        @media (max-width: 768px) {
          .glow-1, .glow-2 { opacity: 0.4; }
          .glow-3, .glow-4 { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}