import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
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

      {/* Parallax glows */}
      <motion.div style={{ position: 'absolute', top: '8%', left: '-12%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.09) 0%, transparent 70%)', pointerEvents: 'none', y: parallaxY1, zIndex: 0 }} />
      <motion.div style={{ position: 'absolute', top: '30%', right: '-8%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.09) 0%, transparent 70%)', pointerEvents: 'none', y: parallaxY2, zIndex: 0 }} />
      <motion.div style={{ position: 'absolute', bottom: '15%', left: '5%', width: 180, height: 180, border: '1px solid rgba(0,212,255,0.08)', borderRadius: 32, transform: 'rotate(15deg)', pointerEvents: 'none', y: parallaxY3, zIndex: 0 }} />
      <motion.div style={{ position: 'absolute', top: '20%', right: '8%', width: 100, height: 100, border: '1px solid rgba(167,139,250,0.1)', borderRadius: 20, transform: 'rotate(-20deg)', pointerEvents: 'none', y: parallaxY2, zIndex: 0 }} />

      {/* Main content */}
      <motion.div className="container" style={{ y: contentY, opacity, position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <motion.div {...fadeUp(0.1)} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 20px', borderRadius: 100,
            border: '1px solid rgba(0,245,200,0.3)', background: 'rgba(0,245,200,0.06)',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.76rem',
            color: 'var(--cyan2)', letterSpacing: '0.07em',
          }}>
            <motion.span
              animate={{ boxShadow: ['0 0 4px #00f5c8, 0 0 8px #00f5c8', '0 0 8px #00f5c8, 0 0 20px #00f5c8, 0 0 30px rgba(0,245,200,0.4)', '0 0 4px #00f5c8, 0 0 8px #00f5c8'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: 8, height: 8, borderRadius: '50%', background: '#00f5c8', flexShrink: 0, display: 'inline-block' }}
            />
            Cloud Architect &amp; DevOps Engineer
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div {...fadeUp(0.15)} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.8rem' }}>
          <div style={{
            width: 118, height: 118, borderRadius: '50%', padding: 3,
            background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
            boxShadow: '0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(0,212,255,0.1)', flexShrink: 0,
          }}>
            <img src="/profile.jpeg" alt="Lahari Sri Kotipalli" loading="eager"
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
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
            display: 'flex', gap: 0,
            borderRadius: 12,
            background: 'rgba(6,11,20,0.7)',
            border: '1px solid rgba(0,245,255,0.15)',
            backdropFilter: 'blur(12px)',
            overflow: 'hidden',
            boxShadow: '0 0 20px rgba(0,245,255,0.05)',
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                textAlign: 'center',
                padding: '0.8rem 2.2rem',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(0,245,255,0.1)' : 'none',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: i === 0
                    ? 'linear-gradient(90deg, #00f5ff, #00f5c8)'
                    : i === 1
                    ? 'linear-gradient(90deg, #a78bfa, #f472b6)'
                    : 'linear-gradient(90deg, #f472b6, #00f5ff)',
                  opacity: 0.7,
                }} />
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.58rem', color: 'rgba(0,245,255,0.4)',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  marginBottom: 6,
                }}>{s.label}</div>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontSize: '1.9rem',
                  fontWeight: 800, color: '#00f5ff', lineHeight: 1,
                  textShadow: '0 0 16px rgba(0,245,255,0.35)',
                }}>{s.num}</div>
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
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.6rem',
            color: 'rgba(0,245,255,0.25)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}>
            scroll
          </span>
          <motion.svg
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="rgba(0,245,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </motion.svg>
        </motion.div>

      </motion.div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(0.85); } }
      `}</style>
    </section>
  );
}