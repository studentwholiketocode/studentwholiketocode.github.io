// Global state
let currentTheme = 'dark';
let currentLanguage = 'en';

// Language translations with all four languages
const translations = {
  en: {
    themeIcon: '🌙',
    langIcon: '🇬🇧',
    langName: 'English'
  },
  vi: {
    themeIcon: '🌙',
    langIcon: '🇻🇳',
    langName: 'Tiếng Việt'
  },
  th: {
    themeIcon: '🌙',
    langIcon: '🇹🇭',
    langName: 'ไทย'
  },
  zh: {
    themeIcon: '🌙',
    langIcon: '🇨🇳',
    langName: '中文'
  }
};

// Language cycle order
const languageOrder = ['en', 'vi', 'th', 'zh'];

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

  // Initialize theme and language from memory or defaults (no localStorage)
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
  
  // Create language dropdown
  createLanguageDropdown();
}

// Theme System
function initializeTheme() {
  // Use default theme (no localStorage)
  currentTheme = 'dark';
  document.body.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', currentTheme);
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

// Enhanced Language System
function initializeLanguage() {
  // Use default language (no localStorage)
  currentLanguage = 'en';
  updateLanguage();
  updateLanguageIcon();
}

function toggleLanguage() {
  // Cycle through all languages in order
  const currentIndex = languageOrder.indexOf(currentLanguage);
  const nextIndex = (currentIndex + 1) % languageOrder.length;
  currentLanguage = languageOrder[nextIndex];
  
  updateLanguage();
  updateLanguageIcon();
  updateLanguageDropdown();
}

function setLanguage(langCode) {
  if (languageOrder.includes(langCode)) {
    currentLanguage = langCode;
    updateLanguage();
    updateLanguageIcon();
    updateLanguageDropdown();
    hideLanguageDropdown();
  }
}

function updateLanguage() {
  const langElements = document.querySelectorAll('.lang');
  
  langElements.forEach(element => {
    const enText = element.getAttribute('data-en');
    const viText = element.getAttribute('data-vi');
    const thText = element.getAttribute('data-th');
    const zhText = element.getAttribute('data-zh');
    
    let textToShow = enText; // Default fallback
    
    switch(currentLanguage) {
      case 'en':
        if (enText) textToShow = enText;
        break;
      case 'vi':
        if (viText) textToShow = viText;
        break;
      case 'th':
        if (thText) textToShow = thText;
        break;
      case 'zh':
        if (zhText) textToShow = zhText;
        break;
    }
    
    if (textToShow) {
      element.innerHTML = textToShow;
    }
  });
}

function updateLanguageIcon() {
  const langIcon = document.getElementById('langIcon');
  if (langIcon) {
    const iconMap = {
      'en': '🇬🇧',
      'vi': '🇻🇳',
      'th': '🇹🇭',
      'zh': '🇨🇳'
    };
    langIcon.textContent = iconMap[currentLanguage] || '🇬🇧';
  }
}

// Language Dropdown System
function createLanguageDropdown() {
  const langButton = document.querySelector('[onclick*="toggleLanguage"]') || 
                    document.getElementById('langButton');
  
  if (!langButton) return;
  
  // Create dropdown container
  const dropdown = document.createElement('div');
  dropdown.id = 'languageDropdown';
  dropdown.className = 'language-dropdown';
  dropdown.innerHTML = `
    <div class="language-options">
      ${languageOrder.map(lang => `
        <div class="language-option" onclick="setLanguage('${lang}')" data-lang="${lang}">
          <span class="lang-flag">${translations[lang].langIcon}</span>
          <span class="lang-name">${translations[lang].langName}</span>
        </div>
      `).join('')}
    </div>
  `;
  
  // Insert dropdown after the language button
  langButton.parentNode.insertBefore(dropdown, langButton.nextSibling);
  
  // Add click handler to show/hide dropdown
  langButton.addEventListener('click', function(e) {
    e.stopPropagation();
    const isVisible = dropdown.classList.contains('show');
    if (isVisible) {
      hideLanguageDropdown();
    } else {
      showLanguageDropdown();
    }
  });
  
  // Hide dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target) && !langButton.contains(e.target)) {
      hideLanguageDropdown();
    }
  });
  
  // Add styles for dropdown
  addLanguageDropdownStyles();
}

function showLanguageDropdown() {
  const dropdown = document.getElementById('languageDropdown');
  if (dropdown) {
    dropdown.classList.add('show');
    updateLanguageDropdown();
  }
}

function hideLanguageDropdown() {
  const dropdown = document.getElementById('languageDropdown');
  if (dropdown) {
    dropdown.classList.remove('show');
  }
}

function updateLanguageDropdown() {
  const options = document.querySelectorAll('.language-option');
  options.forEach(option => {
    const lang = option.dataset.lang;
    if (lang === currentLanguage) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });
}

function addLanguageDropdownStyles() {
  const styles = document.createElement('style');
  styles.id = 'language-dropdown-styles';
  styles.textContent = `
    .language-dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s ease;
      margin-top: 8px;
    }
    
    .language-dropdown.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    
    .language-options {
      background: var(--card-bg, rgba(255, 255, 255, 0.1));
      backdrop-filter: blur(20px);
      border: 1px solid var(--border-color, rgba(255, 255, 255, 0.2));
      border-radius: 12px;
      padding: 8px;
      min-width: 150px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    
    .language-option {
      display: flex;
      align-items: center;
      padding: 10px 12px;
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.2s ease;
      color: var(--text-color, #ffffff);
    }
    
    .language-option:hover {
      background: var(--hover-bg, rgba(255, 255, 255, 0.1));
      transform: translateX(2px);
    }
    
    .language-option.active {
      background: var(--accent-color, #00d4ff);
      color: var(--accent-text, #000);
    }
    
    .lang-flag {
      font-size: 16px;
      margin-right: 10px;
    }
    
    .lang-name {
      font-size: 14px;
      font-weight: 500;
    }
    
    /* Dark theme adjustments */
    [data-theme="dark"] .language-options {
      background: rgba(0, 0, 0, 0.8);
      border-color: rgba(255, 255, 255, 0.1);
    }
    
    [data-theme="dark"] .language-option:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    
    /* Light theme adjustments */
    [data-theme="light"] .language-options {
      background: rgba(255, 255, 255, 0.9);
      border-color: rgba(0, 0, 0, 0.1);
      color: #333;
    }
    
    [data-theme="light"] .language-option {
      color: #333;
    }
    
    [data-theme="light"] .language-option:hover {
      background: rgba(0, 0, 0, 0.05);
    }
    
    /* Mobile responsive */
    @media (max-width: 768px) {
      .language-dropdown {
        position: fixed;
        top: auto;
        bottom: 80px;
        left: 50%;
        right: auto;
        transform: translateX(-50%) translateY(10px);
      }
      
      .language-dropdown.show {
        transform: translateX(-50%) translateY(0);
      }
      
      .language-options {
        min-width: 200px;
      }
    }
  `;
  document.head.appendChild(styles);
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
  
  // Hide language dropdown with Escape key
  if (e.key === 'Escape') {
    hideLanguageDropdown();
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
window.setLanguage = setLanguage;

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
