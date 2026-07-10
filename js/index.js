// Subtle scroll-reveal animation for each section, plus a small polish
// touch for the primary CTA button. No dependencies, progressive
// enhancement only (the page is fully readable with JS disabled).

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main > .container');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => {
      section.classList.add('reveal');
      observer.observe(section);
    });
  }
});
