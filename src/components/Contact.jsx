import { useState } from 'react';
import { motion } from 'framer-motion';

/* ── Social icons ── */
const GmailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
  </svg>
);

const GithubBigIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const LINKS = [
  {
    icon: <GmailIcon />,
    label: 'Gmail',
    value: 'laharisrikotipalli07@gmail.com',
    href: 'mailto:laharisrikotipalli07@gmail.com',
    accentColor: '#EA4335',
  },
  {
    icon: <GithubBigIcon />,
    label: 'GitHub',
    value: 'github.com/Laharisrikotipalli',
    href: 'https://github.com/Laharisrikotipalli',
    accentColor: 'var(--text)',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/lahari-sri-kotipalli',
    href: 'https://linkedin.com/in/lahari-sri-kotipalli',
    accentColor: '#0A66C2',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay },
});

const inputBase = {
  width: '100%', padding: '12px 16px', borderRadius: 10,
  background: 'var(--bg3)', border: '1px solid var(--border)',
  color: 'var(--text)', fontSize: '0.92rem',
  fontFamily: "'DM Sans', sans-serif", outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus('sending');

    try {
      // Send via FormSubmit (no backend needed – works with any static host)
      const res = await fetch('https://formsubmit.co/ajax/laharisrikotipalli07@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Contact from ${form.name}`,
          _template: 'table',
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('failed');
      }
    } catch {
      // Fallback: open mail client
      const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
      window.open(`mailto:laharisrikotipalli07@gmail.com?subject=${subject}&body=${body}`, '_blank');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-pad-alt">
      <div className="container">
        <motion.div {...fadeUp(0)}>
          <div className="section-eyebrow">Get In Touch</div>
          <h2 className="section-title">Let's <span className="accent">Connect</span></h2>
          <div className="section-bar" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '2.5rem', alignItems: 'start' }} className="contact-grid">

          {/* Left – Links */}
          <motion.div {...fadeUp(0.1)}>
            <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '2.2rem' }}>
              Currently open to backend, cloud, and DevOps roles. Let's build something great together.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {LINKS.map(link => (
                <a key={link.label} href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '1rem 1.2rem', borderRadius: 12,
                    background: 'var(--card)', border: '1px solid var(--border)',
                    textDecoration: 'none', boxShadow: 'var(--shadow-card)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  <div style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: 'var(--bg3)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    color: link.accentColor,
                  }}>
                    {link.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.67rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>
                      {link.label}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>
                      {link.value}
                    </div>
                  </div>
                  <svg style={{ marginLeft: 'auto', color: 'var(--text3)', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right – Working form */}
          <motion.div {...fadeUp(0.15)}>
            <div style={{ padding: '2rem', borderRadius: 16, background: 'var(--card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.05rem', marginBottom: '1.5rem', color: 'var(--text)' }}>
                Send a Message
              </div>

              {status === 'sent' && (
                <div style={{
                  padding: '12px 16px', borderRadius: 10, marginBottom: '1rem',
                  background: 'rgba(0,245,200,0.08)', border: '1px solid rgba(0,245,200,0.3)',
                  color: 'var(--cyan2)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Message sent! I'll get back to you soon.
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.72rem', color: 'var(--text3)', display: 'block', marginBottom: 6, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.07em' }}>YOUR NAME</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name"
                      style={inputBase}
                      onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.72rem', color: 'var(--text3)', display: 'block', marginBottom: 6, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.07em' }}>EMAIL</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com"
                      style={inputBase}
                      onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '0.72rem', color: 'var(--text3)', display: 'block', marginBottom: 6, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.07em' }}>MESSAGE</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message…" rows={5}
                    style={{ ...inputBase, resize: 'vertical', minHeight: 120 }}
                    onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <button onClick={handleSubmit} className="btn-primary"
                  disabled={status === 'sending'}
                  style={{ alignSelf: 'flex-start', marginTop: '0.3rem', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'sending' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                        <circle cx="12" cy="12" r="10" opacity=".3"/><path d="M12 2a10 10 0 010 20"/>
                      </svg>
                      Sending…
                    </>
                  ) : status === 'sent' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      Sent!
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
