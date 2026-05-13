import { useRef, useEffect } from 'react';

/* ── Reveal hook — same pattern as About.jsx / Contact.jsx ── */
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
          if (delay) {
            setTimeout(() => el.classList.add('revealed'), delay * 1000);
          } else {
            el.classList.add('revealed');
          }
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

/* ── Cert card reveal with scale — CSS only ── */
function useCertReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('cert-revealed');
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('cert-revealed'), delay * 1000);
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

/* ── Brand icons ── */
const GoogleCloudIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gcpGrad" x1="0" y1="7" x2="21" y2="18" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4285F4"/><stop offset="35%" stopColor="#EA4335"/>
        <stop offset="70%" stopColor="#FBBC05"/><stop offset="100%" stopColor="#34A853"/>
      </linearGradient>
    </defs>
    <path d="M18 10.5c-.5-2.5-2.7-4.5-5.3-4.5C11 6 9.5 6.7 8.4 7.7 7.6 7.3 6.8 7 6 7c-2.2 0-4 1.8-4 4 0 .2 0 .4.1.5C.8 12 0 13.1 0 14.4 0 16.4 1.6 18 3.6 18H18c1.7 0 3-1.3 3-3 0-1.5-1.1-2.8-2.5-3" fill="url(#gcpGrad)" transform="translate(0.5 0)"/>
  </svg>
);

const IBMIcon = () => (
  <svg viewBox="0 0 48 20" width="36" height="15" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="16" fontSize="18" fontWeight="900" fill="#1F70C1" fontFamily="Arial Black, Arial" letterSpacing="-1">IBM</text>
    <rect x="2" y="4" width="44" height="2.5" fill="white" opacity="0.5"/>
    <rect x="2" y="9" width="44" height="2.5" fill="white" opacity="0.5"/>
    <rect x="2" y="14" width="44" height="2.5" fill="white" opacity="0.5"/>
  </svg>
);

const OracleIcon = () => (
  <svg viewBox="0 0 60 20" width="44" height="14" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="15" fontSize="14" fontWeight="900" fill="#F80000" fontFamily="Arial Black, Arial" letterSpacing="-0.5">ORACLE</text>
  </svg>
);

const CiscoIcon = () => (
  <svg viewBox="0 0 60 28" width="46" height="18" xmlns="http://www.w3.org/2000/svg">
    <rect x="26" y="2" width="8" height="14" rx="4" fill="#00BCEB"/>
    <rect x="18" y="5" width="6" height="11" rx="3" fill="#00BCEB"/>
    <rect x="36" y="5" width="6" height="11" rx="3" fill="#00BCEB"/>
    <rect x="10" y="9" width="6" height="7" rx="3" fill="#00BCEB"/>
    <rect x="44" y="9" width="6" height="7" rx="3" fill="#00BCEB"/>
    <rect x="3" y="12" width="5" height="4" rx="2" fill="#00BCEB"/>
    <rect x="52" y="12" width="5" height="4" rx="2" fill="#00BCEB"/>
    <text x="30" y="27" fontSize="7" fontWeight="700" fill="#00BCEB" fontFamily="Arial" textAnchor="middle" letterSpacing="1.5">CISCO</text>
  </svg>
);

const CERTS = [
  {
    icon: <GoogleCloudIcon />,
    name: 'Google Cloud Generative AI Leader Track',
    issuer: 'Google Cloud',
    color: '#4285F4',
    link: 'https://drive.google.com/file/d/1Z7odltl3sI5cjSVsP0RCzDBBWPf-A5Gc/view?usp=sharing',
  },
  {
    icon: <IBMIcon />,
    name: 'Generative AI Professional Certificate',
    issuer: 'IBM',
    color: '#1F70C1',
    link: 'https://drive.google.com/file/d/1D5Ooq3p_9naty5a6b3xJXHAyU4I17i3w/view?usp=sharing',
  },
  {
    icon: <OracleIcon />,
    name: 'Oracle Cloud Infrastructure Associate',
    issuer: 'Oracle',
    color: '#F80000',
    link: 'https://drive.google.com/file/d/12bEzfFwLcKT0hxk7q8F_ijRMYIjmpXsv/view?usp=sharing',
  },
  {
    icon: <CiscoIcon />,
    name: 'C Programming Certified',
    issuer: 'CISCO',
    color: '#049FD9',
    link: 'https://drive.google.com/file/d/1ejDi2seJlVSg9p0OXa4XGt69JqmAsnzJ/view?usp=sharing',
  },
];

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'Amaravati Quantum Valley Hackathon 2025 — Finalist',
    desc: "Qualified as a Finalist Team representing innovative cloud and quantum computing solutions at one of Andhra Pradesh's premier technology events.",
    link: 'https://www.linkedin.com/posts/shyam-mantri_hackathon-quantumcomputing-quantummechanics-ugcPost-7371923044748943361-p0x_?utm_source=share&utm_medium=member_android&rcm=ACoAAFL9BpIBfZH-aeP-v4oe6BD2pqZlhR6RGkI',
  },
];

