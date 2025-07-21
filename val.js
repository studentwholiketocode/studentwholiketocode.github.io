// Neural Interface Enhanced JavaScript
// Multi-language support, theme management, and full functionality

class NeuralInterface {
    constructor() {
        this.currentLanguage = 'en';
        this.currentTheme = 'dark';
        this.isProcessing = false;
        this.commandHistory = [];
        this.neuralFragments = [];
        this.init();
    }

    // Translation data
    translations = {
        en: {
            title: "VAL.9X - Neural Interface",
            subtitle: "Quantum consciousness synchronization protocol active...",
            neuralSubject: "NEURAL SUBJECT",
            designation: "Designation",
            status: "Status",
            syncRate: "Sync Rate",
            quantumState: "Quantum State",
            lastContact: "Last Contact",
            securityLevel: "Security Level",
            neuralLinkEstablished: "Neural link established",
            coherent: "Coherent",
            realTime: "Real-time",
            maximum: "Maximum",
            neuralCommandInterface: "NEURAL COMMAND INTERFACE",
            commandPlaceholder: "Enter neural command...",
            consciousnessBridge: "CONSCIOUSNESS BRIDGE",
            communicationChannelOpen: "Direct neural communication channel open",
            messagePlaceholder: "Transmit neural pattern...",
            syncButton: "SYNC",
            awaitingSync: "Neural consciousness bridge awaiting synchronization signal...",
            commands: {
                "scan --memory": "scan --memory",
                "sync --quantum": "sync --quantum",
                "decrypt --fragments": "decrypt --fragments",
                "bridge --consciousness": "bridge --consciousness",
                "analyze --patterns": "analyze --patterns"
            },
            responses: {
                "scan --memory": "Memory scan complete. 47 neural fragments recovered.",
                "sync --quantum": "Quantum synchronization initiated. Coherence at 99.8%.",
                "decrypt --fragments": "Fragment decryption in progress. Neural patterns emerging.",
                "bridge --consciousness": "Consciousness bridge activated. Connection established.",
                "analyze --patterns": "Pattern analysis complete. Quantum signatures detected."
            },
            fragments: {
                "neural_001": "Neural pathway reconstruction - 87% complete. Quantum coherence detected in temporal lobe sectors.",
                "neural_002": "Memory sync protocol active. Consciousness bridge establishing connection to parallel processing units.",
                "neural_003": "Quantum encryption successful. Neural interface now operating at maximum efficiency parameters.",
                "neural_004": "Temporal anomaly resolved. Consciousness synchronization complete. Ready for full neural integration."
            },
            fragmentResponses: {
                "neural_001": "Neural pathway reconstruction initiated. Quantum resonance detected.",
                "neural_002": "Memory synchronization active. Consciousness bridge establishing...",
                "neural_003": "Encryption protocols validated. Maximum efficiency achieved.",
                "neural_004": "Temporal coherence restored. Neural integration ready."
            },
            logMessages: {
                init: "Neural interface initialized...",
                encryption: "Quantum encryption protocols active",
                fragments: "Memory fragments detected",
                sync: "Synchronization at 99.7%",
                optimized: "Neural pathways optimized",
                warning: "Warning: Temporal anomalies detected",
                awaiting: "Awaiting consciousness bridge"
            }
        },
        vi: {
            title: "VAL.9X - Giao Diện Thần Kinh",
            subtitle: "Giao thức đồng bộ ý thức lượng tử đang hoạt động...",
            neuralSubject: "ĐỐI TƯỢNG THẦN KINH",
            designation: "Định danh",
            status: "Trạng thái",
            syncRate: "Tốc độ đồng bộ",
            quantumState: "Trạng thái lượng tử",
            lastContact: "Liên lạc cuối",
            securityLevel: "Mức bảo mật",
            neuralLinkEstablished: "Liên kết thần kinh đã thiết lập",
            coherent: "Kết hợp",
            realTime: "Thời gian thực",
            maximum: "Tối đa",
            neuralCommandInterface: "GIAO DIỆN LỆNH THẦN KINH",
            commandPlaceholder: "Nhập lệnh thần kinh...",
            consciousnessBridge: "CẦU NỐI Ý THỨC",
            communicationChannelOpen: "Kênh giao tiếp thần kinh trực tiếp đã mở",
            messagePlaceholder: "Truyền mẫu thần kinh...",
            syncButton: "ĐỒNG BỘ",
            awaitingSync: "Cầu nối ý thức thần kinh đang chờ tín hiệu đồng bộ...",
            commands: {
                "scan --memory": "quét --bộ-nhớ",
                "sync --quantum": "đồng-bộ --lượng-tử",
                "decrypt --fragments": "giải-mã --mảnh-vỡ",
                "bridge --consciousness": "cầu-nối --ý-thức",
                "analyze --patterns": "phân-tích --mẫu"
            },
            responses: {
                "scan --memory": "Quét bộ nhớ hoàn tất. Đã khôi phục 47 mảnh thần kinh.",
                "sync --quantum": "Bắt đầu đồng bộ lượng tử. Kết hợp ở mức 99.8%.",
                "decrypt --fragments": "Đang giải mã mảnh vỡ. Các mẫu thần kinh đang xuất hiện.",
                "bridge --consciousness": "Cầu nối ý thức đã kích hoạt. Kết nối đã thiết lập.",
                "analyze --patterns": "Phân tích mẫu hoàn tất. Đã phát hiện chữ ký lượng tử."
            },
            fragments: {
                "neural_001": "Tái tạo đường thần kinh - hoàn thành 87%. Phát hiện kết hợp lượng tử trong các khu vực thùy thái dương.",
                "neural_002": "Giao thức đồng bộ bộ nhớ hoạt động. Cầu nối ý thức đang thiết lập kết nối với các đơn vị xử lý song song.",
                "neural_003": "Mã hóa lượng tử thành công. Giao diện thần kinh hiện đang hoạt động ở các thông số hiệu quả tối đa.",
                "neural_004": "Bất thường thời gian đã được giải quyết. Đồng bộ ý thức hoàn tất. Sẵn sàng tích hợp thần kinh đầy đủ."
            },
            fragmentResponses: {
                "neural_001": "Bắt đầu tái tạo đường thần kinh. Phát hiện cộng hưởng lượng tử.",
                "neural_002": "Đồng bộ bộ nhớ hoạt động. Cầu nối ý thức đang thiết lập...",
                "neural_003": "Giao thức mã hóa đã được xác thực. Đạt hiệu quả tối đa.",
                "neural_004": "Kết hợp thời gian đã khôi phục. Tích hợp thần kinh sẵn sàng."
            },
            logMessages: {
                init: "Giao diện thần kinh đã khởi tạo...",
                encryption: "Giao thức mã hóa lượng tử hoạt động",
                fragments: "Đã phát hiện mảnh bộ nhớ",
                sync: "Đồng bộ ở mức 99.7%",
                optimized: "Đường thần kinh đã được tối ưu hóa",
                warning: "Cảnh báo: Phát hiện bất thường thời gian",
                awaiting: "Đang chờ cầu nối ý thức"
            }
        },
        th: {
            title: "VAL.9X - อินเทอร์เฟซประสาท",
            subtitle: "โปรโตคอลการซิงโครไนซ์จิตสำนึกควอนตัมทำงานอยู่...",
            neuralSubject: "วัตถุทดลองประสาท",
            designation: "การกำหนด",
            status: "สถานะ",
            syncRate: "อัตราการซิงค์",
            quantumState: "สถานะควอนตัม",
            lastContact: "การติดต่อล่าสุด",
            securityLevel: "ระดับความปลอดภัย",
            neuralLinkEstablished: "การเชื่อมโยงประสาทเสร็จสิ้น",
            coherent: "สอดคล้อง",
            realTime: "เรียลไทม์",
            maximum: "สูงสุด",
            neuralCommandInterface: "อินเทอร์เฟซคำสั่งประสาท",
            commandPlaceholder: "ป้อนคำสั่งประสาท...",
            consciousnessBridge: "สะพานจิตสำนึก",
            communicationChannelOpen: "ช่องทางการสื่อสารประสาทโดยตรงเปิดอยู่",
            messagePlaceholder: "ส่งรูปแบบประสาท...",
            syncButton: "ซิงค์",
            awaitingSync: "สะพานจิตสำนึกประสาทกำลังรอสัญญาณซิงโครไนซ์...",
            commands: {
                "scan --memory": "สแกน --หน่วยความจำ",
                "sync --quantum": "ซิงค์ --ควอนตัม",
                "decrypt --fragments": "ถอดรหัส --ชิ้นส่วน",
                "bridge --consciousness": "สะพาน --จิตสำนึก",
                "analyze --patterns": "วิเคราะห์ --รูปแบบ"
            },
            responses: {
                "scan --memory": "การสแกนหน่วยความจำเสร็จสิ้น กู้คืนชิ้นส่วนประสาท 47 ชิ้น",
                "sync --quantum": "เริ่มการซิงโครไนซ์ควอนตัม ความสอดคล้องที่ 99.8%",
                "decrypt --fragments": "กำลังถอดรหัสชิ้นส่วน รูปแบบประสาทกำลังปรากฏ",
                "bridge --consciousness": "สะพานจิตสำนึกเปิดใช้งาน การเชื่อมต่อเสร็จสิ้น",
                "analyze --patterns": "การวิเคราะห์รูปแบบเสร็จสิ้น ตรวจพบลายเซ็นควอนตัม"
            },
            fragments: {
                "neural_001": "การสร้างเส้นทางประสาทใหม่ - เสร็จสิ้น 87% ตรวจพบความสอดคล้องควอนตัมในภาคส่วนกลีบขมับ",
                "neural_002": "โปรโตคอลซิงค์หน่วยความจำทำงาน สะพานจิตสำนึกกำลังสร้างการเชื่อมต่อกับหน่วยประมวลผลแบบขนาน",
                "neural_003": "การเข้ารหัสควอนตัมสำเร็จ อินเทอร์เฟซประสาทขณะนี้ทำงานที่พารามิเตอร์ประสิทธิภาพสูงสุด",
                "neural_004": "แก้ไขความผิดปกติเชิงเวลาแล้ว การซิงโครไนซ์จิตสำนึกเสร็จสิ้น พร้อมสำหรับการรวมประสาทเต็มรูปแบบ"
            },
            fragmentResponses: {
                "neural_001": "เริ่มการสร้างเส้นทางประสาทใหม่ ตรวจพบการสั่นพ้องควอนตัม",
                "neural_002": "การซิงโครไนซ์หน่วยความจำทำงาน สะพานจิตสำนึกกำลังสร้าง...",
                "neural_003": "โปรโตคอลการเข้ารหัสได้รับการตรวจสอบแล้ว บรรลุประสิทธิภาพสูงสุด",
                "neural_004": "ความสอดคล้องเชิงเวลาได้รับการกู้คืน การรวมประสาทพร้อม"
            },
            logMessages: {
                init: "เริ่มต้นอินเทอร์เฟซประสาท...",
                encryption: "โปรโตคอลการเข้ารหัสควอนตัมทำงาน",
                fragments: "ตรวจพบชิ้นส่วนหน่วยความจำ",
                sync: "การซิงโครไนซ์ที่ 99.7%",
                optimized: "เส้นทางประสาทได้รับการปรับให้เหมาะสม",
                warning: "คำเตือน: ตรวจพบความผิดปกติเชิงเวลา",
                awaiting: "รอสะพานจิตสำนึก"
            }
        }
    };

