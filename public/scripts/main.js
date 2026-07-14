const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Revelado de tarjetas + tilt 3D ----------
const cards = document.querySelectorAll('.card');

function enableTilt(card) {
  if (prefersReducedMotion) return;
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -6;
    const rotateY = ((x - cx) / cx) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
}

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const card = entry.target;
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        enableTilt(card);
      }, i * 60);
      cardObserver.unobserve(card);
    }
  });
}, { threshold: 0.15 });

cards.forEach((card) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  cardObserver.observe(card);
});

// ---------- Carrusel de imágenes ----------
document.querySelectorAll('.carousel').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  const dotsWrap = carousel.parentElement.querySelector('.carousel-dots');
  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    if (dotsWrap) {
      dotsWrap.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    update();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(index - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(index + 1));
  if (dotsWrap) {
    dotsWrap.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      dot.addEventListener('click', () => goTo(i));
    });
  }

  let startX = 0;
  track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 40) goTo(index - 1);
    else if (diff < -40) goTo(index + 1);
  });

  update();
});

// ---------- Topbar dinámica al hacer scroll ----------
const topbar = document.querySelector('.topbar');

function updateTopbar() {
  if (!topbar) return;
  if (window.scrollY > 40) {
    topbar.classList.add('scrolled');
  } else {
    topbar.classList.remove('scrolled');
  }
}
updateTopbar();
window.addEventListener('scroll', updateTopbar, { passive: true });

// ---------- Transición entre páginas ----------
document.querySelectorAll('a[href]').forEach((link) => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) return;

  // Si el enlace apunta a un ancla dentro de la misma página (misma ruta,
  // solo cambia el #hash), dejamos que el navegador haga scroll normal:
  // no hay recarga real, así que no debemos aplicar el fundido de salida.
  const url = new URL(href, window.location.href);
  const isSamePageAnchor = url.pathname === window.location.pathname && url.hash;
  if (isSamePageAnchor) return;

  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (prefersReducedMotion) {
      window.location.href = href;
      return;
    }
    document.body.classList.add('leaving');
    setTimeout(() => { window.location.href = href; }, 300);
  });
});

// Si el navegador restaura la página desde su caché (botón "atrás"),
// nos aseguramos de que no se quede congelada en el estado de salida.
window.addEventListener('pageshow', () => {
  document.body.classList.remove('leaving');
});