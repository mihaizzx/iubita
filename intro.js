// Intro page interactions and effects

// Loading Screen
let totalImages = 0;
let loadedImages = 0;

function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadingPercentage = document.querySelector('.loading-percentage');
    
    // Get all images on the page
    const images = document.querySelectorAll('img');
    totalImages = images.length;
    
    if (totalImages === 0) {
        hideLoadingScreen();
        return;
    }
    
    images.forEach(img => {
        if (img.complete) {
            imageLoaded();
        } else {
            img.addEventListener('load', imageLoaded);
            img.addEventListener('error', imageLoaded); // Count errors too
        }
    });
    
    function imageLoaded() {
        loadedImages++;
        const percentage = Math.round((loadedImages / totalImages) * 100);
        
        if (loadingProgress) {
            loadingProgress.style.width = percentage + '%';
        }
        if (loadingPercentage) {
            loadingPercentage.textContent = percentage + '%';
        }
        
        if (loadedImages >= totalImages) {
            setTimeout(hideLoadingScreen, 500);
        }
    }
    
    function hideLoadingScreen() {
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }
    
    // Fallback: hide after 5 seconds if something goes wrong
    setTimeout(hideLoadingScreen, 5000);
}

// Password Protection - REMOVED
let isAuthenticated = true; // Always authenticated now

document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading screen
    initLoadingScreen();
    
    const filmStrip = document.querySelector('.film-strip');
    const enterButton = document.querySelector('.enter-button');
    
    // Add pause on hover for film strip
    if (filmStrip) {
        filmStrip.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        filmStrip.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
    
    // Add click effect to enter button
    if (enterButton) {
        enterButton.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    }
    
    // Random speed variation for floating hearts
    const floatingHearts = document.querySelectorAll('.heart-float');
    floatingHearts.forEach((heart, index) => {
        const delay = Math.random() * 5;
        const duration = 7 + Math.random() * 5;
        heart.style.animationDelay = `${delay}s`;
        heart.style.animationDuration = `${duration}s`;
    });
    
    // Add parallax effect to film reel on mouse move
    document.addEventListener('mousemove', function(e) {
        const filmReel = document.querySelector('.film-reel-wrapper');
        if (filmReel) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            filmReel.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
        }
    });
    
    // Smooth scroll reveal for elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all film frames
    const frames = document.querySelectorAll('.film-frame');
    frames.forEach(frame => observer.observe(frame));
    
    // Add click event to film frames for a zoom effect
    frames.forEach(frame => {
        frame.addEventListener('click', function() {
            this.classList.toggle('zoomed');
        });
    });
    
    // Preload main page for faster transition
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = 'main.html';
    document.head.appendChild(link);
    
    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            if (enterButton) {
                window.location.href = enterButton.href;
            }
        }
    });
});

// Add dynamic lighting effect based on time
function addTimingEffect() {
    const hour = new Date().getHours();
    const body = document.body;
    
    if (hour >= 18 || hour < 6) {
        // Evening/Night mode - warmer colors
        body.style.background = 'linear-gradient(135deg, #6B1E2B 0%, #4A1520 100%)';
    } else if (hour >= 6 && hour < 12) {
        // Morning mode - brighter colors
        body.style.background = 'linear-gradient(135deg, #A83448 0%, #8B2635 100%)';
    } else {
        // Afternoon mode - standard colors
        body.style.background = 'linear-gradient(135deg, #8B2635 0%, #6B1E2B 100%)';
    }
}

// Apply timing effect on load
addTimingEffect();
