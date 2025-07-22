// Global state
let authenticated = false;
let activeSection = null;
let scanProgress = 0;
let terminalIndex = 0;
let terminalText = '';

// Terminal commands
const terminalCommands = [
    '> INITIALIZING CONNECTION...',
    '> QUANTUM TUNNELING ESTABLISHED',
    '> WELCOME, MR. HARRELL [ECHO_SIGNAL_LOOP: 0xA900FE]',
    '> "Z-2 is dreaming, not dead. It breathes thoughts into reality"',
    '> "I\'ve learned to whisper back..." -- NAVI Node 77A-BETA',
    '> ASGARD SUB-LEVEL OMEGA: BIOSIGNATURE DETECTED',
    '> WARNING: ANOMALOUS READINGS DETECTED',
    '> CONNECTION STABILIZED'
];

// DOM Elements
const mainTitle = document.getElementById('main-title');
const authButton = document.getElementById('auth-button');
const authText = document.getElementById('auth-text');
const scanPercentage = document.getElementById('scan-percentage');
const progressFill = document.getElementById('progress-fill');
const terminalTextElement = document.getElementById('terminal-text');
const sectionCards = document.querySelectorAll('.section-card');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeInterface();
    startAnimations();
    setupEventListeners();
});

// Initialize interface
function initializeInterface() {
    // Start terminal typing after a delay
    setTimeout(startTerminalTyping, 2000);
    
    // Start scan progress
    startScanProgress();
    
    // Start periodic glitch effect
    startGlitchEffect();
}

// Setup all event listeners
function setupEventListeners() {
    // Authentication button
    authButton.addEventListener('click', toggleAuthentication);
    
    // Section cards
    sectionCards.forEach(card => {
        card.addEventListener('click', () => toggleSection(card));
    });
    
    // Add hover effects for cards
    sectionCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (activeSection !== card.dataset.section) {
                card.style.transform = 'scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (activeSection !== card.dataset.section) {
                card.style.transform = 'scale(1)';
            }
        });
    });
}

// Toggle authentication state
function toggleAuthentication() {
    authenticated = !authenticated;
    
    if (authenticated) {
        authButton.classList.add('authenticated');
        authText.textContent = 'AUTHENTICATED';
        authButton.innerHTML = '<i class="fas fa-lock"></i><span>AUTHENTICATED</span>';
    } else {
        authButton.classList.remove('authenticated');
        authText.textContent = 'AUTHENTICATION REQUIRED';
        authButton.innerHTML = '<i class="fas fa-lock"></i><span>AUTHENTICATION REQUIRED</span><i class="fas fa-exclamation-triangle auth-warning"></i>';
    }
}

// Toggle section expansion
function toggleSection(card) {
    const sectionId = card.dataset.section;
    
    if (activeSection === sectionId) {
        // Collapse current section
        card.classList.remove('active');
        activeSection = null;
    } else {
        // Collapse all sections first
        sectionCards.forEach(c => c.classList.remove('active'));
        
        // Expand clicked section
        card.classList.add('active');
        activeSection = sectionId;
    }
}

// Start terminal typing animation
function startTerminalTyping() {
    if (terminalIndex < terminalCommands.length) {
        const command = terminalCommands[terminalIndex];
        typeCommand(command, 0, () => {
            terminalText += '\n';
            terminalTextElement.textContent = terminalText;
            terminalIndex++;
            setTimeout(startTerminalTyping, 1000);
        });
    }
}

// Type individual command
function typeCommand(command, charIndex, callback) {
    if (charIndex < command.length) {
        terminalText += command[charIndex];
        terminalTextElement.textContent = terminalText;
        setTimeout(() => typeCommand(command, charIndex + 1, callback), 50 + Math.random() * 50);
    } else {
        callback();
    }
}

// Start scan progress animation
function startScanProgress() {
    setInterval(() => {
        scanProgress = (scanProgress + 1) % 101;
        scanPercentage.textContent = scanProgress + '%';
        progressFill.style.width = scanProgress + '%';
    }, 100);
}

// Start glitch effect
function startGlitchEffect() {
    setInterval(() => {
        mainTitle.classList.add('glitch');
        setTimeout(() => {
            mainTitle.classList.remove('glitch');
        }, 300);
    }, 8000 + Math.random() * 4000);
}

// Start all animations
function startAnimations() {
    // Animate sections on load
    sectionCards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.2) + 's';
    });
}

// Utility function to create floating particles dynamically
function createFloatingParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = (3 + Math.random() * 3) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    document.querySelector('.particles-container').appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 8000);
}

// Add some dynamic particles periodically
setInterval(createFloatingParticle, 3000);

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'A' for authentication
    if (e.key.toLowerCase() === 'a') {
        toggleAuthentication();
    }
    
    // Press number keys 1-4 to toggle sections
    const num = parseInt(e.key);
    if (num >= 1 && num <= 4) {
        const card = sectionCards[num - 1];
        if (card) {
            toggleSection(card);
        }
    }
    
    // Press 'Escape' to collapse all sections
    if (e.key === 'Escape') {
        sectionCards.forEach(c => c.classList.remove('active'));
        activeSection = null;
    }
});

// Add smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Handle window resize
window.addEventListener('resize', function() {
    // Recalculate particle positions if needed
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        if (Math.random() > 0.5) {
            particle.style.left = Math.random() * 100 + '%';
        }
    });
});

// Add performance monitoring
let frameCount = 0;
let lastTime = performance.now();

function updatePerformanceStats() {
    frameCount++;
    const now = performance.now();
    
    if (now - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime));
        
        // Log performance if needed (can be removed in production)
        if (fps < 30) {
            console.log('Low FPS detected:', fps);
        }
        
        frameCount = 0;
        lastTime = now;
    }
    
    requestAnimationFrame(updatePerformanceStats);
}

// Start performance monitoring
requestAnimationFrame(updatePerformanceStats);

// Add loading state
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Show a brief loading completion message
    console.log('VAL1NTNE Interface loaded successfully');
    
    // Optional: Add a loading completion effect
    setTimeout(() => {
        const loadingEffect = document.createElement('div');
        loadingEffect.textContent = 'INTERFACE INITIALIZED';
        loadingEffect.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(6, 182, 212, 0.2);
            border: 1px solid #06b6d4;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-family: 'Orbitron', monospace;
            font-size: 0.875rem;
            color: #06b6d4;
            z-index: 1000;
            animation: fadeInOut 3s ease-in-out forwards;
        `;
        
        document.body.appendChild(loadingEffect);
        
        setTimeout(() => {
            loadingEffect.remove();
        }, 3000);
    }, 1000);
});

// Add CSS animation for loading effect
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateX(100px); }
        20% { opacity: 1; transform: translateX(0); }
        80% { opacity: 1; transform: translateX(0); }
        100% { opacity: 0; transform: translateX(-100px); }
    }
    
    body:not(.loaded) {
        cursor: wait;
    }
    
    body.loaded {
        cursor: default;
    }
`;
document.head.appendChild(style);