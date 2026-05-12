import { useEffect, useRef } from 'react';

export default function ParticleCanvas({ theme }) {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Kill on mobile and reduced-motion — biggest single perf win
    const isMobile = window.innerWidth <= 768;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || isMobile) {
      canvas.style.display = 'none';
      return;
    }

    const ctx = canvas.getContext('2d', { alpha: true });
    const isDark = theme !== 'light';

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Reduced particle counts — was 30/18
    const N = isDark ? 20 : 12;
    const particles = [];

    const pastelColors = [
      'rgba(173,216,230,', 'rgba(176,224,230,', 'rgba(221,160,221,',
      'rgba(255,182,193,', 'rgba(152,251,152,', 'rgba(230,230,250,',
    ];

    for (let i = 0; i < N; i++) {
      if (isDark) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.3,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          alpha: Math.random() * 0.45 + 0.08,
          color: Math.random() > 0.65 ? '0,245,200' : '0,212,255',
        });
      } else {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 20 + 5,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          alpha: Math.random() * 0.22 + 0.05,
          color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
          pulse: Math.random() * Math.PI * 2,
          pastel: true,
        });
      }
    }

    // Throttle to 15fps — saves ~25% vs 20fps, imperceptible for ambient particles
    const INTERVAL = 1000 / 15;
    let lastTime = 0;

    const draw = (ts) => {
      animRef.current = requestAnimationFrame(draw);
      if (ts - lastTime < INTERVAL) return;
      lastTime = ts;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -60) p.x = canvas.width + 60;
        if (p.x > canvas.width + 60) p.x = -60;
        if (p.y < -60) p.y = canvas.height + 60;
        if (p.y > canvas.height + 60) p.y = -60;

        if (p.pastel) {
          p.pulse += 0.006;
          const a = p.alpha * (0.8 + 0.2 * Math.sin(p.pulse));
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
          grad.addColorStop(0, p.color + a + ')');
          grad.addColorStop(1, p.color + '0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
          ctx.fill();
        }
      }
    };

    animRef.current = requestAnimationFrame(draw);

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        opacity: theme === 'light' ? 0.65 : 1,
      }}
    />
  );
}