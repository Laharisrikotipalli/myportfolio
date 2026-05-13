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
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

/* ── Inline brand icons ── */
const GoogleCloudIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gcpG2" x1="0" y1="7" x2="21" y2="18" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#4285F4"/>
        <stop offset="35%"  stopColor="#EA4335"/>
        <stop offset="70%"  stopColor="#FBBC05"/>
        <stop offset="100%" stopColor="#34A853"/>
      </linearGradient>
    </defs>
    <path d="M18 10.5c-.5-2.5-2.7-4.5-5.3-4.5C11 6 9.5 6.7 8.4 7.7 7.6 7.3 6.8 7 6 7c-2.2 0-4 1.8-4 4 0 .2 0 .4.1.5C.8 12 0 13.1 0 14.4 0 16.4 1.6 18 3.6 18H18c1.7 0 3-1.3 3-3 0-1.5-1.1-2.8-2.5-3" fill="url(#gcpG2)" transform="translate(0.5 0)"/>
  </svg>
);

const IBMIcon = () => (
  <svg viewBox="0 0 48 20" width="38" height="16" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="16" fontSize="18" fontWeight="900" fill="#1F70C1" fontFamily="Arial Black, Arial" letterSpacing="-1">IBM</text>
    <rect x="2" y="4"  width="44" height="2.5" fill="white" opacity="0.5"/>
    <rect x="2" y="9"  width="44" height="2.5" fill="white" opacity="0.5"/>
    <rect x="2" y="14" width="44" height="2.5" fill="white" opacity="0.5"/>
  </svg>
);

const OracleIcon = () => (
  <svg viewBox="0 0 70 20" width="54" height="16" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="15" fontSize="13" fontWeight="900" fill="#F80000" fontFamily="Arial Black, Arial" letterSpacing="0.3">ORACLE</text>
  </svg>
);

const CiscoIcon = () => (
  <svg viewBox="0 0 60 28" width="46" height="18" xmlns="http://www.w3.org/2000/svg">
    <rect x="26" y="2"  width="8" height="14" rx="4" fill="#00BCEB"/>
    <rect x="18" y="5"  width="6" height="11" rx="3" fill="#00BCEB"/>
    <rect x="36" y="5"  width="6" height="11" rx="3" fill="#00BCEB"/>
    <rect x="10" y="9"  width="6" height="7"  rx="3" fill="#00BCEB"/>
    <rect x="44" y="9"  width="6" height="7"  rx="3" fill="#00BCEB"/>
    <rect x="3"  y="12" width="5" height="4"  rx="2" fill="#00BCEB"/>
    <rect x="52" y="12" width="5" height="4"  rx="2" fill="#00BCEB"/>
    <text x="30" y="27" fontSize="7" fontWeight="700" fill="#00BCEB" fontFamily="Arial" textAnchor="middle" letterSpacing="1.5">CISCO</text>
  </svg>
);

const APSSDCIcon = () => (
  <svg viewBox="0 0 80 40" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="40" rx="6" fill="#FF6B35"/>
    <text x="40" y="15" fontSize="9" fontWeight="900" fill="white" fontFamily="Arial Black, Arial" textAnchor="middle" letterSpacing="0.5">APSSDC</text>
    <text x="40" y="30" fontSize="6" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="Arial" textAnchor="middle" letterSpacing="0.3">INTERNSHIP</text>
  </svg>
);

const CERTS = [
  {
    icon: <GoogleCloudIcon />,
    name: 'Google Cloud Generative AI Leader Track',
    issuer: 'Google Cloud',
    color: '#4285F4',
    link: 'https://drive.google.com/file/d/1Z7odltl3sI5cjSVsP0RCzDBBWPf-A5Gc/view?usp=sharing',
    category: 'Cloud',
  },
  {
    icon: <IBMIcon />,
    name: 'Generative AI Professional Certificate',
    issuer: 'IBM',
    color: '#1F70C1',
    link: 'https://drive.google.com/file/d/1D5Ooq3p_9naty5a6b3xJXHAyU4I17i3w/view?usp=sharing',
    category: 'AI / ML',
  },
  {
    icon: <OracleIcon />,
    name: 'Oracle Cloud Infrastructure Associate',
    issuer: 'Oracle',
    color: '#F80000',
    link: 'https://drive.google.com/file/d/12bEzfFwLcKT0hxk7q8F_ijRMYIjmpXsv/view?usp=sharing',
    category: 'Cloud',
  },
  {
    icon: <CiscoIcon />,
    name: 'C Programming Certified',
    issuer: 'CISCO',
    color: '#049FD9',
    link: 'https://drive.google.com/file/d/1ejDi2seJlVSg9p0OXa4XGt69JqmAsnzJ/view?usp=sharing',
    category: 'Programming',
  },
  {
    icon: <APSSDCIcon />,
    name: 'Cloud Computing Virtual Internship',
    issuer: 'APSSDC',
    color: '#FF6B35',
    link: 'https://drive.google.com/file/d/1daZzTIgm0kFj8eZq5-oiF781F955kfsf/view?usp=sharing',
    category: 'Cloud',
  },
];

const HACKATHONS = [
  {
    icon: '🏆',
    title: 'Amaravati Quantum Valley Hackathon 2025 — Finalist',
    badge: 'Finalist',
    badgeColor: '#f59e0b',
    desc: "Qualified as a Finalist Team at one of Andhra Pradesh's premier technology competitions, presenting innovative cloud and quantum computing solutions to a panel of industry judges.",
    tags: ['Cloud', 'Quantum Computing', 'Team Project'],
    linkedinLink: 'https://www.linkedin.com/posts/shyam-mantri_hackathon-quantumcomputing-quantummechanics-ugcPost-7371923044748943361-p0x_?utm_source=share&utm_medium=member_android&rcm=ACoAAFL9BpIBfZH-aeP-v4oe6BD2pqZlhR6RGkI',
  },
];

