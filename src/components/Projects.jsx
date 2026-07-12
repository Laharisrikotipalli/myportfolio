import { useRef, useEffect } from 'react';

const PROJECTS = [
  {
    num: '01',
    icon: '🐳',
    title: 'Docker Image Optimization Analyzer',
    problem: 'Docker images often become excessively large due to bloated base images and inefficient Dockerfile practices, leading to slower CI/CD pipelines and increased storage usage.',
    solution: 'Built a full-stack DevOps tool using FastAPI and Docker SDK that performs static and runtime analysis of Docker image layers to detect inefficiencies and provide AI-assisted optimization recommendations.',
    impact: ['Reduced Docker image size by ', { stat: '~99%' }, ' (', { stat: '1102 MB → 11 MB' }, ') for optimized Python applications, significantly improving deployment speed and resource efficiency.'],
    tags: ['FastAPI', 'Docker SDK', 'Python', 'Chart.js', 'Docker Compose', 'HTML/CSS/JS'],
    github: 'https://github.com/Laharisrikotipalli/docker-analyzer',
    demo: 'https://drive.google.com/file/d/1A_Y6fJ9RjfoSzp41Ynkrnu7kf04kSLRi/view',
    accentColor: 'linear-gradient(90deg, #4ade80, #00f5c8)',
  },
  {
    num: '02',
    icon: '⚡',
    title: 'Multi-Layer Cache System',
    problem: 'High-traffic applications experience increased latency and database bottlenecks due to repeated expensive queries and concurrent access patterns.',
    solution: 'Implemented a dual-layer caching architecture with L1 in-memory LRU caching and L2 Redis distributed caching with TTL management. Added cache stampede protection using Redis locks and exposed system metrics through a custom /metrics endpoint.',
    impact: ['Reduced database load by ', { stat: '~85%' }, ' and improved response times through efficient cache utilization and concurrency-safe request handling.'],
    tags: ['FastAPI', 'Redis', 'Docker', 'Python', 'LRU Cache', 'Docker Compose'],
    github: 'https://github.com/Laharisrikotipalli/multi-layer-cache',
    demo: 'https://drive.google.com/file/d/1Fnk6v_EJbvnE3aaIZegALwTQcVS9B-Qb/view',
    accentColor: 'linear-gradient(90deg, #00d4ff, #a78bfa)',
  },
  {
    num: '03',
    icon: '☁️',
    title: 'Hybrid Cloud Architecture',
    problem: 'Managing communication and infrastructure provisioning across multiple cloud providers is complex and difficult to maintain manually.',
    solution: 'Designed a hybrid cloud environment integrating GCP services with AWS LocalStack using Terraform and Docker to automate infrastructure provisioning and deployment workflows.',
    impact: ['Enabled ', { stat: 'reliable cross-cloud communication' }, ' with Infrastructure as Code (IaC), containerized deployments, and ', { stat: 'centralized monitoring' }, ' support.'],
    tags: ['Terraform', 'GCP', 'Docker', 'Node.js', 'AWS', 'LocalStack'],
    github: 'https://github.com/Laharisrikotipalli/hybrid-cloud-architecture',
    demo: 'https://drive.google.com/file/d/1A6mtcQvEbf0RNaxo3hfmIQo6TzI0ZhaZ/view',
    accentColor: 'linear-gradient(90deg, #a78bfa, #f472b6)',
  },
  {
    num: '04',
    icon: '🔄',
    title: 'AWS ECS CI/CD Pipeline',
    problem: 'Manual deployment workflows are error-prone, inconsistent, and slow, often causing deployment downtime and configuration drift.',
    solution: 'Developed a fully automated CI/CD pipeline using GitHub Actions, Terraform, Docker, and AWS ECS with rolling deployment strategies and automated health checks.',
    impact: ['Achieved ', { stat: 'reliable and repeatable deployments' }, ' with ', { stat: 'zero manual intervention' }, ', enabling automated production delivery on every push.'],
    tags: ['Terraform', 'AWS ECS', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/Laharisrikotipalli/my-ecs-terraform-cicd',
    demo: 'https://drive.google.com/file/d/1QvWC0psoIAyuMVdn-VQQgJkKsccqIv2P/view',
    accentColor: 'linear-gradient(90deg, #00d4ff, #4ade80)',
  },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed');
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('revealed'); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ImpactText({ parts }) {
  return (
    <>
      {parts.map((part, i) =>
        typeof part === 'string' ? (
          <span key={i}>{part}</span>
        ) : (
          <span
            key={i}
            style={{
              color: 'var(--cyan)', fontWeight: 700,
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem',
            }}
          >
            {part.stat}
          </span>
        )
      )}
    </>
  );
}

function ProjectCard({ proj, index }) {
  const cardRef = useReveal();

  return (
    <article
      ref={cardRef}
      className="reveal proj-card"
      style={{
        transitionDelay: `${index * 0.1}s`,
        borderRadius: 18,
        background: 'var(--card)',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
        position: 'relative',
        transition: 'opacity 0.65s var(--ease), transform 0.65s var(--ease), border-color 0.25s, box-shadow 0.25s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--border-hover)';
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
        e.currentTarget.style.transform = 'translateY(-6px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Top accent line */}
      <div aria-hidden="true" style={{ height: 3, background: proj.accentColor }} />

      {/* Scan line animation */}
      <div
        aria-hidden="true"
        className="scan-line"
        style={{
          position: 'absolute', left: 0, right: 0, height: 1, top: 0,
          background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.12), transparent)',
          pointerEvents: 'none', zIndex: 1,
          animationDelay: `${index * 0.7}s`,
        }}
      />

      <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <div
            aria-hidden="true"
            style={{
              width: 46, height: 46, borderRadius: 12, flexShrink: 0,
              background: 'var(--bg3)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.4rem',
            }}
          >
            {proj.icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem',
              color: 'var(--text3)', letterSpacing: '0.1em', marginBottom: 4,
            }}>
              {proj.num}
            </div>
            <h3 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 700,
              fontSize: '1.05rem', lineHeight: 1.25, color: 'var(--text)',
              margin: 0,
            }}>
              {proj.title}
            </h3>
          </div>
          {/* HUD corner accent */}
          <div
            aria-hidden="true"
            style={{
              width: 18, height: 18,
              borderTop: '1.5px solid rgba(0,245,255,0.25)',
              borderRight: '1.5px solid rgba(0,245,255,0.25)',
              flexShrink: 0, marginTop: 2,
            }}
          />
        </div>

        {/* Problem / Solution / Impact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <div style={{ padding: '0.65rem 0.85rem', borderRadius: 8, background: 'rgba(248,113,113,0.05)', borderLeft: '2px solid rgba(248,113,113,0.4)' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#f87171', letterSpacing: '0.08em', marginBottom: 3 }}>▸ PROBLEM</div>
            <div style={{ fontSize: '0.83rem', color: 'var(--text2)', lineHeight: 1.55 }}>{proj.problem}</div>
          </div>
          <div style={{ padding: '0.65rem 0.85rem', borderRadius: 8, background: 'rgba(0,245,255,0.04)', borderLeft: '2px solid rgba(0,212,255,0.4)' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--cyan)', letterSpacing: '0.08em', marginBottom: 3 }}>▸ SOLUTION</div>
            <div style={{ fontSize: '0.83rem', color: 'var(--text2)', lineHeight: 1.55 }}>{proj.solution}</div>
          </div>
          <div style={{ padding: '0.65rem 0.85rem', borderRadius: 8, background: 'rgba(167,139,250,0.05)', borderLeft: '2px solid rgba(167,139,250,0.4)' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--purple)', letterSpacing: '0.08em', marginBottom: 3 }}>▸ IMPACT</div>
            <div style={{ fontSize: '0.83rem', color: 'var(--text2)', lineHeight: 1.55 }}>
              <ImpactText parts={proj.impact} />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {proj.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingTop: '0.4rem', borderTop: '1px solid var(--border)' }}>
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${proj.title} on GitHub`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '7px 14px', borderRadius: 8,
              background: 'var(--bg3)', border: '1px solid var(--border)',
              color: 'var(--text2)', fontSize: '0.78rem',
              textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace",
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}
          >
            <GithubIcon /> GitHub
          </a>

          {proj.demo && (
            <a
              href={proj.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch demo for ${proj.title}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '7px 14px', borderRadius: 8,
                background: 'rgba(0,212,255,0.07)', border: '1px solid rgba(0,212,255,0.25)',
                color: 'var(--cyan)', fontSize: '0.78rem',
                textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace",
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.14)'; e.currentTarget.style.borderColor = 'var(--cyan)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.25)'; }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const headerRef = useReveal();
  const footerRef = useReveal();

  return (
    <section id="projects" className="section-pad-alt" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background orbs — static, no scroll dep */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '5%', left: '-10%', width: 400, height: 400,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '10%', right: '-8%', width: 350, height: 350,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={headerRef} className="reveal">
          <div className="section-eyebrow" style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.06em' }}>
            <span style={{ color: 'var(--cyan)', opacity: 0.7 }}>lahari@dev:~$</span>
            <span style={{ marginLeft: 8 }}>ls ./projects --featured</span>
          </div>
          <h2 className="section-title">My <span className="accent">Projects</span></h2>
          <div className="section-bar" />
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.6rem' }}
          className="projects-grid"
        >
          {PROJECTS.map((proj, index) => (
            <ProjectCard key={proj.num} proj={proj} index={index} />
          ))}
        </div>

        <div ref={footerRef} className="reveal" style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a
            href="https://github.com/Laharisrikotipalli"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            aria-label="View all projects on GitHub"
          >
            <GithubIcon />
            View All Projects on GitHub
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .projects-grid { grid-template-columns: 1fr !important; } }

        /* Scan line sweep animation — pure CSS, no JS */
        @keyframes scanSweep {
          0%   { top: 0%;   opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .scan-line {
          animation: scanSweep 5s linear infinite;
        }

        /* Card hover lift — handled via inline onMouseEnter/Leave above,
           but this resets it when the reveal transition fires */
        .proj-card.revealed {
          /* keep opacity/transform from .reveal.revealed, don't override hover */
        }

        @media (prefers-reduced-motion: reduce) {
          .scan-line { animation: none !important; }
        }
      `}</style>
    </section>
  );
}