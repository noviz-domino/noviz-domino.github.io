document.querySelectorAll('[data-gallery]').forEach((gallery) => {
  const slides = [...gallery.querySelectorAll('.gallery-slide')];
  const dots = [...gallery.querySelectorAll('.gallery-dot')];
  const caption = gallery.closest('figure').querySelector('figcaption [data-caption]');
  let current = 0;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
    caption.textContent = slides[current].dataset.caption;
  };

  gallery.querySelector('[data-previous]').addEventListener('click', () => show(current - 1));
  gallery.querySelector('[data-next]').addEventListener('click', () => show(current + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)));
  gallery.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    show(current + (event.key === 'ArrowRight' ? 1 : -1));
  });
  gallery.querySelector('.gallery-controls').hidden = false;
  show(0);
});