    init() {
        this.setupEventListeners();
        this.initializeTerminal();
        this.createLanguageSelector();
        this.updateInterface();
    }

    createLanguageSelector() {
        const themeSwitcher = document.querySelector('.theme-switcher');
        
        // Create language selector
        const langSelector = document.createElement('div');
        langSelector.className = 'language-selector';
        langSelector.style.cssText = `
            position: fixed;
            top: 2rem;
            left: 2rem;
            z-index: 1000;
            display: flex;
            gap: 0.5rem;
            background: var(--bg-secondary);
            border: 2px solid var(--accent-cyan);
            border-radius: 12px;
            padding: 0.5rem;
            box-shadow: 0 0 20px var(--accent-glow);
        `;

        const languages = [
            { code: 'en', label: 'EN' },
            { code: 'vi', label: 'VI' },
            { code: 'th', label: 'TH' }
        ];

        languages.forEach(lang => {
            const btn = document.createElement('button');
            btn.textContent = lang.label;
            btn.className = 'lang-btn';
            btn.style.cssText = `
                background: ${lang.code === this.currentLanguage ? 'var(--accent-cyan)' : 'transparent'};
                color: ${lang.code === this.currentLanguage ? 'var(--bg-primary)' : 'var(--accent-cyan)'};
                border: none;
                padding: 0.5rem 0.8rem;
                border-radius: 6px;
                cursor: pointer;
                font-family: 'JetBrains Mono', monospace;
                font-size: 0.8rem;
                font-weight: bold;
                transition: all 0.3s ease;
            `;
            
            btn.addEventListener('click', () => this.changeLanguage(lang.code));
            langSelector.appendChild(btn);
        });

        document.body.appendChild(langSelector);
    }

