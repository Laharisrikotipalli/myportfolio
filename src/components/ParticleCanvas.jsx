import { useEffect, useRef } from 'react';

export default function ParticleCanvas({ theme }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      canvas.style.display = 'none';
      return;
    }

    const ctx = canvas.getContext('2d');
    const isDark = theme !== 'light';

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Reduced particle count for better performance
    const N = isDark ? 40 : 25;
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
          r: Math.random() * 1.6 + 0.3,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          alpha: Math.random() * 0.65 + 0.1,
          color: Math.random() > 0.65 ? '0,245,200' : '0,212,255',
        });
      } else {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 28 + 8,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          alpha: Math.random() * 0.32 + 0.08,
          color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
          pulse: Math.random() * Math.PI * 2,
          pastel: true,
        });
      }
    }

    // Throttle to 24fps for better performance
    const INTERVAL = 1000 / 24;
    let lastTime = 0;
    let isMobile = canvas.width <= 768;

    const draw = (timestamp) => {
      animRef.current = requestAnimationFrame(draw);
      if (timestamp - lastTime < INTERVAL) return;
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Skip connection lines on mobile
      if (isDark && !isMobile) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distSq = dx * dx + dy * dy;
            if (distSq < 16900) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0,212,255,${0.055 * (1 - Math.sqrt(distSq) / 130)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -60) p.x = canvas.width + 60;
        if (p.x > canvas.width + 60) p.x = -60;
        if (p.y < -60) p.y = canvas.height + 60;
        if (p.y > canvas.height + 60) p.y = -60;

        if (p.pastel) {
          p.pulse += 0.009;
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
      });
    };

    animRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
      isMobile = canvas.width <= 768;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: theme === 'light' ? 0.65 : 1,
      }}
    />
  );
}