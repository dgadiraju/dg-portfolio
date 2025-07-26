// Portfolio Website JavaScript - Durga Gadiraju
// ================================================

// Data for dynamic content
const publicationsData = {
    articles: [
        {
            title: "The Future of AI in Enterprise Data Platforms",
            platform: "TechCrunch",
            date: "2024",
            link: "#",
            excerpt: "Exploring how artificial intelligence is reshaping enterprise data architecture..."
        },
        {
            title: "Building Scalable Data Teams: Lessons from the Field",
            platform: "Harvard Business Review",
            date: "2024",
            link: "#",
            excerpt: "Key strategies for scaling data science teams in modern organizations..."
        },
        {
            title: "Machine Learning Operations: A Practical Guide",
            platform: "Medium",
            date: "2023",
            link: "#",
            excerpt: "Best practices for implementing MLOps in production environments..."
        },
        {
            title: "Data Democratization: Breaking Down Silos",
            platform: "Forbes",
            date: "2023",
            link: "#",
            excerpt: "How to make data accessible across all levels of an organization..."
        },
        {
            title: "The Ethics of AI: Responsible Implementation",
            platform: "MIT Technology Review",
            date: "2023",
            link: "#",
            excerpt: "Addressing bias, fairness, and transparency in AI systems..."
        },
        {
            title: "Cloud-Native Analytics: Modern Data Architecture",
            platform: "InfoWorld",
            date: "2022",
            link: "#",
            excerpt: "Designing resilient and scalable analytics platforms in the cloud..."
        }
    ],
    speaking: [
        {
            title: "Keynote: AI Transformation in Fortune 500",
            event: "Data Science Conference 2024",
            date: "March 2024",
            link: "#",
            location: "San Francisco, CA"
        },
        {
            title: "Building High-Performance Data Teams",
            event: "Strata Data Conference",
            date: "September 2023",
            link: "#",
            location: "New York, NY"
        },
        {
            title: "The Future of Educational Technology",
            event: "EdTech Summit",
            date: "June 2023",
            link: "#",
            location: "Boston, MA"
        },
        {
            title: "MLOps Best Practices Panel",
            event: "Machine Learning Week",
            date: "April 2023",
            link: "#",
            location: "Las Vegas, NV"
        },
        {
            title: "Data Governance in the Cloud Era",
            event: "Cloud Data Summit",
            date: "November 2022",
            link: "#",
            location: "Seattle, WA"
        },
        {
            title: "Scaling Analytics for Global Organizations",
            event: "Analytics Summit",
            date: "August 2022",
            link: "#",
            location: "Chicago, IL"
        }
    ],
    podcasts: [
        {
            title: "The Evolution of Data Science Leadership",
            show: "Data Leaders Podcast",
            date: "January 2024",
            link: "#",
            duration: "45 min"
        },
        {
            title: "Building AI-First Organizations",
            show: "Tech Talk Weekly",
            date: "December 2023",
            link: "#",
            duration: "38 min"
        },
        {
            title: "The Future of Online Education",
            show: "EdTech Conversations",
            date: "October 2023",
            link: "#",
            duration: "52 min"
        },
        {
            title: "Cloud Migration Strategies for Data Teams",
            show: "Cloud Computing Podcast",
            date: "August 2023",
            link: "#",
            duration: "41 min"
        },
        {
            title: "Democratizing Data Science Education",
            show: "Learning Leaders",
            date: "June 2023",
            link: "#",
            duration: "47 min"
        },
        {
            title: "Analytics in the Age of AI",
            show: "Data Driven",
            date: "March 2023",
            link: "#",
            duration: "35 min"
        }
    ]
};

