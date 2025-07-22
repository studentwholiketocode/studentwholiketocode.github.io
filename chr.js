// N.A.V.I Database - JavaScript Logic
// Neural Archive & Virtual Intelligence

// Language translations
const translations = {
  en: {
    dashboard: "Dashboard",
    characters: "Characters",
    monsters: "Monsters",
    locations: "Locations",
    archive: "Archive",
    theme: "Theme",
    "database-online": "N.A.V.I Database Online - All systems operational",
    "view-profile": "View Profile",
    "edit-character": "Edit Character",
    classification: "Classification",
    "threat-level": "Threat Level",
    status: "Status",
    location: "Location",
    experience: "Experience",
    missions: "Missions",
    publications: "Publications",
    clearance: "Clearance",
    specialty: "Specialty",
  },
  vi: {
    dashboard: "Bảng Điều Khiển",
    characters: "Nhân Vật",
    monsters: "Quái Vật",
    locations: "Địa Điểm",
    archive: "Kho Lưu Trữ",
    theme: "Giao Diện",
    "database-online":
      "N.A.V.I Database Trực Tuyến - Tất cả hệ thống hoạt động",
    "view-profile": "Xem Hồ Sơ",
    "edit-character": "Chỉnh Sửa",
    classification: "Phân Loại",
    "threat-level": "Mức Độ Nguy Hiểm",
    status: "Trạng Thái",
    location: "Vị Trí",
    experience: "Kinh Nghiệm",
    missions: "Nhiệm Vụ",
    publications: "Bài Báo",
    clearance: "Cấp Độ Bảo Mật",
    specialty: "Chuyên Môn",
  },
};

// Character database
const characters = [
  {
    id: 1,
    name: "Mr. Harrel",
    role: "Senior Field Agent",
    description:
      "A highly experienced field operative with expertise in [REDACTED]. Known for his analytical mind and unwavering dedication to [REDACTED]",
    classification: "Human",
    threatLevel: "[REDACTED]",
    status: "Active",
    location: "Site-Alpha",
    tags: [
      "Founder",
      "Field Agent",
      "Veteran",
      "Tactical Expert",
      "Containment Specialist",
    ],
    stats: {
      experience: "15 Years",
      missions: "247",
      clearance: "Level 7",
      specialty: "Containment",
    },
    avatar: "fas fa-user-tie",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    name: "Dr. Elena Voss",
    role: "Research Director",
    description:
      "Leading researcher in paranormal phenomena with a PhD in Theoretical Physics and Parapsychology. Specializes in dimensional anomalies and temporal distortions. Her groundbreaking research has led to major breakthroughs in understanding anomalous objects.",
    classification: "Human",
    threatLevel: "Minimal",
    status: "Active",
    location: "Research Lab-7",
    tags: [
      "Scientist",
      "Researcher",
      "Physics Expert",
      "Theorist",
      "Department Head",
    ],
    stats: {
      experience: "12 Years",
      publications: "89",
      clearance: "Level 5",
      specialty: "Research",
    },
    avatar: "fas fa-user-graduate",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    name: "Agent Sarah Chen",
    role: "Digital Intelligence Specialist",
    description:
      "Expert in cyber-paranormal phenomena and digital anomalies. Specializes in tracking and neutralizing technologically-enhanced supernatural entities. Former NSA cybersecurity analyst turned paranormal investigator.",
    classification: "Human",
    threatLevel: "Minimal",
    status: "Active",
    location: "Cyber Division",
    tags: [
      "Cyber Expert",
      "Digital Forensics",
      "Tech Specialist",
      "Former NSA",
    ],
    stats: {
      experience: "8 Years",
      missions: "156",
      clearance: "Level 3",
      specialty: "Cyber-Paranormal",
    },
    avatar: "fas fa-laptop-code",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    id: 4,
    name: "Commander Viktor Petrov",
    role: "Mobile Task Force Leader",
    description:
      "Former Spetsnaz operative now leading elite Mobile Task Force Epsilon-11. Specialized in high-risk containment operations and anomalous entity neutralization. Known for his tactical brilliance and unwavering courage under extreme pressure.",
    classification: "Human",
    threatLevel: "Low",
    status: "Active",
    location: "MTF Base-Alpha",
    tags: [
      "Military",
      "Task Force Leader",
      "Ex-Spetsnaz",
      "Tactical Commander",
    ],
    stats: {
      experience: "18 Years",
      missions: "312",
      clearance: "Level 4",
      specialty: "Combat Operations",
    },
    avatar: "fas fa-user-shield",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
];

// Application state
let currentLang = "en";
let currentTheme = "dark";
let isLoading = false;

// Initialize application when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 N.A.V.I Database initializing...");
  initializeApp();
  renderCharacters();
  setupEventListeners();
  console.log("✅ N.A.V.I Database initialized successfully");
});

