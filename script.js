/**
 * GreenShift - Environmental Organization Website
 * AP Lang Final Project
 * 
 * This script handles:
 * - Terminal-style loading animation
 * - Navigation functionality
 * - Responsive hamburger menu
 * - Smooth scrolling
 */

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const terminalText = document.getElementById('terminal-text');
const enterBtn = document.getElementById('enter-btn');
const mainContent = document.getElementById('main-content');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Terminal Loading Animation
const loadingMessages = [
    "Initializing GreenShift systems...",
    "Loading environmental impact calculators...",
    "Analyzing carbon footprint data...",
    "Connecting sustainable communities...",
    "Ready to empower your green journey..."
];

// Function to simulate terminal typing effect
async function typeTerminalText() {
    for (const message of loadingMessages) {
        await typeMessage(message);
        await delay(500);
        terminalText.innerHTML += '<br>';
        await delay(300);
    }
    
    // Show enter button after all messages are displayed
    enterBtn.classList.add('visible');
}

// Helper function to type a single message
async function typeMessage(message) {
    for (let i = 0; i < message.length; i++) {
        terminalText.innerHTML += message[i];
        await delay(Math.random() * 50 + 30); // Random typing speed
    }
}

// Helper function for delays
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Start the loading animation when page loads
window.addEventListener('DOMContentLoaded', () => {
    typeTerminalText();
});

// Handle enter button click
enterBtn.addEventListener('click', () => {
    loadingScreen.classList.remove('active');
    loadingScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');
    
    // Add animation to hero section
    document.querySelector('.hero-content').classList.add('animate');
});

// Hamburger menu functionality
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll reveal animation
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize sections with hidden state
function initSections() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Call initialization function when main content is shown
enterBtn.addEventListener('click', initSections);