const SKILLS_SUMMARY = [
  { label: 'Languages', value: 'Python · C++' },
  { label: 'Cloud & DevOps', value: 'AWS · GCP · Docker · Terraform · Kubernetes' },
  { label: 'Backend', value: 'Microservices · REST APIs · CI/CD · Distributed Systems' },
  { label: 'Databases', value: 'MySQL · MongoDB · Redis · PostgreSQL · DynamoDB' },
  { label: 'Tools', value: 'Git · GitHub · VS Code · Prometheus · LocalStack' },
];

function CertCard({ cert, index }) {
  const ref = useCertReveal(0.08 * index);
  return (
    <a
      ref={ref}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-card"
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        className="cert-inner"
        style={{ '--cert-color': cert.color }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = cert.color;
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = `0 8px 24px ${cert.color}28`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Logo + external link icon */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
          <div style={{
            width: 44, height: 44, borderRadius: 10,
            background: 'white', border: `1px solid ${cert.color}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, padding: 6, overflow: 'hidden',
          }}>
            {cert.icon}
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="var(--text3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ opacity: 0.5 }}>
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15,3 21,3 21,9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </div>

        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.35, marginBottom: '0.5rem' }}>
          {cert.name}
        </div>

        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem',
          color: cert.color, letterSpacing: '0.04em',
          padding: '2px 7px', borderRadius: 4,
          background: `${cert.color}14`,
          border: `1px solid ${cert.color}30`,
          alignSelf: 'flex-start', display: 'inline-block',
        }}>
          {cert.issuer}
        </div>
      </div>
    </a>
  );
}

export default function Resume() {
  const headerRef  = useReveal(0);
  const leftRef    = useReveal(0.1);
  const certsRef   = useReveal(0.15);
  const achieveRef = useReveal(0.2);

  return (
    <section id="resume" className="section-pad">
      <div className="container">

        {/* Section header */}
        <div ref={headerRef} className="reveal">
          <div className="section-eyebrow">Documents</div>
          <h2 className="section-title">My <span className="accent">Resume</span></h2>
          <div className="section-bar" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.2rem', alignItems: 'start' }} className="resume-grid">

          {/* ── LEFT: Resume Card ── */}
          <div ref={leftRef} className="reveal">
            <div style={{
              padding: '2rem', borderRadius: 16,
              background: 'var(--card)', border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-card)', position: 'relative', overflow: 'hidden',
            }}>
              {/* Top accent bar */}
              <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--cyan), var(--purple))' }} />
              {/* Corner accents */}
              <div aria-hidden="true" style={{ position: 'absolute', top: 14, left: 14, width: 16, height: 16, borderTop: '1.5px solid rgba(0,245,255,0.35)', borderLeft: '1.5px solid rgba(0,245,255,0.35)' }} />
              <div aria-hidden="true" style={{ position: 'absolute', bottom: 14, right: 14, width: 16, height: 16, borderBottom: '1.5px solid rgba(0,245,255,0.35)', borderRight: '1.5px solid rgba(0,245,255,0.35)' }} />

              {/* Name */}
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.3rem', color: 'var(--text)' }}>
                Lahari Sri Kotipalli
              </div>

              {/* Role badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                marginBottom: '1.2rem',
                padding: '4px 10px', borderRadius: 6,
                background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 6px var(--cyan)', animation: 'pulseDot 2s ease-in-out infinite' }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'var(--cyan)', letterSpacing: '0.06em' }}>
                  Cloud and DevOps Engineer
                </span>
              </div>

              {/* Bio */}
              <div style={{ fontSize: '0.84rem', color: 'var(--text2)', marginBottom: '1.6rem', lineHeight: 1.7 }}>
                Cloud and DevOps Engineer specialising in scalable cloud-native systems, AWS/GCP services, Docker, Terraform, Kubernetes, and automated CI/CD pipelines. B.Tech CSE 2023–2027.
              </div>

              {/* Skills summary */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.6rem' }}>
                {SKILLS_SUMMARY.map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{
                      color: 'var(--cyan2)', fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.68rem', minWidth: 95, paddingTop: 2, flexShrink: 0,
                      letterSpacing: '0.04em',
                    }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.6 }}>{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div style={{
                padding: '0.9rem 1rem', borderRadius: 10,
                background: 'var(--bg3)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: 10,
                marginBottom: '1.4rem',
              }}>
                <span style={{ fontSize: '1.4rem' }}>🎓</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text)', marginBottom: 2 }}>B.Tech CSE · 2023–2027</div>
                  <div style={{ fontSize: '0.77rem', color: 'var(--text2)' }}>Aditya College of Engineering &amp; Technology</div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 3, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'var(--cyan)' }}>CGPA: 8.2</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'var(--text3)' }}>Kakinada, AP</span>
                  </div>
                </div>
              </div>

              {/* View Resume button */}
              <a
                href="https://drive.google.com/file/d/1ihF8Iqpq8Do8A9nZV3plpBCFWdoPdjJa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  padding: '8px 18px', borderRadius: 9,
                  background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                  color: '#0a0a14', fontWeight: 700,
                  fontSize: '0.83rem', textDecoration: 'none',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.04em',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                View Resume
              </a>
            </div>
          </div>

          {/* ── RIGHT: Certifications + Achievements ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>

            {/* Certifications */}
            <div ref={certsRef} className="reveal">
              <div style={{
                padding: '1.8rem', borderRadius: 16,
                background: 'var(--card)', border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-card)', position: 'relative', overflow: 'hidden',
              }}>
                <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--purple), var(--cyan))' }} />

                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem', marginBottom: '1.3rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="8" r="6"/><path d="M8 14l-4 8 8-3 8 3-4-8"/>
                  </svg>
                  Certifications
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }} className="cert-grid">
                  {CERTS.map((cert, i) => (
                    <CertCard key={cert.name} cert={cert} index={i} />
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div ref={achieveRef} className="reveal">
              <div style={{ padding: '1.6rem', borderRadius: 16, background: 'var(--card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem', marginBottom: '1.1rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan2)" strokeWidth="2" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Achievements
                </div>

                {ACHIEVEMENTS.map(a => (
                  <div key={a.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ fontSize: '1.4rem', flexShrink: 0, marginTop: 2 }}>{a.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)', marginBottom: 5, lineHeight: 1.4 }}>{a.title}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: a.link ? 8 : 0 }}>{a.desc}</div>
                      {a.link && (
                        <a
                          href={a.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            padding: '5px 12px', borderRadius: 8,
                            background: 'rgba(0,119,181,0.08)',
                            border: '1px solid rgba(0,119,181,0.3)',
                            color: '#0077B5', fontSize: '0.73rem',
                            textDecoration: 'none',
                            fontFamily: "'JetBrains Mono', monospace",
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,119,181,0.15)'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,119,181,0.08)'; }}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="#0077B5" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          View LinkedIn Post
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        /* Cert card — scale reveal */
        .cert-card {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.4s var(--ease), transform 0.4s var(--ease);
        }
        .cert-card.cert-revealed {
          opacity: 1;
          transform: scale(1);
        }

        /* Cert inner box */
        .cert-inner {
          padding: 1rem;
          border-radius: 12px;
          background: var(--bg3);
          border: 1px solid var(--border);
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* Pulsing status dot */
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .resume-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cert-card { opacity: 1 !important; transform: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}