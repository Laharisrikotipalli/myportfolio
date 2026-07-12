const GmailFooter = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
  </svg>
);

const GithubFooter = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInFooter = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const SOCIAL_LINKS = [
  { icon: <GithubFooter />, href: 'https://github.com/Laharisrikotipalli', label: 'GitHub' },
  { icon: <LinkedInFooter />, href: 'https://linkedin.com/in/lahari-sri-kotipalli', label: 'LinkedIn' },
  { icon: <GmailFooter />, href: 'mailto:laharisrikotipalli07@gmail.com', label: 'Email' },
];


export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
    }}>
      {/* Main footer row */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2.2rem 2rem' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.2rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 4 }}>
              Lahari Sri Kotipalli
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'var(--text3)' }}>
              Cloud &amp; DevOps Engineer · B.Tech CSE '27
            </div>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            {SOCIAL_LINKS.map(link => (
              <a key={link.label} href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--card)', border: '1px solid var(--border)',
                  color: 'var(--text2)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'var(--text3)', textAlign: 'right', lineHeight: 1.8 }}>
            <div>© 2026</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
              <span>Made with</span>
              {/* React icon */}
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
              </svg>
              <span style={{ color: '#61DAFB' }}>React</span>
              <span>+</span>
              {/* Vite icon */}
              <svg viewBox="0 0 24 24" width="13" height="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.58 2.89L8.34 12.25l5.67.67-6.57 8.19 9.22-10.86-5.8-.41z" fill="#BD34FE"/>
                <path d="M13.58 2.89l-1.14 7.76 5.8.41z" fill="#FF914D"/>
              </svg>
              <span style={{ color: '#BD34FE' }}>Vite</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}