function CertCard({ cert, index }) {
  const ref = useCertReveal(0.07 * index);
  return (
    <a
      ref={ref}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-scale-card"
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        className="cert-scale-inner"
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = cert.color;
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = `0 10px 28px ${cert.color}28`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Top color stripe */}
        <div aria-hidden="true" style={{ height: 2, background: cert.color, borderRadius: '2px 2px 0 0', margin: '-1rem -1rem 0.9rem -1rem' }} />

        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.7rem' }}>
          <div style={{
            width: 46, height: 46, borderRadius: 10,
            background: 'white', border: `1px solid ${cert.color}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, padding: 6, overflow: 'hidden',
          }}>
            {cert.icon}
          </div>
          {/* Category pill */}
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem',
            color: cert.color, padding: '2px 8px', borderRadius: 4,
            background: `${cert.color}14`, border: `1px solid ${cert.color}30`,
            letterSpacing: '0.04em',
          }}>
            {cert.category}
          </span>
        </div>

        {/* Cert name */}
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.35, marginBottom: '0.55rem' }}>
          {cert.name}
        </div>

        {/* Issuer + external link */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem',
            color: cert.color, letterSpacing: '0.04em',
          }}>
            {cert.issuer}
          </span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
            stroke="var(--text3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ opacity: 0.45 }} aria-hidden="true">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15,3 21,3 21,9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function Achievements() {
  const headerRef   = useReveal(0);
  const hackRef     = useReveal(0.1);
  const certsHdrRef = useReveal(0.05);

  return (
    <section id="achievements" className="section-pad-alt" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Decorative orbs */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '5%', left: '-10%', width: 420, height: 420,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,114,182,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '8%', right: '-8%', width: 340, height: 340,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div ref={headerRef} className="reveal">
          <div className="section-eyebrow">Recognition</div>
          <h2 className="section-title">Achievements &amp; <span className="accent">Certifications</span></h2>
          <div className="section-bar" />
        </div>

        {/* ── Hackathons ── */}
        <div ref={hackRef} className="reveal" style={{ marginBottom: '3rem' }}>
          <div style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: '0.95rem', color: 'var(--text)',
            display: 'flex', alignItems: 'center', gap: 10,
            marginBottom: '1.2rem',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan2)" strokeWidth="2" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Hackathons
          </div>

          {HACKATHONS.map(h => (
            <div key={h.title} style={{
              borderRadius: 16,
              background: 'var(--card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-card)',
              overflow: 'hidden',
              transition: 'border-color 0.25s, box-shadow 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = h.badgeColor; e.currentTarget.style.boxShadow = `0 8px 32px ${h.badgeColor}20`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'var(--shadow-card)'; }}
            >
              {/* Gold top stripe */}
              <div aria-hidden="true" style={{ height: 3, background: `linear-gradient(90deg, ${h.badgeColor}, #f97316)` }} />

              <div style={{ padding: '1.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                  {/* Trophy icon box */}
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    background: `${h.badgeColor}14`, border: `1px solid ${h.badgeColor}35`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.6rem',
                  }}>
                    {h.icon}
                  </div>

                  <div style={{ flex: 1, minWidth: 220 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
                      <h3 style={{
                        fontFamily: "'Syne', sans-serif", fontWeight: 700,
                        fontSize: '1rem', color: 'var(--text)', margin: 0,
                      }}>
                        {h.title}
                      </h3>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
                        color: h.badgeColor, padding: '3px 9px', borderRadius: 5,
                        background: `${h.badgeColor}14`, border: `1px solid ${h.badgeColor}40`,
                        letterSpacing: '0.06em', fontWeight: 700, flexShrink: 0,
                      }}>
                        {h.badge}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.72, margin: '0 0 1rem 0' }}>
                      {h.desc}
                    </p>

                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                      {h.tags.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                      {h.linkedinLink && (
                        <a
                          href={h.linkedinLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            padding: '5px 12px', borderRadius: 8,
                            background: 'rgba(0,119,181,0.08)',
                            border: '1px solid rgba(0,119,181,0.3)',
                            color: '#0077B5', fontSize: '0.72rem',
                            textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace",
                            transition: 'all 0.2s', marginLeft: 4,
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,119,181,0.16)'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,119,181,0.08)'; }}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#0077B5" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn Post
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Certifications ── */}
        <div ref={certsHdrRef} className="reveal">
          <div style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: '0.95rem', color: 'var(--text)',
            display: 'flex', alignItems: 'center', gap: 10,
            marginBottom: '1.2rem',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="8" r="6"/><path d="M8 14l-4 8 8-3 8 3-4-8"/>
            </svg>
            Certifications
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
          }} className="cert-awards-grid">
            {CERTS.map((cert, i) => (
              <CertCard key={cert.name} cert={cert} index={i} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        /* Cert scale-in card */
        .cert-scale-card {
          opacity: 0;
          transform: scale(0.9) translateY(10px);
          transition: opacity 0.4s var(--ease), transform 0.4s var(--ease);
        }
        .cert-scale-card.cert-revealed {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        .cert-scale-inner {
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

        /* Responsive */
        @media (max-width: 640px) {
          .cert-awards-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 400px) {
          .cert-awards-grid { grid-template-columns: 1fr !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cert-scale-card { opacity: 1 !important; transform: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}