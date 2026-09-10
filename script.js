/* ==========================================================================
   CINEMATIC SCI-FI COMMAND CENTER SCRIPT
   Developer: K G Ravi Teja Gowda | AI/ML & Cloud Security
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. DATA REPOSITORIES
// --------------------------------------------------------------------------

const SKILLS_DATA = [
  // AI/ML
  { name: 'Machine Learning', cat: 'aiml', level: 90, icon: 'fa-solid fa-brain' },
  { name: 'Deep Learning (TensorFlow/Keras)', cat: 'aiml', level: 85, icon: 'fa-solid fa-network-wired' },
  { name: 'Computer Vision (OpenCV/Pillow)', cat: 'aiml', level: 82, icon: 'fa-solid fa-eye' },
  { name: 'Natural Language Processing (NLP)', cat: 'aiml', level: 88, icon: 'fa-solid fa-comments' },
  { name: 'Vector Databases', cat: 'aiml', level: 80, icon: 'fa-solid fa-database' },

  // Cloud & Security
  { name: 'Microsoft Azure Fundamentals', cat: 'cloud', level: 88, icon: 'fa-brands fa-microsoft' },
  { name: 'Azure IAM & Access Control', cat: 'cloud', level: 85, icon: 'fa-solid fa-key' },
  { name: 'Network Security Groups (NSG)', cat: 'cloud', level: 82, icon: 'fa-solid fa-shield-halved' },
  { name: 'Cybersecurity Fundamentals', cat: 'cloud', level: 84, icon: 'fa-solid fa-lock' },
  { name: 'GitHub & Version Control', cat: 'cloud', level: 90, icon: 'fa-brands fa-github' },

  // Full Stack
  { name: 'Python (Flask / Django)', cat: 'fullstack', level: 94, icon: 'fa-brands fa-python' },
  { name: 'Java (Spring Boot / Hibernate)', cat: 'fullstack', level: 85, icon: 'fa-brands fa-java' },
  { name: 'JavaScript (ES6+) & React', cat: 'fullstack', level: 86, icon: 'fa-brands fa-react' },
  { name: 'HTML5 & CSS3 Glassmorphic Design', cat: 'fullstack', level: 90, icon: 'fa-brands fa-html5' },
  { name: 'Node.js & Express REST APIs', cat: 'fullstack', level: 82, icon: 'fa-brands fa-node-js' },

  // Core CS
  { name: 'Data Structures & Algorithms', cat: 'cs', level: 88, icon: 'fa-solid fa-diagram-project' },
  { name: 'Object-Oriented Programming (OOP)', cat: 'cs', level: 92, icon: 'fa-solid fa-cubes' },
  { name: 'System Design & REST Architecture', cat: 'cs', level: 84, icon: 'fa-solid fa-sitemap' },
  { name: 'Linux OS & Shell Scripting', cat: 'cs', level: 90, icon: 'fa-brands fa-linux' },
  { name: 'Relational DBMS & SQL Queries', cat: 'cs', level: 88, icon: 'fa-solid fa-database' },

  // Tools
  { name: 'VS Code & Jupyter Notebooks', cat: 'tools', level: 95, icon: 'fa-solid fa-code' },
  { name: 'SQLite & SQLAlchemy ORM', cat: 'tools', level: 88, icon: 'fa-solid fa-hard-drive' },
  { name: 'PostgreSQL Database', cat: 'tools', level: 84, icon: 'fa-solid fa-server' },
  { name: 'C Programming', cat: 'tools', level: 80, icon: 'fa-solid fa-c' }
];

const PROJECT_CASE_FILES = {
  'career-stimulator': {
    title: 'Career Stimulator',
    code: 'LOG_ID: ML-01 // REST_API_BACKEND',
    status: 'DEPLOYED & VERIFIED',
    summary: 'High-performance RESTful API backend designed for career data analytics, student path optimization, and secure user data handling.',
    stack: ['Python', 'REST API', 'SQLite', 'Token Authentication', 'Input Validation', 'Security Protocols'],
    details: `
      <h4><i class="fa-solid fa-shield-halved cyan-text"></i> Architectural Overview</h4>
      <p style="margin-bottom: 12px; color: var(--text-muted);">
        The Career Stimulator backend provides a structured API pipeline that processes career assessment metrics while enforcing strict cloud security principles. Built with Python, it utilizes token-based session management and parameter sanitization to protect user credentials against SQL injection and cross-site scripting vulnerabilities.
      </p>

      <h4><i class="fa-solid fa-list-check cyan-text"></i> Key System Deliverables</h4>
      <ul style="margin-bottom: 16px; padding-left: 20px; color: var(--text-muted); line-height: 1.7;">
        <li>Implemented OAuth2/JWT token authentication flow for granular identity verification.</li>
        <li>Architected lightweight SQLite schema with optimized indexes for low-latency queries.</li>
        <li>Integrated input validation schemas using strictly typed request payload parsers.</li>
        <li>Designed RESTful endpoints adhering to HTTP security header specifications.</li>
      </ul>

      <div class="hud-panel" style="padding: 16px; background: rgba(0,240,255,0.04);">
        <span class="mono cyan-text" style="font-size: 0.8rem;">TELEMETRY METRICS:</span>
        <div style="display: flex; justify-content: space-between; margin-top: 8px; font-family: var(--font-mono); font-size: 0.82rem;">
          <span>AVG API LATENCY: &lt; 45ms</span>
          <span>AUTH SUCCESS RATE: 99.9%</span>
          <span>SECURITY SCORE: GRADE A</span>
        </div>
      </div>
    `
  },
  'green-elixir': {
    title: 'Green Elixir Vision (Ayurveda AI Chatbot)',
    code: 'LOG_ID: ML-02 // RETRIEVAL_AI',
    status: 'ACTIVE AI DEPLOYMENT',
    summary: 'A retrieval-based AI recommendation system mapping natural language health symptoms to traditional Ayurvedic remedies with an interactive botanical knowledge base.',
    stack: ['Python', 'Flask', 'React', 'PostgreSQL', 'NLP Engine', 'Vector Search', 'Ayurvedic KB'],
    details: `
      <h4><i class="fa-solid fa-brain cyan-text"></i> Intelligent NLP Architecture</h4>
      <p style="margin-bottom: 12px; color: var(--text-muted);">
        Green Elixir Vision leverages Natural Language Processing (NLP) to parse user symptom queries and match them against an indexed knowledge base of medicinal plants. The application pairs a React frontend dashboard with a Flask REST microservice backed by PostgreSQL.
      </p>

      <h4><i class="fa-solid fa-list-check cyan-text"></i> Key System Deliverables</h4>
      <ul style="margin-bottom: 16px; padding-left: 20px; color: var(--text-muted); line-height: 1.7;">
        <li>Engineered a custom symptom extraction algorithm using tokenization, lemmatization, and TF-IDF similarity vectors.</li>
        <li>Built an interactive React search console allowing users to filter plants by chemical compounds and therapeutic properties.</li>
        <li>Structured a normalized relational PostgreSQL database indexing over 500+ botanical species and remedies.</li>
        <li>Deployed responsive API routes handling concurrent symptom recommendation payloads.</li>
      </ul>

      <div class="hud-panel" style="padding: 16px; background: rgba(123,92,255,0.06);">
        <span class="mono violet-text" style="font-size: 0.8rem;">MODEL TELEMETRY:</span>
        <div style="display: flex; justify-content: space-between; margin-top: 8px; font-family: var(--font-mono); font-size: 0.82rem;">
          <span>SYMPTOM ACCURACY: 94.2%</span>
          <span>KNOWLEDGE BASE: 500+ BOTANICALS</span>
          <span>RESPONSE TIME: 120ms</span>
        </div>
      </div>
    `
  }
};

// --------------------------------------------------------------------------
// 2. AUDIO SYNTHESIZER (WEB AUDIO API)
// --------------------------------------------------------------------------
class AudioSynth {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playTone(freq, type = 'sine', duration = 0.08) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  playBlip() { this.playTone(800, 'sine', 0.05); }
  playClick() { this.playTone(1200, 'triangle', 0.04); }
  playBoot() {
    this.playTone(440, 'sine', 0.1);
    setTimeout(() => this.playTone(880, 'sine', 0.15), 100);
  }
}

const soundManager = new AudioSynth();

// Toggle SFX Button
document.addEventListener('DOMContentLoaded', () => {
  const sfxBtn = document.getElementById('sfx-btn');
  const sfxIcon = document.getElementById('sfx-icon');

  if (sfxBtn) {
    sfxBtn.addEventListener('click', () => {
      soundManager.init();
      soundManager.enabled = !soundManager.enabled;
      if (soundManager.enabled) {
        sfxBtn.classList.add('active');
        sfxBtn.style.borderColor = 'var(--cyan-bright)';
        sfxBtn.style.color = 'var(--cyan-bright)';
        sfxIcon.className = 'fa-solid fa-volume-high';
        sfxBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> SFX: ON`;
        soundManager.playBoot();
      } else {
        sfxBtn.classList.remove('active');
        sfxBtn.style.borderColor = 'var(--border-light)';
        sfxBtn.style.color = 'var(--text-muted)';
        sfxIcon.className = 'fa-solid fa-volume-xmark';
        sfxBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i> SFX: OFF`;
      }
    });
  }
});

// --------------------------------------------------------------------------
// 3. BACKGROUND CANVAS PARTICLE NETWORK
// --------------------------------------------------------------------------
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 18), 70);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 1,
      color: Math.random() > 0.4 ? 'rgba(0, 240, 255, ' : 'rgba(123, 92, 255, '
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse influence
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.x -= (dx / dist) * 0.5;
        p.y -= (dy / dist) * 0.5;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.7)';
      ctx.fill();

      // Connect particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const distP = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
        if (distP < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - distP / 110)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

// --------------------------------------------------------------------------
// 4. TYPEWRITER BOOT SEQUENCE
// --------------------------------------------------------------------------
function initBootTypewriter() {
  const container = document.getElementById('hero-typewriter');
  if (!container) return;

  const lines = [
    "> SYSTEM_BOOT_SEQUENCE_INITIALIZED...",
    "> ALLOCATING_NEURAL_RESOURCES...",
    "> LOADING_SECURITY_MODULES [AZ-900 // RH124-134]...",
    "> EXEC: initializing_ravi_teja.exe",
    "> STATUS: OPERATIONAL // BENGALURU COMMAND CENTER"
  ];

  let lineIdx = 0;
  let charIdx = 0;

  function typeLine() {
    if (lineIdx >= lines.length) return;

    const currentLineText = lines[lineIdx];
    if (charIdx === 0) {
      const p = document.createElement('div');
      p.id = `boot-line-${lineIdx}`;
      container.appendChild(p);
    }

    const targetLine = document.getElementById(`boot-line-${lineIdx}`);
    if (targetLine) {
      targetLine.textContent = currentLineText.substring(0, charIdx + 1);
      soundManager.playClick();
    }

    charIdx++;
    if (charIdx < currentLineText.length) {
      setTimeout(typeLine, 25);
    } else {
      lineIdx++;
      charIdx = 0;
      setTimeout(typeLine, 200);
    }
  }

  setTimeout(typeLine, 300);
}

// --------------------------------------------------------------------------
// 5. UTC / LIVE CLOCK ENGINE
// --------------------------------------------------------------------------
function updateTelemetryClock() {
  const clockEl = document.getElementById('utc-clock');
  if (!clockEl) return;

  function tick() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const mins = String(now.getUTCMinutes()).padStart(2, '0');
    const secs = String(now.getUTCSeconds()).padStart(2, '0');
    clockEl.textContent = `UTC ${hours}:${mins}:${secs}`;
  }

  tick();
  setInterval(tick, 1000);
}

// --------------------------------------------------------------------------
// 6. SKILLS RENDERER & FILTER ENGINE
// --------------------------------------------------------------------------
function renderSkills(filter = 'all') {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = '';

  const filtered = filter === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.cat === filter);

  filtered.forEach((skill, idx) => {
    const card = document.createElement('div');
    card.className = 'hud-panel skill-card';
    card.setAttribute('data-category', skill.cat);

    card.innerHTML = `
      <div class="hud-corner-tl"></div>
      <div class="skill-header">
        <div class="skill-title-group">
          <div class="skill-icon"><i class="${skill.icon}"></i></div>
          <div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-cat">${skill.cat.toUpperCase()} MODULE</div>
          </div>
        </div>
        <span class="mono cyan-text" style="font-size: 0.85rem; font-weight: 700;">${skill.level}%</span>
      </div>
      <div class="skill-bar-container">
        <div class="skill-bar-fill" style="width: 0%;" data-target="${skill.level}%"></div>
      </div>
    `;

    container.appendChild(card);
  });

  // Animate skill bars
  setTimeout(() => {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      bar.style.width = bar.getAttribute('data-target');
    });
  }, 100);
}

function initSkillsFilter() {
  renderSkills('all');

  const filterBtns = document.querySelectorAll('.skills-filter .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      soundManager.playBlip();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderSkills(cat);
    });
  });
}

// --------------------------------------------------------------------------
// 7. PROJECT MODAL DRAWER
// --------------------------------------------------------------------------
function openProjectModal(projectId) {
  soundManager.playBlip();
  const modal = document.getElementById('project-modal');
  const contentArea = document.getElementById('modal-content-area');
  const project = PROJECT_CASE_FILES[projectId];

  if (!modal || !contentArea || !project) return;

  const stackTags = project.stack.map(t => `<span class="project-tag">${t}</span>`).join('');

  contentArea.innerHTML = `
    <button class="modal-close-btn" onclick="closeProjectModal()"><i class="fa-solid fa-xmark"></i></button>
    
    <span class="project-status-badge" style="position: static; display: inline-block; margin-bottom: 12px;">${project.status}</span>
    <div class="project-code">${project.code}</div>
    <h2 class="project-title" style="font-size: 1.8rem; margin-bottom: 8px;">${project.title}</h2>
    <p class="project-tagline" style="margin-bottom: 16px;">${project.summary}</p>
    
    <div class="project-tags" style="margin-bottom: 24px;">${stackTags}</div>

    <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">
      ${project.details}
    </div>

    <div style="margin-top: 28px; display: flex; justify-content: flex-end;">
      <button class="btn-primary" onclick="closeProjectModal()"><i class="fa-solid fa-check"></i> Close Case File</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal(event) {
  if (event && event.target !== event.currentTarget && !event.target.classList.contains('modal-backdrop')) {
    return;
  }
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

// --------------------------------------------------------------------------
// 8. INTERACTIVE CLI TERMINAL ENGINE
// --------------------------------------------------------------------------
function initInteractiveCLI() {
  const cliInput = document.getElementById('cli-input');
  const cliOutput = document.getElementById('cli-output');
  if (!cliInput || !cliOutput) return;

  const COMMANDS = {
    'help': `Available Commands:
  • whoami     : Print personnel dossier summary
  • skills     : List key technical capabilities
  • projects   : View active mission logs
  • clearances : Show security & certification badges
  • contact    : Display communication channels
  • clear      : Clear console buffer
  • matrix     : Initiate neural matrix scan`,
    
    'whoami': `PERSONNEL DOSSIER: K G Ravi Teja Gowda
Role: AI/ML & Cloud Security Engineer
Location: Bengaluru, Karnataka, India
Education: B.E. AI & ML (BITM, CGPA 8.7)
Clearances: Azure AZ-900 | Linux RH124-134`,
    
    'skills': `THE ARSENAL:
[AI/ML]      Python, TensorFlow, Keras, OpenCV, NLP, Vector DBs
[CLOUD]      Microsoft Azure, Azure IAM, NSG, Cybersecurity
[FULLSTACK]  React, Node.js, Spring Boot, Flask, Django, SQL
[CORE CS]    DSA, OOP, System Design, Linux Shell`,

    'projects': `MISSION LOGS:
1. Career Stimulator    : REST API backend with SQLite & Token Auth.
2. Green Elixir Vision  : NLP Ayurvedic Chatbot & Plant Database.`,

    'clearances': `SECURITY CLEARANCE BADGES:
✓ Microsoft Azure Fundamentals (AZ-900)
✓ Linux Systems Administration (RH124–RH134)
✓ Python Programming (EZTS)
✓ Google Cloud Gen-AI Track
✓ Deep Learning Specialization (DeepLearning.AI)`,

    'contact': `OPEN CHANNELS:
Email: kgraviteja7@gmail.com
Phone: +91 7676800511
GitHub: https://github.com/raviteja0007
LinkedIn: Connected via web link`
  };

  cliInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = cliInput.value.trim().toLowerCase();
      soundManager.playClick();
      
      // Print input line
      const inputLine = document.createElement('div');
      inputLine.className = 'cli-output-line';
      inputLine.innerHTML = `<span class="cli-prompt">raviteja@command-center:~$</span> ${cliInput.value}`;
      cliOutput.appendChild(inputLine);

      // Process command
      if (cmd === 'clear') {
        cliOutput.innerHTML = '';
      } else if (cmd === 'matrix') {
        const matrixLine = document.createElement('div');
        matrixLine.className = 'cli-output-line cyan-text';
        matrixLine.textContent = '[!] NEURAL MATRIX SCAN INITIATED... 01001001 01001110 01001001 01010100';
        cliOutput.appendChild(matrixLine);
      } else if (COMMANDS[cmd]) {
        const resLine = document.createElement('div');
        resLine.className = 'cli-output-line';
        resLine.textContent = COMMANDS[cmd];
        cliOutput.appendChild(resLine);
      } else if (cmd !== '') {
        const errLine = document.createElement('div');
        errLine.className = 'cli-output-line amber-text';
        errLine.textContent = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
        cliOutput.appendChild(errLine);
      }

      cliInput.value = '';
      cliOutput.scrollTop = cliOutput.scrollHeight;
    }
  });
}

// --------------------------------------------------------------------------
// 9. TOAST NOTIFICATION & COPY HELPER
// --------------------------------------------------------------------------
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${message}`;

  container.appendChild(toast);
  soundManager.playBlip();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function copyContact(val, label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(val).then(() => {
      showToast(`${label} copied to clipboard: ${val}`);
    }).catch(() => {
      showToast(`Copy action: ${val}`);
    });
  } else {
    showToast(`Copy action: ${val}`);
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  soundManager.playBlip();
  showToast('TRANSMISSION BROADCASTED SUCCESSFUL! Standby for reply.');
  document.getElementById('transmission-form').reset();
}

// --------------------------------------------------------------------------
// 10. SCROLL OBSERVER & NAVIGATION
// --------------------------------------------------------------------------
function initMobileNav() {
  const mobileBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (!mobileBtn || !navMenu) return;

  mobileBtn.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('mobile-open');
    });
  });
}

function initScrollObserver() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}

// --------------------------------------------------------------------------
// INITIALIZE APPLICATION
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initBootTypewriter();
  updateTelemetryClock();
  initSkillsFilter();
  initInteractiveCLI();
  initMobileNav();
  initScrollObserver();
});
