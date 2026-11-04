/**
 * Motion terkoordinasi: progress bar, reveal, roadmap yang tergambar,
 * dan cahaya kursor di hero. Semua dimatikan bila pengguna memilih
 * reduced motion.
 */
const reduce =
  typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

const nav = document.querySelector<HTMLElement>("[data-nav]");
const bar = document.querySelector<HTMLElement>(".progress");
const drawEls = Array.from(document.querySelectorAll<HTMLElement>("[data-draw]"));

function onScroll(): void {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const y = window.scrollY;
  if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, Math.max(0, y / max)) : 0})`;
  nav?.classList.toggle("is-scrolled", y > 24);

  for (const el of drawEls) {
    const r = el.getBoundingClientRect();
    const start = window.innerHeight * 0.85;
    const span = r.height + window.innerHeight * 0.3;
    const p = span > 0 ? Math.min(1, Math.max(0, (start - r.top) / span)) : 0;
    el.style.setProperty("--p", reduce ? "1" : (isNaN(p) ? "0" : p.toFixed(3)));
  }
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
window.addEventListener("hashchange", onScroll);
onScroll();

const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
if (reduce || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.05, rootMargin: "0px 0px -4% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
}

const hero = document.querySelector<HTMLElement>("[data-glow]");
if (hero && !reduce) {
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty("--mx", `${e.clientX - r.left}px`);
    hero.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
}
