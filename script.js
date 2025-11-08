// General animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
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

    // Hero section mouse follow effect
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', function(e) {
            const rect = hero.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            hero.style.setProperty('--mouse-x', `${x}%`);
            hero.style.setProperty('--mouse-y', `${y}%`);
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe gallery items with stagger
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });

    // Observe 3D cards with stagger
    const cards = document.querySelectorAll('.card');
    cards.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px) rotateX(-10deg)';
        element.style.transition = `all 0.8s ease ${index * 0.15}s`;
        observer.observe(element);
    });

    // Enhanced parallax effect
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Parallax for hero
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        }

        // Header shadow on scroll
        const header = document.querySelector('header');
        if (header) {
            if (scrolled > 50) {
                header.style.boxShadow = '0 5px 20px rgba(139, 38, 53, 0.3)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(139, 38, 53, 0.1)';
            }
        }
    });

    // 3D card tilt effect
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // Add ripple effect to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: rippleEffect 0.6s ease-out;
            `;
            
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

    // Gallery item click to enlarge
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            img.addEventListener('click', function() {
                const modal = document.createElement('div');
                modal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.95);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 3000;
                    cursor: pointer;
                    animation: fadeIn 0.3s ease;
                `;
                
                const enlargedImg = document.createElement('img');
                enlargedImg.src = this.src;
                enlargedImg.style.cssText = `
                    max-width: 90%;
                    max-height: 90%;
                    border-radius: 15px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.8);
                    animation: zoomIn 0.3s ease;
                `;
                
                modal.appendChild(enlargedImg);
                document.body.appendChild(modal);
                
                modal.addEventListener('click', function() {
                    modal.style.animation = 'fadeOut 0.3s ease';
                    setTimeout(() => document.body.removeChild(modal), 300);
                });
            });
        }
    });

    console.log('Site loaded with interactive features! ❤️');
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    @keyframes zoomIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
`;
document.head.appendChild(style);