const testimonialsData = [
    {
        text: "Durga's leadership in AI strategy transformed our entire approach to data-driven decision making. His insights helped us achieve a 40% improvement in operational efficiency.",
        author: "Sarah Chen",
        role: "CTO, Fortune 100 Technology Company",
        avatar: "SC"
    },
    {
        text: "Working with Durga on our cloud migration was exceptional. His expertise in data architecture and team leadership made a complex project seamless and successful.",
        author: "Michael Rodriguez",
        role: "VP Engineering, Healthcare Innovation Firm",
        avatar: "MR"
    },
    {
        text: "Durga's teaching methodology is outstanding. The practical approach and real-world examples made complex data science concepts accessible and actionable.",
        author: "Dr. Lisa Wang",
        role: "Data Science Manager, Financial Services",
        avatar: "LW"
    },
    {
        text: "The training program Durga designed for our team exceeded expectations. Within months, our data science capabilities improved dramatically, directly impacting our bottom line.",
        author: "James Thompson",
        role: "Head of Analytics, Retail Corporation",
        avatar: "JT"
    },
    {
        text: "Durga's podcast insights on educational technology inspired our platform redesign. His vision for democratizing data education aligns perfectly with our mission.",
        author: "Dr. Emily Johnson",
        role: "Dean of Engineering, Leading University",
        avatar: "EJ"
    }
];

// Global variables
let currentTestimonial = 0;
let testimonialInterval;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDarkMode();
    setupEventListeners();
    loadPublications();
    initializeTestimonials();
    initializeScrollAnimations();
});

// Dark Mode Functionality
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;

    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    }

    darkModeToggle.addEventListener('click', toggleDarkMode);
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Event Listeners Setup
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Testimonial controls
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    if (prevBtn) prevBtn.addEventListener('click', () => changeTestimonial(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeTestimonial(1));

    // Close modals on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Close modals on backdrop click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeAllModals();
        }
    });
}

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.add('hidden');
    });
    document.body.style.overflow = 'auto';
}

// Dynamic Publications Loading
function loadPublications() {
    loadArticles();
    loadSpeakingEngagements();
    loadPodcasts();
}

function loadArticles() {
    const container = document.getElementById('articlesGrid');
    if (!container) return;

    container.innerHTML = publicationsData.articles.map(article => `
        <div class="publication-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">${article.title}</h3>
                    <p class="text-primary font-medium mb-2">${article.platform}</p>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">${article.excerpt}</p>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-gray-500 dark:text-gray-400 text-sm">${article.date}</span>
                <a href="${article.link}" class="text-primary hover:text-blue-700 font-medium text-sm inline-flex items-center" target="_blank">
                    Read Article <i class="fas fa-external-link-alt ml-1"></i>
                </a>
            </div>
        </div>
    `).join('');
}

function loadSpeakingEngagements() {
    const container = document.getElementById('speakingGrid');
    if (!container) return;

    container.innerHTML = publicationsData.speaking.map(engagement => `
        <div class="publication-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">${engagement.title}</h3>
                <p class="text-primary font-medium mb-2">${engagement.event}</p>
                <div class="flex items-center text-gray-600 dark:text-gray-300 text-sm space-x-4">
                    <span><i class="fas fa-calendar mr-1"></i>${engagement.date}</span>
                    <span><i class="fas fa-map-marker-alt mr-1"></i>${engagement.location}</span>
                </div>
            </div>
            <a href="${engagement.link}" class="text-primary hover:text-blue-700 font-medium text-sm inline-flex items-center" target="_blank">
                View Details <i class="fas fa-arrow-right ml-1"></i>
            </a>
        </div>
    `).join('');
}

function loadPodcasts() {
    const container = document.getElementById('podcastsGrid');
    if (!container) return;

    container.innerHTML = publicationsData.podcasts.map(podcast => `
        <div class="publication-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">${podcast.title}</h3>
                <p class="text-primary font-medium mb-2">${podcast.show}</p>
                <div class="flex items-center text-gray-600 dark:text-gray-300 text-sm space-x-4">
                    <span><i class="fas fa-calendar mr-1"></i>${podcast.date}</span>
                    <span><i class="fas fa-clock mr-1"></i>${podcast.duration}</span>
                </div>
            </div>
            <a href="${podcast.link}" class="text-primary hover:text-blue-700 font-medium text-sm inline-flex items-center" target="_blank">
                Listen Now <i class="fas fa-play ml-1"></i>
            </a>
        </div>
    `).join('');
}

// Testimonials Carousel
function initializeTestimonials() {
    const container = document.getElementById('testimonialsCarousel');
    const dotsContainer = document.getElementById('testimonialDots');
    
    if (!container || !dotsContainer) return;

    loadTestimonials();
    createTestimonialDots();
    startTestimonialAutoplay();
}

