// Search functionality
const searchInput = document.querySelector('.search-container input');
const searchButton = document.querySelector('.search-container button');

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
        // In a real implementation, this would connect to a backend search API
        alert(`Searching for: ${query}`);
        // You would typically make an API call here and display results
    }
}

// Mobile navigation toggle
const header = document.querySelector('.usa-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Service card hover effects
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add accessibility features
document.querySelectorAll('button, a').forEach(element => {
    if (!element.getAttribute('aria-label')) {
        const text = element.textContent.trim();
        if (text) {
            element.setAttribute('aria-label', text);
        }
    }
});

// Add loading state to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.disabled = true;
        
        // Only add loading state if the button isn't the search button
        if (!this.closest('.search-container')) {
            this.innerHTML = 'Loading...';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 1500);
        }
    });
});

// Security tab navigation
document.addEventListener('DOMContentLoaded', () => {
    const securityLink = document.querySelector('a[href="#security"]');
    const mainContent = document.querySelector('main');
    
    if (securityLink && mainContent) {
        securityLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create security content
            const securityContent = `
                <div class="security-main">
                    <section class="security-header">
                        <h2>Security Protocols</h2>
                        <p class="classification">CLASSIFICATION LEVEL: LEVEL 3 CLEARANCE REQUIRED</p>
                    </section>

                    <section class="security-overview">
                        <div class="overview-container">
                            <h3>Current Security Status</h3>
                            <div class="security-stats">
                                <div class="stat-card">
                                    <i class="fas fa-shield-alt"></i>
                                    <h4>Security Level</h4>
                                    <p>MAXIMUM</p>
                                </div>
                                <div class="stat-card">
                                    <i class="fas fa-user-shield"></i>
                                    <h4>Active Personnel</h4>
                                    <p>[REDACTED]</p>
                                </div>
                                <div class="stat-card">
                                    <i class="fas fa-door-closed"></i>
                                    <h4>Containment Status</h4>
                                    <p>SECURE</p>
                                </div>
                                <div class="stat-card">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <h4>Threat Level</h4>
                                    <p>ELEVATED</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="security-protocols">
                        <div class="protocols-container">
                            <h3>Active Security Protocols</h3>
                            
                            <div class="protocol-grid">
                                <div class="protocol-card">
                                    <div class="protocol-header">
                                        <i class="fas fa-id-card"></i>
                                        <h4>Access Control</h4>
                                    </div>
                                    <ul class="protocol-list">
                                        <li>Biometric verification required</li>
                                        <li>Multi-factor authentication</li>
                                        <li>Regular credential audits</li>
                                        <li>Access level restrictions</li>
                                        <li>Visitor escort protocols</li>
                                    </ul>
                                </div>

                                <div class="protocol-card">
                                    <div class="protocol-header">
                                        <i class="fas fa-video"></i>
                                        <h4>Surveillance</h4>
                                    </div>
                                    <ul class="protocol-list">
                                        <li>24/7 CCTV monitoring</li>
                                        <li>Motion detection systems</li>
                                        <li>Thermal imaging cameras</li>
                                        <li>Automated anomaly detection</li>
                                        <li>Behavioral analysis AI</li>
                                    </ul>
                                </div>

                                <div class="protocol-card">
                                    <div class="protocol-header">
                                        <i class="fas fa-radiation"></i>
                                        <h4>Containment</h4>
                                    </div>
                                    <ul class="protocol-list">
                                        <li>Multiple containment barriers</li>
                                        <li>Automated lockdown systems</li>
                                        <li>Emergency neutralization</li>
                                        <li>Backup power systems</li>
                                        <li>Scranton Reality Anchors</li>
                                    </ul>
                                </div>

                                <div class="protocol-card">
                                    <div class="protocol-header">
                                        <i class="fas fa-user-secret"></i>
                                        <h4>Information Security</h4>
                                    </div>
                                    <ul class="protocol-list">
                                        <li>Data encryption protocols</li>
                                        <li>Secure communication lines</li>
                                        <li>Document classification</li>
                                        <li>Information compartmentalization</li>
                                        <li>Amnestics authorization</li>
                                    </ul>
                                </div>

                                <div class="protocol-card">
                                    <div class="protocol-header">
                                        <i class="fas fa-users"></i>
                                        <h4>Personnel Security</h4>
                                    </div>
                                    <ul class="protocol-list">
                                        <li>Background screening</li>
                                        <li>Psychological evaluation</li>
                                        <li>Loyalty assessment</li>
                                        <li>Regular security training</li>
                                        <li>Containment protocols</li>
                                    </ul>
                                </div>

                                <div class="protocol-card">
                                    <div class="protocol-header">
                                        <i class="fas fa-network-wired"></i>
                                        <h4>Network Security</h4>
                                    </div>
                                    <ul class="protocol-list">
                                        <li>Air-gapped systems</li>
                                        <li>Intrusion detection</li>
                                        <li>Quantum encryption</li>
                                        <li>Regular penetration testing</li>
                                        <li>Automated threat response</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="emergency-procedures">
                        <div class="protocols-container">
                            <h3>Emergency Response Protocols</h3>
                            
                            <div class="protocol-grid">
                                <div class="protocol-card">
                                    <div class="protocol-header">
                                        <i class="fas fa-radiation-alt"></i>
                                        <h4>Containment Breach</h4>
                                    </div>
                                    <ul class="protocol-list">
                                        <li>Initiate site-wide lockdown</li>
                                        <li>Deploy MTF units</li>
                                        <li>Activate on-site warheads</li>
                                        <li>Begin evacuation procedures</li>
                                        <li>Execute Protocol ΩK-Class</li>
                                    </ul>
                                </div>

                                <div class="protocol-card">
                                    <div class="protocol-header">
                                        <i class="fas fa-virus"></i>
                                        <h4>Biological Hazard</h4>
                                    </div>
                                    <ul class="protocol-list">
                                        <li>Initiate quarantine</li>
                                        <li>Deploy decontamination</li>
                                        <li>Activate air filtration</li>
                                        <li>Medical team deployment</li>
                                        <li>Contact trace protocol</li>
                                    </ul>
                                </div>

                                <div class="protocol-card">
                                    <div class="protocol-header">
                                        <i class="fas fa-user-ninja"></i>
                                        <h4>Security Breach</h4>
                                    </div>
                                    <ul class="protocol-list">
                                        <li>Lock down all sectors</li>
                                        <li>Deploy security teams</li>
                                        <li>Activate countermeasures</li>
                                        <li>Begin personnel sweep</li>
                                        <li>Initiate Code Black</li>
                                    </ul>
                                </div>

                                <div class="protocol-card">
                                    <div class="protocol-header">
                                        <i class="fas fa-skull"></i>
                                        <h4>Site Compromise</h4>
                                    </div>
                                    <ul class="protocol-list">
                                        <li>Initialize data purge</li>
                                        <li>Activate self-destruct</li>
                                        <li>Deploy cover story</li>
                                        <li>Begin amnestics protocol</li>
                                        <li>Execute Protocol ██████</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="security-reminders">
                        <div class="reminder-box">
                            <i class="fas fa-exclamation-triangle"></i>
                            <div class="reminder-content">
                                <h4>SECURITY REMINDER</h4>
                                <p>All personnel are required to maintain strict adherence to security protocols. Failure to comply will result in immediate termination and administration of Class-A amnestics. Remember: Secure. Contain. Protect.</p>
                            </div>
                        </div>
                    </section>
                </div>
            `;
            
            // Save current scroll position
            const scrollPosition = window.pageYOffset;
            
            // Update main content
            mainContent.innerHTML = securityContent;
            
            // Restore scroll position
            window.scrollTo(0, scrollPosition);
            
            // Update URL without page reload
            history.pushState(null, '', '#security');
        });
    }
});

