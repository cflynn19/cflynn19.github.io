/*
 * Highlights the nav link for whichever section is currently in view.
 * That is the only behaviour this page needs from JS — smooth scrolling and
 * the sticky header are both CSS.
 */

const links = new Map(
  [...document.querySelectorAll('.site-header nav a')].map((a) => [
    a.getAttribute('href').slice(1),
    a,
  ])
);

const sections = [...links.keys()]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if (sections.length) {
  const visible = new Set();
  let atEnd = false;

  const setCurrent = () => {
    // Once the page bottoms out the final section can never reach the band
    // below, so treat "the footer is on screen" as being in that section.
    const active = atEnd
      ? sections[sections.length - 1].id
      : sections.find((s) => visible.has(s.id))?.id;
    links.forEach((link, id) => {
      if (id === active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      });
      setCurrent();
    },
    // Ignore the band under the sticky header, and the bottom half of the
    // viewport, so "current" means "what you're actually reading".
    { rootMargin: '-20% 0px -55% 0px' }
  );

  sections.forEach((section) => observer.observe(section));

  const footer = document.querySelector('.site-footer');
  if (footer) {
    new IntersectionObserver(([entry]) => {
      atEnd = entry.isIntersecting;
      setCurrent();
    }).observe(footer);
  }
}
