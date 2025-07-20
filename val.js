// Global state
let currentTheme = 'dark';
let currentLanguage = 'en';

// Language translations
const translations = {
  en: {
    themeIcon: '🌙',
    langIcon: '🇬🇧'
  },
  vi: {
    themeIcon: '🌙',
    langIcon: '🇻🇳'
  }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize Application
function initializeApp() {
  // Hide page loader
  setTimeout(() => {
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
      pageLoader.classList.add('hidden');
      setTimeout(() => {
        pageLoader.style.display = 'none';
      }, 500);
    }
  }, 1000);

  // Initialize theme and language from localStorage or defaults
  initializeTheme();
  initializeLanguage();
  
  // Setup scroll effects
  setupScrollEffects();
  
  // Setup interactive elements
  setupInteractiveElements();
  
  // Setup scroll reveal
  setupScrollReveal();
  
  // Add smooth scroll behavior
  setupSmoothScroll();
}

// Theme System
function initializeTheme() {
  // Try to load theme from localStorage, fallback to 'dark'
  const savedTheme = localStorage.getItem('naviTheme') || 'dark';
  currentTheme = savedTheme;
  document.body.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', currentTheme);
  localStorage.setItem('naviTheme', currentTheme);
  updateThemeIcon();
  
  // Add transition effect
  document.body.style.transition = 'all 0.5s ease';
  setTimeout(() => {
    document.body.style.transition = '';
  }, 500);
}

function updateThemeIcon() {
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
  }
}

// Language System
function initializeLanguage() {
  // Try to load language from localStorage, fallback to 'en'
  const savedLanguage = localStorage.getItem('naviLanguage') || 'en';
  currentLanguage = savedLanguage;
  updateLanguage();
  updateLanguageIcon();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'vi' : 'en';
  localStorage.setItem('naviLanguage', currentLanguage);
  updateLanguage();
  updateLanguageIcon();
}

function updateLanguage() {
  const langElements = document.querySelectorAll('.lang');
  
  langElements.forEach(element => {
    const enText = element.getAttribute('data-en');
    const viText = element.getAttribute('data-vi');
    
    if (currentLanguage === 'en' && enText) {
      element.innerHTML = enText;
    } else if (currentLanguage === 'vi' && viText) {
      element.innerHTML = viText;
    }
  });
}

function updateLanguageIcon() {
  const langIcon = document.getElementById('langIcon');
  if (langIcon) {
    langIcon.textContent = currentLanguage === 'en' ? '🇬🇧' : '🇻🇳';
  }
}

// Scroll Effects
function setupScrollEffects() {
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Header scroll effect
    if (scrollTop > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Parallax effect for floating orbs
    const orbs = document.querySelectorAll('.floating-orb');
    orbs.forEach((orb, index) => {
      const speed = 0.5 + (index * 0.2);
      const yPos = -(scrollTop * speed);
      orb.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Interactive Elements
function setupInteractiveElements() {
  // Add ripple effect to interactive elements
  const interactiveElements = document.querySelectorAll('.interactive');
  
  interactiveElements.forEach(element => {
    element.addEventListener('click', createRippleEffect);
  });
}

function createRippleEffect(e) {
  const button = e.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  
  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
    z-index: 1;
  `;
  
  // Add ripple animation keyframes if not exists
  if (!document.querySelector('#ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  button.style.position = 'relative';
  button.style.overflow = 'hidden';
  button.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Scroll Reveal Animation
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, entry.target.dataset.delay || 0);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach((element, index) => {
    element.dataset.delay = index * 100; // Stagger animations
    revealObserver.observe(element);
  });
}

// Smooth Scroll
function setupSmoothScroll() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Image Loading Optimization
function setupImageLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
  // Theme toggle with 'T' key
  if (e.key.toLowerCase() === 't' && !e.ctrlKey && !e.altKey) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      toggleTheme();
    }
  }
  
  // Language toggle with 'L' key
  if (e.key.toLowerCase() === 'l' && !e.ctrlKey && !e.altKey) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      toggleLanguage();
    }
  }
});

// Performance Optimization
function optimizePerformance() {
  // Throttle scroll events
  let ticking = false;
  
  function updateScrollEffects() {
    setupScrollEffects();
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  });
  
  // Preload critical images
  const criticalImages = ['val.PNG', 'discord.PNG'];
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Error Handling
window.addEventListener('error', function(e) {
  console.warn('NAVI Database: An error occurred:', e.error);
});

// Accessibility Improvements
function setupAccessibility() {
  // Add focus management
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
  });
  
  // Add ARIA labels dynamically
  const themeBtn = document.querySelector('[onclick="toggleTheme()"]');
  const langBtn = document.querySelector('[onclick="toggleLanguage()"]');
  
  if (themeBtn) {
    themeBtn.setAttribute('aria-label', 'Toggle theme');
    themeBtn.setAttribute('role', 'button');
  }
  
  if (langBtn) {
    langBtn.setAttribute('aria-label', 'Toggle language');
    langBtn.setAttribute('role', 'button');
  }
}

// Initialize accessibility after DOM load
document.addEventListener('DOMContentLoaded', setupAccessibility);

// Export functions for HTML onclick handlers
window.toggleTheme = toggleTheme;
window.toggleLanguage = toggleLanguage;

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance);

// Add custom cursor effect for interactive elements
function setupCustomCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.innerHTML = '✨';
  document.body.appendChild(cursor);
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
  
  // Add cursor styles
  const cursorStyles = document.createElement('style');
  cursorStyles.textContent = `
    .custom-cursor {
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      font-size: 20px;
      opacity: 0.7;
      transition: opacity 0.3s ease;
    }
    
    .interactive:hover ~ .custom-cursor {
      opacity: 1;
      transform: scale(1.5);
    }
    
    body.keyboard-navigation .custom-cursor {
      display: none;
    }
  `;
  document.head.appendChild(cursorStyles);
}

// Initialize custom cursor on desktop devices
if (window.innerWidth > 768) {
  document.addEventListener('DOMContentLoaded', setupCustomCursor);
}