// Research tab navigation
document.addEventListener('DOMContentLoaded', () => {
    const researchLink = document.querySelector('a[href="#research"]');
    const mainContent = document.querySelector('main');
    
    if (researchLink && mainContent) {
        researchLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create research content
            const researchContent = `
                <div class="research-main">
                    <section class="research-header">
                        <h2>Research Division</h2>
                        <p class="research-classification">CLASSIFICATION LEVEL: LEVEL 4 CLEARANCE REQUIRED</p>
                    </section>

                    <section class="research-overview">
                        <div class="research-container">
                            <h3>Research Status Overview</h3>
                            <div class="research-stats">
                                <div class="research-stat-card">
                                    <i class="fas fa-flask"></i>
                                    <h4>Active Projects</h4>
                                    <p>[REDACTED]</p>
                                </div>
                                <div class="research-stat-card">
                                    <i class="fas fa-vial"></i>
                                    <h4>Test Subjects</h4>
                                    <p>███</p>
                                </div>
                                <div class="research-stat-card">
                                    <i class="fas fa-microscope"></i>
                                    <h4>Research Sites</h4>
                                    <p>17</p>
                                </div>
                                <div class="research-stat-card">
                                    <i class="fas fa-atom"></i>
                                    <h4>Anomalies Studied</h4>
                                    <p>[DATA EXPUNGED]</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="research-documents">
                        <div class="research-container">
                            <h3>Current Research Initiatives</h3>
                            <div class="research-grid">
                                <div class="research-card">
                                    <div class="research-card-header">
                                        <i class="fas fa-dna"></i>
                                        <h4>Anomalous Biology</h4>
                                    </div>
                                    <ul class="research-list">
                                        <li>Genetic mutation studies</li>
                                        <li>Anomalous regeneration</li>
                                        <li>Biological containment</li>
                                        <li>Species classification</li>
                                        <li>Metamorphic analysis</li>
                                    </ul>
                                </div>

                                <div class="research-card">
                                    <div class="research-card-header">
                                        <i class="fas fa-brain"></i>
                                        <h4>Cognitive Studies</h4>
                                    </div>
                                    <ul class="research-list">
                                        <li>Memetic research</li>
                                        <li>Psychic phenomena</li>
                                        <li>Consciousness transfer</li>
                                        <li>Mental containment</li>
                                        <li>Cognitive hazards</li>
                                    </ul>
                                </div>

                                <div class="research-card">
                                    <div class="research-card-header">
                                        <i class="fas fa-cube"></i>
                                        <h4>Reality Bending</h4>
                                    </div>
                                    <ul class="research-list">
                                        <li>Spatial anomalies</li>
                                        <li>Temporal distortions</li>
                                        <li>Reality anchors</li>
                                        <li>Dimensional studies</li>
                                        <li>Causality research</li>
                                    </ul>
                                </div>

                                <div class="research-card">
                                    <div class="research-card-header">
                                        <i class="fas fa-robot"></i>
                                        <h4>Artificial Intelligence</h4>
                                    </div>
                                    <ul class="research-list">
                                        <li>Machine consciousness</li>
                                        <li>Digital containment</li>
                                        <li>AI development</li>
                                        <li>Pattern analysis</li>
                                        <li>Autonomous systems</li>
                                    </ul>
                                </div>

                                <div class="research-card">
                                    <div class="research-card-header">
                                        <i class="fas fa-magic"></i>
                                        <h4>Thaumatology</h4>
                                    </div>
                                    <ul class="research-list">
                                        <li>Occult phenomena</li>
                                        <li>Ritual studies</li>
                                        <li>Artifact analysis</li>
                                        <li>Energy manipulation</li>
                                        <li>Paranormal events</li>
                                    </ul>
                                </div>

                                <div class="research-card">
                                    <div class="research-card-header">
                                        <i class="fas fa-virus"></i>
                                        <h4>Containment Science</h4>
                                    </div>
                                    <ul class="research-list">
                                        <li>Material development</li>
                                        <li>Barrier technology</li>
                                        <li>Suppression fields</li>
                                        <li>Containment procedures</li>
                                        <li>Emergency protocols</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="research-documents">
                        <div class="research-container">
                            <h3>Recent Research Documents</h3>
                            <div class="document-grid">
                                <div class="document-card">
                                    <div class="document-header">
                                        <i class="fas fa-file-alt"></i>
                                        <h4>Project Lazarus</h4>
                                    </div>
                                    <div class="document-meta">
                                        Classification: Level 5 | Date: [REDACTED]
                                    </div>
                                    <div class="document-description">
                                        Research into [DATA EXPUNGED] resulting in ████████████ instances of spontaneous ██████████.
                                    </div>
                                </div>

                                <div class="document-card">
                                    <div class="document-header">
                                        <i class="fas fa-file-alt"></i>
                                        <h4>Operation Kronos</h4>
                                    </div>
                                    <div class="document-meta">
                                        Classification: Level 4 | Status: Ongoing
                                    </div>
                                    <div class="document-description">
                                        Investigation of temporal anomalies affecting ███████ subjects across multiple containment sites.
                                    </div>
                                </div>

                                <div class="document-card">
                                    <div class="document-header">
                                        <i class="fas fa-file-alt"></i>
                                        <h4>Protocol Prometheus</h4>
                                    </div>
                                    <div class="document-meta">
                                        Classification: Level 4 | Phase: Testing
                                    </div>
                                    <div class="document-description">
                                        Development of new containment procedures for Class ████ reality-bending entities.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="research-warning">
                        <div class="warning-box">
                            <i class="fas fa-radiation"></i>
                            <div class="warning-content">
                                <h4>RESEARCH PROTOCOL REMINDER</h4>
                                <p>All research activities must strictly adhere to containment protocols. Unauthorized experimentation will result in immediate termination. Remember: Knowledge serves containment.</p>
                            </div>
                        </div>
                    </section>
                </div>
            `;
            
            // Save current scroll position
            const scrollPosition = window.pageYOffset;
            
            // Update main content
            mainContent.innerHTML = researchContent;
            
            // Restore scroll position
            window.scrollTo(0, scrollPosition);
            
            // Update URL without page reload
            history.pushState(null, '', '#research');
        });
    }
});

