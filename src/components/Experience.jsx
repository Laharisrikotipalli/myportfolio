import { useRef, useEffect } from 'react';

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed');
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          delay
            ? setTimeout(() => el.classList.add('revealed'), delay * 1000)
            : el.classList.add('revealed');
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

const INTERNSHIP = {
  role: 'AWS Cloud Computing & DevOps Virtual Intern',
  company: 'Andhra Pradesh State Skill Development Corporation (APSSDC)',
  period: 'May 2025 – July 2025',
  type: 'Virtual Internship',
  certLink: 'https://drive.google.com/file/d/1daZzTIgm0kFj8eZq5-oiF781F955kfsf/view?usp=sharing',
  bullets: [
    {
      icon: '☁️',
      text: 'Completed a focused virtual internship on AWS Cloud Computing and DevOps practices, gaining end-to-end exposure to cloud infrastructure workflows.',
    },
    {
      icon: '⚙️',
      text: 'Worked with core AWS services — EC2, S3, IAM, and VPC — for cloud infrastructure provisioning and access management.',
    },
    {
      icon: '🐳',
      text: 'Gained hands-on experience with Linux, Shell Scripting, Docker, Git, and CI/CD pipeline concepts.',
    },
    {
      icon: '🚀',
      text: 'Built and deployed a Weather Forecast Application using AWS cloud services, applying deployment workflows and cloud security fundamentals.',
    },
  ],
  tags: ['AWS EC2', 'S3', 'IAM', 'VPC', 'Docker', 'CI/CD', 'Linux', 'Shell Scripting', 'Git'],
};

const EDUCATION = {
  degree: 'B.Tech in Computer Science & Engineering',
  college: 'Aditya College of Engineering & Technology',
  period: '2023 – 2027',
  cgpa: '8.2',
  location: 'Kakinada, Andhra Pradesh',
  highlights: [
    'Specialising in backend systems, distributed architectures, and DevOps pipelines',
    'Core coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, OOP',
    'Actively building production-grade cloud-native projects beyond the curriculum',
  ],
};

export default function Experience() {
  const headerRef   = useReveal(0);
  const internRef   = useReveal(0.1);
  const eduRef      = useReveal(0.15);

  return (
    <section id="experience" className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Decorative orbs */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '8%', right: '-10%', width: 380, height: 380,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '12%', left: '-8%', width: 320, height: 320,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div ref={headerRef} className="reveal">
          <div className="section-eyebrow">Background</div>
          <h2 className="section-title">Experience &amp; <span className="accent">Education</span></h2>
          <div className="section-bar" />
        </div>

        {/* ── Internship Card ── */}
        <div ref={internRef} className="reveal" style={{ marginBottom: '2rem' }}>
          <div style={{
            borderRadius: 18,
            background: 'var(--card)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-card)',
            overflow: 'hidden',
            position: 'relative',
          }}>
            {/* Top accent */}
            <div aria-hidden="true" style={{ height: 3, background: 'linear-gradient(90deg, var(--cyan), var(--purple))' }} />

            <div style={{ padding: '2rem' }}>

              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  {/* Icon */}
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    background: 'var(--bg3)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}>
                    ☁️
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Syne', sans-serif", fontWeight: 700,
                      fontSize: '1.05rem', color: 'var(--text)', margin: 0, marginBottom: 4,
                    }}>
                      {INTERNSHIP.role}
                    </h3>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text2)', marginBottom: 6 }}>
                      {INTERNSHIP.company}
                    </div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.67rem',
                        color: 'var(--cyan)', letterSpacing: '0.06em',
                        padding: '3px 9px', borderRadius: 6,
                        background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
                      }}>
                        {INTERNSHIP.period}
                      </span>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.67rem',
                        color: 'var(--text3)', letterSpacing: '0.06em',
                        padding: '3px 9px', borderRadius: 6,
                        background: 'var(--bg3)', border: '1px solid var(--border)',
                      }}>
                        {INTERNSHIP.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Certificate link */}
                <a
                  href={INTERNSHIP.certLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '7px 14px', borderRadius: 8,
                    background: 'rgba(0,212,255,0.07)', border: '1px solid rgba(0,212,255,0.25)',
                    color: 'var(--cyan)', fontSize: '0.75rem',
                    textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace",
                    transition: 'all 0.2s', flexShrink: 0,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.14)'; e.currentTarget.style.borderColor = 'var(--cyan)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.25)'; }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <circle cx="12" cy="8" r="6"/><path d="M8 14l-4 8 8-3 8 3-4-8"/>
                  </svg>
                  View Certificate
                </a>
              </div>

              {/* Bullet points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {INTERNSHIP.bullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: 1 }}>{b.icon}</span>
                    <div style={{
                      fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7,
                      paddingLeft: 4, borderLeft: '2px solid rgba(0,212,255,0.18)',
                    }}>
                      {b.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {INTERNSHIP.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ── Education Card ── */}
        <div ref={eduRef} className="reveal">
          <div style={{
            borderRadius: 18,
            background: 'var(--card)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-card)',
            overflow: 'hidden',
            position: 'relative',
          }}>
            {/* Top accent */}
            <div aria-hidden="true" style={{ height: 3, background: 'linear-gradient(90deg, var(--purple), var(--pink))' }} />

            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>

                {/* Left: icon + degree */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flex: 1, minWidth: 260 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    background: 'var(--bg3)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}>
                    🎓
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Syne', sans-serif", fontWeight: 700,
                      fontSize: '1.05rem', color: 'var(--text)', margin: 0, marginBottom: 4,
                    }}>
                      {EDUCATION.degree}
                    </h3>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text2)', marginBottom: 8 }}>
                      {EDUCATION.college}
                    </div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.67rem',
                        color: 'var(--purple)', letterSpacing: '0.06em',
                        padding: '3px 9px', borderRadius: 6,
                        background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.25)',
                      }}>
                        {EDUCATION.period}
                      </span>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.67rem',
                        color: 'var(--cyan2)', letterSpacing: '0.06em',
                        padding: '3px 9px', borderRadius: 6,
                        background: 'rgba(0,245,200,0.08)', border: '1px solid rgba(0,245,200,0.25)',
                      }}>
                        CGPA: {EDUCATION.cgpa}
                      </span>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.67rem',
                        color: 'var(--text3)', letterSpacing: '0.06em',
                        padding: '3px 9px', borderRadius: 6,
                        background: 'var(--bg3)', border: '1px solid var(--border)',
                      }}>
                        {EDUCATION.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {EDUCATION.highlights.map((h, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <div style={{
                            width: 6, height: 6, borderRadius: '50%',
                            background: 'var(--purple)', flexShrink: 0, marginTop: 6,
                          }} />
                          <span style={{ fontSize: '0.84rem', color: 'var(--text2)', lineHeight: 1.65 }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: CGPA stat */}
                <div style={{
                  padding: '1.2rem 1.6rem', borderRadius: 14,
                  background: 'var(--bg3)', border: '1px solid var(--border)',
                  textAlign: 'center', flexShrink: 0,
                  alignSelf: 'flex-start',
                }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.58rem', color: 'rgba(0,245,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>CGPA</div>
                  <div style={{
                    fontFamily: "'Syne', sans-serif", fontSize: '2.4rem', fontWeight: 800,
                    color: '#00f5ff', lineHeight: 1,
                    textShadow: '0 0 16px rgba(0,245,255,0.35)',
                  }}>
                    {EDUCATION.cgpa}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.58rem', color: 'var(--text3)', marginTop: 6, letterSpacing: '0.08em' }}>
                    / 10.0
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}