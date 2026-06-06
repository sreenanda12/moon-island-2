document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuBtn.classList.toggle('active');

            // Hamburger to Close transition
            const spans = menuBtn.querySelectorAll('span');
            if (menuBtn.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // 4. Cinematic Starry Night Background System (3 Layers)
    const initParticles = () => {
        const isMobile = window.innerWidth < 768;
        const starColors = ["#ffffff", "#f5e6ca"];

        // Layer 1: Far Sky (Very tiny, low opacity, slow drift)
        particlesJS("stars-far", {
            "particles": {
                "number": { "value": isMobile ? 50 : 120, "density": { "enable": true, "value_area": 1000 } },
                "color": { "value": starColors },
                "shape": { "type": "circle" },
                "opacity": { 
                    "value": 0.15, 
                    "random": true, 
                    "anim": { "enable": true, "speed": 0.3, "opacity_min": 0.05, "sync": false } 
                },
                "size": { "value": 0.8, "random": true },
                "line_linked": { "enable": false },
                "move": {
                    "enable": true,
                    "speed": 0.4,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out"
                }
            },
            "interactivity": { "events": { "onclick": { "enable": true, "mode": "push" } } },
            "retina_detect": true
        });

        // Layer 2: Mid Sky (Medium size, soft glow)
        particlesJS("stars-mid", {
            "particles": {
                "number": { "value": isMobile ? 30 : 60, "density": { "enable": true, "value_area": 1000 } },
                "color": { "value": starColors },
                "shape": { "type": "circle" },
                "opacity": { 
                    "value": 0.35, 
                    "random": true, 
                    "anim": { "enable": true, "speed": 0.6, "opacity_min": 0.15, "sync": false } 
                },
                "size": { "value": 1.5, "random": true },
                "line_linked": { 
                    "enable": true, 
                    "distance": 180, 
                    "color": "#ffffff", 
                    "opacity": 0.08, 
                    "width": 1 
                },
                "move": {
                    "enable": true,
                    "speed": 0.8,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "bubble" }
                },
                "modes": {
                    "grab": { "distance": 180, "line_linked": { "opacity": 0.15 } },
                    "bubble": { "distance": 200, "size": 3, "duration": 2, "opacity": 0.7, "speed": 3 }
                }
            },
            "retina_detect": true
        });

        // Layer 3: Near Stars (Brighter, slow float, hover brighten)
        particlesJS("stars-near", {
            "particles": {
                "number": { "value": isMobile ? 12 : 20, "density": { "enable": true, "value_area": 1000 } },
                "color": { "value": starColors },
                "shape": { "type": "circle" },
                "opacity": { 
                    "value": 0.6, 
                    "random": true, 
                    "anim": { "enable": true, "speed": 0.8, "opacity_min": 0.4, "sync": false } 
                },
                "size": { "value": 2.5, "random": true },
                "line_linked": { "enable": false },
                "move": {
                    "enable": true,
                    "speed": 0.25,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": { "enable": true, "mode": "bubble" },
                    "onclick": { "enable": true, "mode": "repulse" }
                },
                "modes": {
                    "bubble": { "distance": 200, "size": 5, "duration": 1.5, "opacity": 1, "speed": 3 },
                    "repulse": { "distance": 200, "duration": 0.4 }
                }
            },
            "retina_detect": true
        });
    };

    initParticles();

    // Cinematic Parallax Effect
    window.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 1024) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        const far = document.getElementById('stars-far');
        const mid = document.getElementById('stars-mid');
        const near = document.getElementById('stars-near');
        
        const heroLeft = document.querySelector('.hero-left');
        const heroRight = document.querySelector('.hero-right');

        if (far) far.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        if (mid) mid.style.transform = `translate(${x * 25}px, ${y * 25}px)`;
        if (near) near.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
        
        if (heroLeft) heroLeft.style.transform = `translate(${x * -12}px, ${y * -12}px)`;
        if (heroRight) heroRight.style.transform = `translate(${x * 15}px, ${y * 15}px)`;

        // Mouse Glow update
        const mouseGlow = document.querySelector('.mouse-glow');
        if (mouseGlow) {
            mouseGlow.style.left = `${e.clientX}px`;
            mouseGlow.style.top = `${e.clientY}px`;
        }
    });

    // Resize handling
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(initParticles, 250);
    });

    // 5. Smooth Scroll for links
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

    // 5. Smooth Scroll for links
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
    // 6. Force Play Background Video (Robust Handshake for Local/Restricted Autoplay)
    const heroVideo = document.querySelector('.hero-bg-video');
    if (heroVideo) {
        const forcePlay = () => {
            heroVideo.play().catch(err => {
                // Fallback: Attempt interaction-based play immediately on first touch
                const startVideo = () => {
                    heroVideo.play().catch(()=>{});
                    window.removeEventListener('click', startVideo);
                    window.removeEventListener('touchstart', startVideo);
                };
                window.addEventListener('click', startVideo);
                window.addEventListener('touchstart', startVideo);
            });
        };
        
        // Execute immediately, and queue for complete load state
        forcePlay();
        heroVideo.addEventListener('canplay', forcePlay);
    }
});
