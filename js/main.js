// Scroll progress bar
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  progressBar.style.width = pct + '%';
}, { passive: true });

// Hero parallax
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < 800) heroBg.style.transform = `translateY(${y * 0.4}px) scale(${1 + y * 0.0005})`;
  }, { passive: true });
}

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Animated counters
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const dur = 1800;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

// Sticky header
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Chat widget
const chatBubble = document.querySelector('.chat-bubble');
const chatPopup = document.querySelector('.chat-popup');
if (chatBubble && chatPopup) {
  chatBubble.addEventListener('click', () => {
    chatPopup.classList.toggle('open');
  });
}

// Contact form (demo only)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sent! We\'ll be in touch.';
    btn.style.background = '#1b4332';
    setTimeout(() => {
      btn.textContent = 'Get My Free Quote';
      btn.style.background = '';
      contactForm.reset();
    }, 3000);
  });
}

// Chat send (demo only)
const chatSend = document.querySelector('.chat-send');
if (chatSend) {
  chatSend.addEventListener('click', (e) => {
    e.preventDefault();
    chatSend.textContent = 'Sent! We\'ll text you shortly.';
    setTimeout(() => {
      chatSend.textContent = 'Send Message';
      document.querySelectorAll('.chat-input').forEach(i => i.value = '');
      chatPopup.classList.remove('open');
    }, 2500);
  });
}