// SCP-005 Key Handler
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    const keyIcon = document.querySelector('.social-links .fa-key').parentElement;
    
    if (keyIcon && mainContent) {
        keyIcon.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create SCP-005 content
            const scp005Content = `
                <div class="scp-005-container">
                    <div class="scp-005-header">
                        <h2 class="scp-005-title">SCP-005</h2>
                        <div class="scp-005-classification">Object Class: Safe</div>
                    </div>

                    <div class="scp-005-content">
                        <div class="scp-005-section">
                            <h3>Special Containment Procedures</h3>
                            <p>SCP-005 is to be stored in a standard humanoid containment cell at Site-19. Access to SCP-005 requires two (2) Level 4 personnel and explicit written approval from Dr. ████████. Testing of SCP-005 may only be performed on Class D personnel with prior approval from Dr. ████████.</p>
                        </div>

                        <div class="scp-005-section">
                            <h3>Description</h3>
                            <p>SCP-005 appears to be a small, unremarkable key of standard size, made of brass. The key has been tested on various doors and locks, and appears to be able to open any lock which it can be inserted into, including electronic locks and those requiring specific patterns or combinations.</p>
                            <img src="key-redacted.png" alt="[REDACTED]" class="scp-005-image">
                            <p>Testing has shown that SCP-005 is able to unlock:</p>
                            <ul>
                                <li>Standard pin tumbler locks</li>
                                <li>Deadbolts</li>
                                <li>Combination locks</li>
                                <li>Electronic keypads</li>
                                <li>Biometric security systems</li>
                                <li>[DATA EXPUNGED]</li>
                            </ul>
                        </div>

                        <div class="scp-005-warning">
                            WARNING: Any unauthorized personnel attempting to access or test SCP-005 will face immediate termination.
                        </div>

                        <div class="scp-005-section">
                            <h3>Addendum 005-1</h3>
                            <p>Testing has revealed that SCP-005's anomalous properties extend beyond simple mechanical operation. The key appears to temporarily alter its physical structure to match any locking mechanism it encounters. Duration of this alteration: [REDACTED]</p>
                        </div>

                        <div class="scp-005-section">
                            <h3>Addendum 005-2</h3>
                            <p>Incident Report 005-A: During testing on ██/██/████, D-Class personnel D-14342 attempted to use SCP-005 on [REDACTED]. Results: [DATA EXPUNGED]. New containment procedures implemented.</p>
                        </div>

                        <div class="scp-005-section">
                            <h3>Recovery Log</h3>
                            <p>SCP-005 was recovered from ███████ ████, ██ following reports of unauthorized access to multiple high-security facilities in the area. Foundation agents intercepted and contained the object after a series of coordinated breaches at [REDACTED].</p>
                        </div>

                        <div class="scp-005-section">
                            <h3>Test Log 005-1</h3>
                            <p>Test #005-1A: Standard Door Lock<br>
                            Result: Success. Key adapted and unlocked mechanism in 2.3 seconds.</p>
                            
                            <p>Test #005-1B: High Security Vault<br>
                            Result: Success. Key required [REDACTED] seconds to adapt.</p>
                            
                            <p>Test #005-1C: Experimental Containment Lock<br>
                            Result: [DATA EXPUNGED]</p>
                        </div>

                        <div class="scp-005-section">
                            <h3>Incident Reports</h3>
                            <p>██/██/20██: Breach attempt by unauthorized personnel. Subject terminated.<br>
                            ██/██/20██: Containment breach during testing. [REDACTED]<br>
                            ██/██/20██: Attempted theft by Group of Interest "███ ████". Prevented.</p>
                        </div>
                    </div>

                    <div class="scp-005-footer">
                        <p>Document #005-III-1</p>
                        <p>Clearance Level 4 Required</p>
                        <p>Last Updated: ██/██/20██</p>
                        <a href="#" class="scp-005-back-btn" id="scp005BackBtn">Return to Database</a>
                    </div>
                </div>
            `;
            
            // Save current scroll position
            const scrollPosition = window.pageYOffset;
            
            // Update main content
            mainContent.innerHTML = scp005Content;
            
            // Restore scroll position
            window.scrollTo(0, scrollPosition);
            
            // Add back button functionality
            const backBtn = document.getElementById('scp005BackBtn');
            if (backBtn) {
                backBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.location.reload();
                });
            }
            
            // Update URL without page reload
            history.pushState(null, '', '#scp-005');
        });
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    if (window.location.hash !== '#security' && 
        window.location.hash !== '#research' && 
        window.location.hash !== '#scp-005') {
        window.location.reload();
    }
});
