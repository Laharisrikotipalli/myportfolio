// useParallax.js
// Scroll-based parallax — uses only transform (GPU composited, zero reflow)
// Speed: positive = moves up slower than scroll, negative = moves up faster
import { useEffect, useRef } from 'react';

export function useScrollParallax(speed = 0.15) {
  const ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Disable on mobile for performance
    if (window.innerWidth <= 768) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // Only animate when element is near viewport
      if (rect.bottom < -viewH || rect.top > viewH * 2) return;
      const centerOffset = (rect.top + rect.height / 2) - viewH / 2;
      const y = centerOffset * speed;
      el.style.transform = `translateY(${y}px)`;
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        update();
        rafRef.current = null;
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  return ref;
}