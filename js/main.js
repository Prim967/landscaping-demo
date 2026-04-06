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