function loadTestimonials() {
    const container = document.getElementById('testimonialsCarousel');
    if (!container) return;

    container.innerHTML = testimonialsData.map((testimonial, index) => `
        <div class="testimonial-slide ${index === 0 ? 'block' : 'hidden'} text-center p-8">
            <div class="max-w-3xl mx-auto">
                <blockquote class="text-xl text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                    "${testimonial.text}"
                </blockquote>
                <div class="flex items-center justify-center">
                    <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4">
                        ${testimonial.avatar}
                    </div>
                    <div class="text-left">
                        <div class="font-semibold text-gray-900 dark:text-white">${testimonial.author}</div>
                        <div class="text-gray-600 dark:text-gray-400 text-sm">${testimonial.role}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function createTestimonialDots() {
    const dotsContainer = document.getElementById('testimonialDots');
    if (!dotsContainer) return;

    dotsContainer.innerHTML = testimonialsData.map((_, index) => `
        <button class="testimonial-dot w-3 h-3 rounded-full ${index === 0 ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'} transition-colors" 
                onclick="goToTestimonial(${index})" aria-label="Go to testimonial ${index + 1}"></button>
    `).join('');
}

function changeTestimonial(direction) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    if (slides.length === 0) return;

    // Hide current slide
    slides[currentTestimonial].classList.add('hidden');
    slides[currentTestimonial].classList.remove('block');
    dots[currentTestimonial].classList.remove('bg-primary');
    dots[currentTestimonial].classList.add('bg-gray-300', 'dark:bg-gray-600');

    // Calculate next slide
    currentTestimonial += direction;
    if (currentTestimonial >= slides.length) currentTestimonial = 0;
    if (currentTestimonial < 0) currentTestimonial = slides.length - 1;

    // Show new slide
    slides[currentTestimonial].classList.remove('hidden');
    slides[currentTestimonial].classList.add('block');
    dots[currentTestimonial].classList.add('bg-primary');
    dots[currentTestimonial].classList.remove('bg-gray-300', 'dark:bg-gray-600');

    // Restart autoplay
    restartTestimonialAutoplay();
}

function goToTestimonial(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    if (slides.length === 0 || index === currentTestimonial) return;

    // Hide current slide
    slides[currentTestimonial].classList.add('hidden');
    slides[currentTestimonial].classList.remove('block');
    dots[currentTestimonial].classList.remove('bg-primary');
    dots[currentTestimonial].classList.add('bg-gray-300', 'dark:bg-gray-600');

    // Show new slide
    currentTestimonial = index;
    slides[currentTestimonial].classList.remove('hidden');
    slides[currentTestimonial].classList.add('block');
    dots[currentTestimonial].classList.add('bg-primary');
    dots[currentTestimonial].classList.remove('bg-gray-300', 'dark:bg-gray-600');

    // Restart autoplay
    restartTestimonialAutoplay();
}

function startTestimonialAutoplay() {
    testimonialInterval = setInterval(() => {
        changeTestimonial(1);
    }, 5000);
}

function restartTestimonialAutoplay() {
    clearInterval(testimonialInterval);
    startTestimonialAutoplay();
}

// Contact Form Handling
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link as fallback
    const mailtoSubject = subject ? `${subject} - Contact from ${name}` : `Contact from ${name}`;
    const mailtoBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:hello@durgagadiraju.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Show success message
    showFormMessage('Thank you for your message! Your email client should open shortly.', 'success');
    
    // Reset form
    e.target.reset();
}

function showFormMessage(message, type) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message p-4 rounded-lg mb-4 ${type === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`;
    messageDiv.textContent = message;

    const form = document.getElementById('contactForm');
    if (form) {
        form.parentNode.insertBefore(messageDiv, form);
        
        // Auto-remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    // Timeline animation for experience page
    animateTimelineItems();
    
    // General scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Observe other animated elements
    document.querySelectorAll('.publication-card, .contact-card, .project-card').forEach(item => {
        observer.observe(item);
    });
}

function animateTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length === 0) return;

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Make functions globally available for HTML onclick handlers
window.openModal = openModal;
window.closeModal = closeModal;
window.goToTestimonial = goToTestimonial;

// Handle page visibility changes to pause/resume testimonial autoplay
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(testimonialInterval);
    } else {
        startTestimonialAutoplay();
    }
}); 