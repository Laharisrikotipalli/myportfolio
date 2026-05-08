import { motion } from 'framer-motion';

const CHIPS = ['AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'Node.js', 'Flask', 'Python', 'Redis', 'GitHub Actions'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay },
});

const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1], delay },
});

const slideRight = (delay = 0) => ({
  initial: { opacity: 0, x: 48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1], delay },
});

export default function About() {
  return (
    <section id="about" className="section-pad-alt">
      <div className="container">
        <motion.div {...fadeUp(0)}>
          <div className="section-eyebrow">My Story</div>
          <h2 className="section-title">Who <span className="accent">I Am</span></h2>
          <div className="section-bar" />
        </motion.div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.6fr)', gap: '4rem', alignItems: 'center' }}
          className="about-grid"
        >
          {/* Left – Photo */}
          <motion.div {...slideLeft(0.1)} style={{ position: 'relative' }}>
            <div style={{
              width: '100%', aspectRatio: '4/5', maxHeight: 430,
              borderRadius: 20, position: 'relative', overflow: 'hidden',
              boxShadow: 'var(--shadow-card)', border: '1px solid var(--border)',
            }}>
              <img
                src="/profile.jpeg"
                alt="Lahari Sri Kotipalli — Cloud and DevOps Engineer"
                loading="lazy"
                width="400"
                height="500"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '42%',
                background: 'linear-gradient(to top, rgba(6,11,20,0.92) 0%, transparent 100%)',
              }} />
              <div style={{ position: 'absolute', bottom: 22, left: 0, right: 0, textAlign: 'center', zIndex: 2 }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#fff', marginBottom: 4, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                  Lahari Sri Kotipalli
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--cyan)', letterSpacing: '0.08em' }}>
                  Cloud and DevOps Engineer
                </div>
              </div>
              <div style={{ position: 'absolute', top: 14, left: 14, width: 30, height: 30, borderTop: '2px solid var(--cyan)', borderLeft: '2px solid var(--cyan)', borderRadius: '4px 0 0 0', opacity: 0.7 }} />
              <div style={{ position: 'absolute', top: 14, right: 14, width: 30, height: 30, borderTop: '2px solid var(--purple)', borderRight: '2px solid var(--purple)', borderRadius: '0 4px 0 0', opacity: 0.7 }} />
            </div>
          </motion.div>

          {/* Right – Text */}
          <motion.div {...slideRight(0.15)} style={{ paddingTop: 10 }}>
            <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.85, marginBottom: '1.1rem' }}>
              I am a Computer Science student at <strong style={{ color: 'var(--text)' }}>Aditya College of Engineering &amp; Technology</strong> (B.Tech CSE, 2023–2027, CGPA: <strong style={{ color: 'var(--cyan)' }}>8.2</strong>), specialising in backend systems, distributed architectures, and DevOps pipelines.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.85, marginBottom: '1.1rem' }}>
              My focus lies at the intersection of infrastructure and application development — crafting systems that are <em style={{ color: 'var(--text)' }}>resilient, observable, and built to scale</em>. I design and deploy cloud-native applications using AWS, GCP, Terraform, Docker, and Kubernetes.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.85, marginBottom: '1.8rem' }}>
              Currently deepening expertise in microservices patterns and serverless architectures, while working on production-grade projects that solve real infrastructure challenges.
            </p>

            {/* Staggered chip animation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '2rem' }}
            >
              {CHIPS.map(c => (
                <motion.span
                  key={c}
                  className="chip"
                  variants={{ hidden: { opacity: 0, scale: 0.8, y: 10 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } } }}
                >
                  {c}
                </motion.span>
              ))}
            </motion.div>

            <a href="https://github.com/Laharisrikotipalli" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '0.88rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>
    </section>
  );
}
