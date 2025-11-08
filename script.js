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

    // 3D card tilt effect - Desktop (mouse) + Mobile (gyroscope + touch)
    let gyroPermissionGranted = false;
    let gyroSupported = false;
    
    // Check if device supports orientation
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    console.log('Device detection:', { 
        isMobile, 
        isIOS,
        hasDeviceOrientation: !!window.DeviceOrientationEvent, 
        cardsFound: cards.length,
        needsPermission: typeof DeviceOrientationEvent?.requestPermission === 'function'
    });
    
    // Enable touch tilt for mobile devices
    function enableTouchTilt() {
        console.log('Touch tilt enabled for mobile!');
        
        cards.forEach(card => {
            let touchStartX = 0;
            let touchStartY = 0;
            let currentRotateX = 0;
            let currentRotateY = 0;
            
            card.addEventListener('touchstart', function(e) {
                const touch = e.touches[0];
                const rect = card.getBoundingClientRect();
                touchStartX = touch.clientX - rect.left;
                touchStartY = touch.clientY - rect.top;
            }, { passive: true });
            
            card.addEventListener('touchmove', function(e) {
                if (gyroSupported) return; // Use gyro if available
                
                const touch = e.touches[0];
                const rect = card.getBoundingClientRect();
                const x = touch.clientX - rect.left;
                const y = touch.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                currentRotateX = (y - centerY) / 8;
                currentRotateY = (centerX - x) / 8;
                
                card.style.transform = `perspective(1000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            }, { passive: true });
            
            card.addEventListener('touchend', function() {
                if (!gyroSupported) {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                }
            });
        });
    }
    
    // Try to enable gyroscope
    if (isMobile && window.DeviceOrientationEvent) {
        // Request permission for iOS 13+
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            console.log('iOS device detected - click/tap anywhere to enable motion');
            
            // Create a visible button for iOS users
            const motionButton = document.createElement('button');
            motionButton.textContent = '📱 Activează Mișcare 3D';
            motionButton.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 9999;
                padding: 15px 30px;
                background: linear-gradient(135deg, var(--wine-red), var(--gold));
                color: white;
                border: none;
                border-radius: 50px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                box-shadow: 0 10px 30px rgba(139, 38, 53, 0.4);
                animation: pulse 2s infinite;
            `;
            
            document.body.appendChild(motionButton);
            
            motionButton.addEventListener('click', function() {
                console.log('Requesting gyroscope permission...');
                DeviceOrientationEvent.requestPermission()
                    .then(permissionState => {
                        console.log('Gyroscope permission:', permissionState);
                        if (permissionState === 'granted') {
                            gyroPermissionGranted = true;
                            gyroSupported = true;
                            enableGyroTilt();
                            motionButton.remove();
                        } else {
                            console.log('Permission denied, using touch fallback');
                            motionButton.textContent = '✋ Folosește Touch (permisiune refuzată)';
                            setTimeout(() => motionButton.remove(), 3000);
                        }
                    })
                    .catch(err => {
                        console.error('Gyroscope permission error:', err);
                        motionButton.textContent = '✋ Folosește Touch';
                        setTimeout(() => motionButton.remove(), 3000);
                    });
            }, { once: true });
        } else {
            // Android or older iOS - no permission needed
            console.log('Android/older iOS detected - enabling gyroscope directly');
            gyroPermissionGranted = true;
            gyroSupported = true;
            enableGyroTilt();
        }
        
        // Always enable touch as fallback
        enableTouchTilt();
    }
    
    function enableGyroTilt() {
        console.log('Gyroscope tilt enabled! Tilt your phone to see cards move.');
        
        let lastUpdate = 0;
        window.addEventListener('deviceorientation', function(event) {
            // Throttle updates to 60fps
            const now = Date.now();
            if (now - lastUpdate < 16) return;
            lastUpdate = now;
            
            const beta = event.beta;   // -180 to 180 (front-back tilt)
            const gamma = event.gamma; // -90 to 90 (left-right tilt)
            
            if (beta !== null && gamma !== null) {
                cards.forEach(card => {
                    // Normalize values for better effect
                    const rotateX = Math.max(-20, Math.min(20, beta / 3));
                    const rotateY = Math.max(-20, Math.min(20, gamma / 3));
                    
                    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                });
            }
        }, true);
    }
    
    // Desktop mouse tilt (only if not mobile)
    if (!isMobile) {
        console.log('Desktop detected - enabling mouse tilt');
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
    } else {
        console.log('Mobile detected - touch/gyro modes active');
    }

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
    @keyframes pulse {
        0%, 100% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 10px 30px rgba(139, 38, 53, 0.4);
        }
        50% {
            transform: translateX(-50%) scale(1.05);
            box-shadow: 0 15px 40px rgba(139, 38, 53, 0.6);
        }
    }
`;
document.head.appendChild(style);