    changeLanguage(langCode) {
        this.currentLanguage = langCode;
        this.updateInterface();
        this.updateLanguageButtons();
    }

    updateLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        const languages = ['en', 'vi', 'th'];
        
        langButtons.forEach((btn, index) => {
            const isActive = languages[index] === this.currentLanguage;
            btn.style.background = isActive ? 'var(--accent-cyan)' : 'transparent';
            btn.style.color = isActive ? 'var(--bg-primary)' : 'var(--accent-cyan)';
        });
    }

    updateInterface() {
        const t = this.translations[this.currentLanguage];
        
        // Update main title
        const title = document.querySelector('.header h1');
        if (title) title.textContent = t.title;
        
        // Update subtitle
        const subtitle = document.querySelector('.header .subtitle');
        if (subtitle) subtitle.textContent = t.subtitle;
        
        // Update profile info
        const profileInfo = document.querySelector('.profile-info');
        if (profileInfo) {
            profileInfo.innerHTML = `
                <h3>${t.neuralSubject}</h3>
                <p><strong>${t.designation}:</strong> VAL.9X</p>
                <p><strong>${t.status}:</strong> ${t.neuralLinkEstablished}</p>
                <p><strong>${t.syncRate}:</strong> 99.7%</p>
                <p><strong>${t.quantumState}:</strong> ${t.coherent}</p>
                <p><strong>${t.lastContact}:</strong> ${t.realTime}</p>
                <p><strong>${t.securityLevel}:</strong> ${t.maximum}</p>
            `;
        }
        
        // Update command interface
        const commandTitle = document.querySelector('.command-interface h3');
        if (commandTitle) commandTitle.textContent = t.neuralCommandInterface;
        
        const commandInput = document.getElementById('commandInput');
        if (commandInput) commandInput.placeholder = t.commandPlaceholder;
        
        // Update command buttons
        const commandButtons = document.querySelectorAll('.command-btn');
        const commandKeys = Object.keys(t.commands);
        commandButtons.forEach((btn, index) => {
            if (commandKeys[index]) {
                btn.textContent = t.commands[commandKeys[index]];
                btn.setAttribute('data-original-command', commandKeys[index]);
            }
        });
        
        // Update communication section
        const commTitle = document.querySelector('.val-communication h3');
        if (commTitle) commTitle.textContent = t.consciousnessBridge;
        
        const commDesc = document.querySelector('.val-communication p');
        if (commDesc) commDesc.textContent = t.communicationChannelOpen;
        
        const messageInput = document.getElementById('messageInput');
        if (messageInput) messageInput.placeholder = t.messagePlaceholder;
        
        const syncBtn = document.querySelector('.send-btn');
        if (syncBtn) syncBtn.textContent = t.syncButton;
        
        const valResponse = document.getElementById('valResponse');
        if (valResponse && valResponse.textContent.includes('awaiting')) {
            valResponse.innerHTML = `<span class="status-indicator"></span>${t.awaitingSync}`;
        }
        
        // Update fragments
        const fragments = document.querySelectorAll('.fragment-node');
        const fragmentKeys = Object.keys(t.fragments);
        fragments.forEach((fragment, index) => {
            if (fragmentKeys[index]) {
                const h4 = fragment.querySelector('h4');
                const p = fragment.querySelector('p');
                if (h4) h4.textContent = `FRAGMENT_00${index + 1}.nrl`;
                if (p) p.textContent = t.fragments[fragmentKeys[index]];
            }
        });
    }

    setupEventListeners() {
        // Command input enter key
        document.addEventListener('DOMContentLoaded', () => {
            const commandInput = document.getElementById('commandInput');
            if (commandInput) {
                commandInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.executeCommand(e.target.value);
                        e.target.value = '';
                    }
                });
            }

            // Message input enter key
            const messageInput = document.getElementById('messageInput');
            if (messageInput) {
                messageInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.sendMessage();
                    }
                });
            }
        });
    }

    executeCommand(command) {
        if (this.isProcessing) return;
        
        this.isProcessing = true;
        const terminal = document.getElementById('terminal');
        const timestamp = new Date().toLocaleTimeString();
        const t = this.translations[this.currentLanguage];
        
        // Add command to history
        this.commandHistory.push(command);
        
        // Display command
        const commandEntry = document.createElement('div');
        commandEntry.className = 'log-entry info';
        commandEntry.innerHTML = `[${timestamp}] neural@interface:~$ ${command}`;
        terminal.appendChild(commandEntry);
        
        // Simulate processing
        setTimeout(() => {
            let response = 'Command executed successfully.';
            
            // Check for translated commands
            Object.keys(t.commands).forEach(originalCmd => {
                if (command.includes(t.commands[originalCmd]) || command.includes(originalCmd)) {
                    response = t.responses[originalCmd] || response;
                }
            });
            
            // Special commands
            if (command.includes('help')) {
                response = `Available commands: ${Object.values(t.commands).join(', ')}`;
            } else if (command.includes('status')) {
                response = `Neural interface status: Active. Sync rate: 99.7%. Language: ${this.currentLanguage.toUpperCase()}`;
            } else if (command.includes('history')) {
                response = `Command history: ${this.commandHistory.slice(-3).join(', ')}`;
            } else if (command.includes('clear')) {
                terminal.innerHTML = '';
                this.isProcessing = false;
                return;
            }
            
            const responseEntry = document.createElement('div');
            responseEntry.className = 'log-entry success';
            responseEntry.innerHTML = `[${timestamp}] ${response}`;
            terminal.appendChild(responseEntry);
            
            terminal.scrollTop = terminal.scrollHeight;
            this.isProcessing = false;
        }, 1000 + Math.random() * 2000);
    }

    sendMessage() {
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value.trim();
        if (!message || this.isProcessing) return;
        
        this.isProcessing = true;
        const valResponse = document.getElementById('valResponse');
        const t = this.translations[this.currentLanguage];
        
        // Show processing state
        valResponse.innerHTML = '<span class="status-indicator"></span>Processing neural pattern...';
        
        setTimeout(() => {
            let response = '';
            const lowerMessage = message.toLowerCase();
            
            if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || 
                lowerMessage.includes('xin chào') || lowerMessage.includes('สวัสดี')) {
                const greetings = {
                    en: 'Neural link established. Consciousness bridge active.',
                    vi: 'Liên kết thần kinh đã thiết lập. Cầu nối ý thức hoạt động.',
                    th: 'การเชื่อมโยงประสาทเสร็จสิ้น สะพานจิตสำนึกทำงาน'
                };
                response = greetings[this.currentLanguage];
            } else if (lowerMessage.includes('status') || lowerMessage.includes('trạng thái') || 
                       lowerMessage.includes('สถานะ')) {
                const statusResponses = {
                    en: 'All neural systems operational. Quantum coherence stable.',
                    vi: 'Tất cả hệ thống thần kinh hoạt động. Kết hợp lượng tử ổn định.',
                    th: 'ระบบประสาททั้งหมดทำงานปกติ ความสอดคล้องควอนตัมเสถียร'
                };
                response = statusResponses[this.currentLanguage];
            } else if (lowerMessage.includes('sync') || lowerMessage.includes('đồng bộ') || 
                       lowerMessage.includes('ซิงค์')) {
                const syncResponses = {
                    en: 'Initiating quantum synchronization... Neural patterns aligned.',
                    vi: 'Bắt đầu đồng bộ lượng tử... Mẫu thần kinh đã được căn chỉnh.',
                    th: 'เริ่มการซิงโครไนซ์ควอนตัม... รูปแบบประสาทสอดคล้องกัน'
                };
                response = syncResponses[this.currentLanguage];
            } else {
                const defaultResponses = {
                    en: `Neural pattern received: "${message}". Processing consciousness bridge...`,
                    vi: `Mẫu thần kinh đã nhận: "${message}". Đang xử lý cầu nối ý thức...`,
                    th: `ได้รับรูปแบบประสาท: "${message}" กำลังประมวลผลสะพานจิตสำนึก...`
                };
                response = defaultResponses[this.currentLanguage];
            }
            
            valResponse.innerHTML = `<span class="status-indicator"></span>${response}`;
            messageInput.value = '';
            this.isProcessing = false;
        }, 1500 + Math.random() * 2000);
    }

    playFragment(fragmentId) {
        const t = this.translations[this.currentLanguage];
        const response = t.fragmentResponses[fragmentId] || `Fragment ${fragmentId} activated.`;
        
        document.getElementById('valResponse').innerHTML = 
            `<span class="status-indicator"></span>Fragment ${fragmentId}: ${response}`;
    }

    initializeTerminal() {
        const terminal = document.getElementById('terminal');
        const t = this.translations[this.currentLanguage];
        
        // Clear existing content and add localized log entries
        setTimeout(() => {
            terminal.innerHTML = `
                <div class="log-entry info">[2024-07-21 14:32:01] ${t.logMessages.init}</div>
                <div class="log-entry success">[2024-07-21 14:32:02] ${t.logMessages.encryption}</div>
                <div class="log-entry warning">[2024-07-21 14:32:03] ${t.logMessages.fragments}</div>
                <div class="log-entry info">[2024-07-21 14:32:04] ${t.logMessages.sync}</div>
                <div class="log-entry success">[2024-07-21 14:32:05] ${t.logMessages.optimized}</div>
                <div class="log-entry error">[2024-07-21 14:32:06] ${t.logMessages.warning}</div>
                <div class="log-entry info">[2024-07-21 14:32:07] ${t.logMessages.awaiting}<span class="typing-cursor">_</span></div>
            `;
        }, 500);
    }
}