/**
 * Initialize the application
 */
function initializeApp() {
  // Set initial theme
  document.body.setAttribute("data-theme", currentTheme);
  updateThemeIcon();

  // Update initial language
  updateLanguage();

  // Add startup animation
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 100);
}

/**
 * Render character cards to the grid
 */
function renderCharacters() {
  const grid = document.getElementById("characterGrid");
  if (!grid) return;

  // Show loading state
  showLoadingState(grid);

  // Simulate loading delay for better UX
  setTimeout(() => {
    grid.innerHTML = "";

    characters.forEach((character, index) => {
      const characterCard = createCharacterCard(character, index);
      grid.appendChild(characterCard);
    });

    // Animate cards in with staggered delay
    const cards = grid.querySelectorAll(".character-card");
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.15}s`;
      card.classList.add("animate-in");
    });

    console.log(`📋 Rendered ${characters.length} character cards`);
  }, 800);
}

/**
 * Show loading state in the grid
 */
function showLoadingState(grid) {
  grid.innerHTML = `
        <div class="loading col-12">
            <div class="spinner"></div>
            <div style="margin-left: 1rem; color: #6b7280;">Loading N.A.V.I Database...</div>
        </div>
    `;
}

/**
 * Create a character card element
 */
function createCharacterCard(character, index) {
  const card = document.createElement("div");
  card.className = "character-card";
  card.style.animationDelay = `${index * 0.1}s`;

  // Determine stat display based on character type
  const primaryStat = character.stats.missions ? "missions" : "publications";
  const primaryStatLabel = character.stats.missions
    ? "Missions"
    : "Publications";
  const primaryStatValue = character.stats[primaryStat];

  card.innerHTML = `
        <div class="character-avatar" style="background: ${
          character.gradient || "var(--secondary-gradient)"
        }">
            <i class="${character.avatar}"></i>
        </div>
        <div class="character-info">
            <h3 class="character-name">${character.name}</h3>
            <p class="character-role">${character.role}</p>
            <div class="character-tags">
                ${character.tags
                  .slice(0, 3)
                  .map((tag) => `<span class="tag">${tag}</span>`)
                  .join("")}
            </div>
            <div class="character-stats">
                <div class="stat">
                    <span class="stat-label" data-translate="${primaryStat}">${primaryStatLabel}</span>
                    <span class="stat-value">${primaryStatValue}</span>
                </div>
                <div class="stat">
                    <span class="stat-label" data-translate="clearance">Clearance</span>
                    <span class="stat-value">${character.stats.clearance}</span>
                </div>
            </div>
            <div class="character-status">
                <span class="status-indicator ${character.status.toLowerCase()}"></span>
                <span class="status-text">${character.status}</span>
                <span class="location">${character.location}</span>
            </div>
        </div>
        <div class="character-actions">
            <button class="btn btn-primary btn-sm" onclick="viewProfile(${
              character.id
            })">
                <i class="fas fa-eye"></i>
                <span data-translate="view-profile">View Profile</span>
            </button>
            <button class="btn btn-secondary btn-sm" onclick="editCharacter(${
              character.id
            })">
                <i class="fas fa-edit"></i>
                <span data-translate="edit-character">Edit</span>
            </button>
        </div>
    `;

  return card;
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Theme toggle
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Language toggle
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", toggleLanguage);
  }

  // Navigation items
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const section = e.currentTarget.getAttribute("data-section");
      if (section) {
        navigateToSection(section);
      }
    });
  });

  // Search functionality
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }

  // Add keyboard shortcuts
  document.addEventListener("keydown", handleKeyboardShortcuts);
}

/**
 * Toggle theme between light and dark
 */
function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", currentTheme);
  updateThemeIcon();

  // Add theme transition effect
  document.body.style.transition =
    "background-color 0.3s ease, color 0.3s ease";
  setTimeout(() => {
    document.body.style.transition = "";
  }, 300);

  console.log(`🎨 Theme switched to ${currentTheme}`);
}

/**
 * Update theme icon
 */
function updateThemeIcon() {
  const themeIcon = document.querySelector("#themeToggle i");
  if (themeIcon) {
    themeIcon.className =
      currentTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }
}

/**
 * Toggle language between English and Vietnamese
 */
function toggleLanguage() {
  currentLang = currentLang === "en" ? "vi" : "en";
  updateLanguage();
  console.log(`🌐 Language switched to ${currentLang.toUpperCase()}`);
}

/**
 * Update all translatable elements
 */
function updateLanguage() {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[currentLang] && translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
}

/**
 * Navigate to different sections
 */
function navigateToSection(section) {
  // Update active navigation
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    if (item.getAttribute("data-section") === section) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Show appropriate content
  switch (section) {
    case "dashboard":
      showDashboard();
      break;
    case "characters":
      showCharacters();
      break;
    case "monsters":
      showMonsters();
      break;
    case "locations":
      showLocations();
      break;
    case "archive":
      showArchive();
      break;
    default:
      showCharacters();
  }

  console.log(`📍 Navigated to ${section}`);
}

/**
 * Show dashboard content
 */
function showDashboard() {
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    mainContent.innerHTML = `
            <div class="dashboard-stats">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="stat-info">
                        <h3>${characters.length}</h3>
                        <p>Active Personnel</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="stat-info">
                        <h3>4</h3>
                        <p>Containment Sites</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <div class="stat-info">
                        <h3>0</h3>
                        <p>Active Threats</p>
                    </div>
                </div>
            </div>
            <div class="recent-activity">
                <h2>Recent Activity</h2>
                <div class="activity-list">
                    <div class="activity-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Mr. Harrel completed Mission #247</span>
                        <small>2 hours ago</small>
                    </div>
                    <div class="activity-item">
                        <i class="fas fa-file-alt"></i>
                        <span>Dr. Elena Voss published research paper</span>
                        <small>5 hours ago</small>
                    </div>
                    <div class="activity-item">
                        <i class="fas fa-user-plus"></i>
                        <span>New personnel clearance granted</span>
                        <small>1 day ago</small>
                    </div>
                </div>
            </div>
        `;
  }
}

/**
 * Show characters section
 */
function showCharacters() {
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    mainContent.innerHTML = `
            <div class="section-header">
                <div class="search-container">
                    <i class="fas fa-search"></i>
                    <input type="text" id="searchInput" placeholder="Search characters...">
                </div>
                <div class="filter-controls">
                    <select id="statusFilter">
                        <option value="">All Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    <select id="clearanceFilter">
                        <option value="">All Clearance</option>
                        <option value="level-3">Level 3</option>
                        <option value="level-4">Level 4</option>
                        <option value="level-7">Level 7</option>
                    </select>
                </div>
            </div>
            <div class="characters-grid" id="characterGrid">
                <!-- Characters will be rendered here -->
            </div>
        `;
    renderCharacters();
    setupSearchAndFilters();
  }
}

/**
 * Setup search and filter functionality
 */
function setupSearchAndFilters() {
  const searchInput = document.getElementById("searchInput");
  const statusFilter = document.getElementById("statusFilter");
  const clearanceFilter = document.getElementById("clearanceFilter");

  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }

  if (statusFilter) {
    statusFilter.addEventListener("change", applyFilters);
  }

  if (clearanceFilter) {
    clearanceFilter.addEventListener("change", applyFilters);
  }
}

/**
 * Handle search input
 */
function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".character-card");

  cards.forEach((card) => {
    const name = card
      .querySelector(".character-name")
      .textContent.toLowerCase();
    const role = card
      .querySelector(".character-role")
      .textContent.toLowerCase();
    const tags = Array.from(card.querySelectorAll(".tag"))
      .map((tag) => tag.textContent.toLowerCase())
      .join(" ");

    const isVisible =
      name.includes(searchTerm) ||
      role.includes(searchTerm) ||
      tags.includes(searchTerm);

    card.style.display = isVisible ? "block" : "none";

    if (isVisible && searchTerm) {
      card.classList.add("search-highlight");
    } else {
      card.classList.remove("search-highlight");
    }
  });
}

/**
 * Apply filters
 */
function applyFilters() {
  // Implementation for filtering by status and clearance
  const statusFilter = document.getElementById("statusFilter")?.value;
  const clearanceFilter = document.getElementById("clearanceFilter")?.value;

  console.log("Applying filters:", {
    status: statusFilter,
    clearance: clearanceFilter,
  });
}

/**
 * Show monsters section (placeholder)
 */
function showMonsters() {
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    mainContent.innerHTML = `
            <div class="coming-soon">
                <i class="fas fa-dragon"></i>
                <h2>Monsters Database</h2>
                <p>Comprehensive database of anomalous entities and creatures coming soon...</p>
            </div>
        `;
  }
}

/**
 * Show locations section (placeholder)
 */
function showLocations() {
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    mainContent.innerHTML = `
            <div class="coming-soon">
                <i class="fas fa-map-marker-alt"></i>
                <h2>Locations Database</h2>
                <p>Secure site locations and anomalous areas documentation coming soon...</p>
            </div>
        `;
  }
}

/**
 * Show archive section (placeholder)
 */
function showArchive() {
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    mainContent.innerHTML = `
            <div class="coming-soon">
                <i class="fas fa-archive"></i>
                <h2>Archive System</h2>
                <p>Historical records and classified documents archive coming soon...</p>
            </div>
        `;
  }
}

/**
 * View character profile
 */
function viewProfile(characterId) {
  const character = characters.find((c) => c.id === characterId);
  if (!character) return;

  if (character.id === 1) {
    // Redirect to specific page for character ID 1
    window.location.href = "hazzel.html";
    return;
  }

  // Default behavior for others
  showCharacterModal(character);
  console.log(`👤 Viewing profile for ${character.name}`);
}

/**
 * Show character modal
 */
function showCharacterModal(character) {
  // Create modal overlay
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `
        <div class="modal-content character-modal">
            <div class="modal-header">
                <div class="character-avatar-large" style="background: ${
                  character.gradient
                }">
                    <i class="${character.avatar}"></i>
                </div>
                <div class="character-title">
                    <h2>${character.name}</h2>
                    <p>${character.role}</p>
                </div>
                <button class="modal-close" onclick="closeModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="character-details">
                    <div class="detail-section">
                        <h3>Classification</h3>
                        <div class="detail-grid">
                            <div class="detail-item">
                                <span class="label">Classification:</span>
                                <span class="value">${
                                  character.classification
                                }</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Threat Level:</span>
                                <span class="value threat-${character.threatLevel.toLowerCase()}">${
    character.threatLevel
  }</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Status:</span>
                                <span class="value status-${character.status.toLowerCase()}">${
    character.status
  }</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Location:</span>
                                <span class="value">${character.location}</span>
                            </div>
                        </div>
                    </div>
                    <div class="detail-section">
                        <h3>Description</h3>
                        <p>${character.description}</p>
                    </div>
                    <div class="detail-section">
                        <h3>Statistics</h3>
                        <div class="stats-grid">
                            ${Object.entries(character.stats)
                              .map(
                                ([key, value]) => `
                                <div class="stat-item">
                                    <span class="stat-label">${
                                      key.charAt(0).toUpperCase() + key.slice(1)
                                    }:</span>
                                    <span class="stat-value">${value}</span>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="detail-section">
                        <h3>Tags</h3>
                        <div class="tags-container">
                            ${character.tags
                              .map((tag) => `<span class="tag">${tag}</span>`)
                              .join("")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  document.body.appendChild(modal);

  // Animate modal in
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

/**
 * Edit character
 */
function editCharacter(characterId) {
  console.log(`✏️ Editing character ${characterId}`);
  // Implementation for character editing would go here
  alert("Character editing functionality coming soon!");
}

/**
 * Close modal
 */
function closeModal() {
  const modal = document.querySelector(".modal-overlay");
  if (modal) {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
}

/**
 * Handle keyboard shortcuts
 */
function handleKeyboardShortcuts(e) {
  // Ctrl/Cmd + K for search
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.focus();
    }
  }

  // Escape to close modals
  if (e.key === "Escape") {
    closeModal();
  }

  // Number keys for navigation
  if (e.key >= "1" && e.key <= "5") {
    const sections = [
      "dashboard",
      "characters",
      "monsters",
      "locations",
      "archive",
    ];
    const sectionIndex = parseInt(e.key) - 1;
    if (sections[sectionIndex]) {
      navigateToSection(sections[sectionIndex]);
    }
  }
}

/**
 * Utility function to format dates
 */
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Utility function to generate random ID
 */
function generateId() {
  return Date.now() + Math.random().toString(36).substr(2, 9);
}

/**
 * Export data function
 */
function exportData() {
  const data = {
    characters: characters,
    timestamp: new Date().toISOString(),
    version: "1.0",
  };

  const dataStr = JSON.stringify(data, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(dataBlob);
  link.download = "navi-database-export.json";
  link.click();

  console.log("📤 Database exported successfully");
}

// Initialize on load
console.log("N.A.V.I Database JavaScript loaded successfully ✅");
// Expose functions to global scope for easy access
window.viewProfile = viewProfile;
window.editCharacter = editCharacter;
window.closeModal = closeModal;
window.handleKeyboardShortcuts = handleKeyboardShortcuts;
window.exportData = exportData;
// Expose utility functions
window.formatDate = formatDate;
window.generateId = generateId;
// Expose language and theme functions
window.toggleLanguage = toggleLanguage;
window.toggleTheme = toggleTheme;
window.navigateToSection = navigateToSection;
// Expose search functionality
window.handleSearch = handleSearch;
// Expose character rendering
window.renderCharacters = renderCharacters;
// Expose modal functions
window.showCharacterModal = showCharacterModal;
// Expose filter functionality
window.applyFilters = applyFilters;
// Expose initialization function
window.initializeApp = initializeApp;
// Expose export function
window.exportData = exportData;
