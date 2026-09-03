'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export function initPageAnimations() {
  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro.fromTo('.nav-shell', { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
    .fromTo('.hero-copy > *', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.09 }, '-=0.3')
    .fromTo('.hero-stage', { scale: 0.82, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.1 }, '-=0.75');
  gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => gsap.fromTo(element, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, scrollTrigger: { trigger: element, start: 'top 82%', once: true } }));
  gsap.fromTo('.service-card', { y: 28, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, scrollTrigger: { trigger: '#services', start: 'top 72%', once: true } });
  return () => { intro.kill(); ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
}