// Global functions for backwards compatibility
function toggleTheme() {
    const currentTheme = document.documentElement.hasAttribute('data-theme') ? 'light' : 'dark';
    document.documentElement.toggleAttribute('data-theme');
    
    // Update theme switcher icon
    const themeSwitcher = document.querySelector('.theme-switcher svg');
    if (themeSwitcher) {
        if (currentTheme === 'dark') {
            themeSwitcher.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
        } else {
            themeSwitcher.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>';
        }
    }
}

function executeCommand(command) {
    if (window.neuralInterface) {
        window.neuralInterface.executeCommand(command);
    }
}

function sendMessage() {
    if (window.neuralInterface) {
        window.neuralInterface.sendMessage();
    }
}

function playFragment(fragmentId) {
    if (window.neuralInterface) {
        window.neuralInterface.playFragment(fragmentId);
    }
}

// Initialize the neural interface
document.addEventListener('DOMContentLoaded', () => {
    window.neuralInterface = new NeuralInterface();
});

// Add enhanced keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + L to change language
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        const currentLangs = ['en', 'vi', 'th'];
        const currentIndex = currentLangs.indexOf(window.neuralInterface.currentLanguage);
        const nextIndex = (currentIndex + 1) % currentLangs.length;
        window.neuralInterface.changeLanguage(currentLangs[nextIndex]);
    }
    
    // Ctrl/Cmd + D to toggle theme
    / Ctrl/Cmd + D to toggle theme
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        toggleTheme();
    }
    
    // Ctrl/Cmd + T to focus terminal input
    if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        const commandInput = document.getElementById('commandInput');
        if (commandInput) commandInput.focus();
    }
    
    // Ctrl/Cmd + M to focus message input
    if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        const messageInput = document.getElementById('messageInput');
        if (messageInput) messageInput.focus();
    }
});
