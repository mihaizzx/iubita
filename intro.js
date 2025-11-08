// Intro page interactions and effects

// Password Protection
const CORRECT_PASSWORD = "19martie";
let isAuthenticated = false;

// Define checkPassword globally
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const submitButton = document.getElementById('submitPassword');
    const errorMessage = document.getElementById('errorMessage');
    
    if (!passwordInput) return;
    
    const enteredPassword = passwordInput.value.trim().toLowerCase();
    
    if (enteredPassword === CORRECT_PASSWORD) {
        // Correct password
        isAuthenticated = true;
        sessionStorage.setItem('authenticated', 'true');
        
        // Success animation
        const mainContainer = document.getElementById('main');
        const podaContainer = document.getElementById('poda');
        
        if (mainContainer) {
            mainContainer.style.transition = 'all 0.5s ease';
            mainContainer.style.transform = 'scale(1.05)';
        }
        
        if (podaContainer) {
            podaContainer.style.filter = 'brightness(1.3)';
        }
        
        if (submitButton) {
            submitButton.style.background = 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)';
            submitButton.innerHTML = '<span>✓ Acces Permis!</span>';
        }
        
        if (errorMessage) {
            errorMessage.style.color = '#4caf50';
            errorMessage.textContent = '✓ Bine ai venit! ❤️';
            errorMessage.classList.remove('shake');
        }
        
        // Hide modal after delay
        setTimeout(() => {
            hidePasswordModal();
        }, 1000);
    } else {
        // Wrong password
        if (errorMessage) {
            errorMessage.textContent = '✗ Parolă incorectă. Încearcă din nou!';
            errorMessage.style.color = '#d32f2f';
            errorMessage.classList.add('shake');
            
            setTimeout(() => {
                errorMessage.classList.remove('shake');
            }, 500);
        }
        
        // Shake the entire input container
        const mainContainer = document.getElementById('main');
        if (mainContainer) {
            mainContainer.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                mainContainer.style.animation = '';
            }, 500);
        }
        
        // Clear input
        passwordInput.value = '';
        passwordInput.focus();
    }
}

function showPasswordModal() {
    const passwordModal = document.getElementById('passwordModal');
    if (passwordModal) {
        passwordModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function hidePasswordModal() {
    const passwordModal = document.getElementById('passwordModal');
    if (passwordModal) {
        passwordModal.style.opacity = '0';
        setTimeout(() => {
            passwordModal.style.display = 'none';
            document.body.style.overflow = 'hidden';
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already authenticated
    const sessionAuth = sessionStorage.getItem('authenticated');
    if (sessionAuth === 'true') {
        isAuthenticated = true;
        hidePasswordModal();
    } else {
        showPasswordModal();
    }
    
    // Password modal elements
    const passwordModal = document.getElementById('passwordModal');
    const passwordInput = document.getElementById('passwordInput');
    const submitButton = document.getElementById('submitPassword');
    const errorMessage = document.getElementById('errorMessage');
    
    // Focus on password input
    if (passwordInput && !isAuthenticated) {
        setTimeout(() => passwordInput.focus(), 500);
    }
    
    // Submit password on button click
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            checkPassword();
        });
    }
    
    // Submit password on Enter key
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
        
        // Clear error message when typing
        passwordInput.addEventListener('input', function() {
            if (errorMessage) {
                errorMessage.textContent = '';
            }
        });
    }
    
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
