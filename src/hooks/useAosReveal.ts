import { useEffect } from 'react';
import { PageId } from '../types';

export function useAosReveal(activePage: PageId) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-aos]'));

    // Reset animation state on page change
    elements.forEach((el) => {
      el.classList.remove('aos-animate');
      const delay = el.getAttribute('data-aos-delay');
      if (delay) {
        el.style.transitionDelay = `${delay}ms`;
      } else {
        el.style.transitionDelay = '0ms';
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const rafId = requestAnimationFrame(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 20) {
          el.classList.add('aos-animate');
        } else {
          observer.observe(el);
        }
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [activePage]);
}
