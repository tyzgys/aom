document.addEventListener('DOMContentLoaded', function () {
    // 1. Ищем контейнер: сначала специализированные обёртки, если их нет — используем body
    const targetContainer = document.querySelector('.rules-page-wrapper') 
                         || document.querySelector('main') 
                         || document.body;

    if (!targetContainer) return;

    // Убеждаемся, что у контейнера есть относительное позиционирование для canvas
    if (getComputedStyle(targetContainer).position === 'static' && targetContainer !== document.body) {
        targetContainer.style.position = 'relative';
    }

    // 2. Создаём Canvas
    const canvas = document.createElement('canvas');
    canvas.className = 'fireflies-canvas';
    targetContainer.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    const fireflies = [];
    const fireflyCount = 40; // Общее количество огоньков

    function resizeCanvas() {
        width = targetContainer === document.body ? window.innerWidth : targetContainer.offsetWidth;
        height = targetContainer === document.body ? window.innerHeight : targetContainer.offsetHeight;
        canvas.width = width;
        canvas.height = height;
    }

    class Firefly {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.radius = Math.random() * 2.5 + 1;
            this.alpha = Math.random();
            this.speedAlpha = (Math.random() * 0.015 + 0.005) * (Math.random() < 0.5 ? 1 : -1);
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4 - 0.2;
            
            const colors = ['255, 232, 186', '138, 198, 209', '180, 220, 255'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            this.alpha += this.speedAlpha;
            if (this.alpha >= 1 || this.alpha <= 0.1) {
                this.speedAlpha = -this.speedAlpha;
            }

            if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = Math.max(0, Math.min(1, this.alpha));
            
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.radius * 4
            );
            gradient.addColorStop(0, `rgba(${this.color}, 1)`);
            gradient.addColorStop(0.4, `rgba(${this.color}, 0.4)`);
            gradient.addColorStop(1, `rgba(${this.color}, 0)`);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    function init() {
        resizeCanvas();
        for (let i = 0; i < fireflyCount; i++) {
            fireflies.push(new Firefly());
        }
        animate();
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        fireflies.forEach(firefly => {
            firefly.update();
            firefly.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    init();







        const burgerBtn = document.querySelector('.mobile-burger-btn');
    const menuCard = document.querySelector('.mobile-menu-card');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const dropdownBtn = document.querySelector('.mobile-dropdown-btn');
    const dropdownContent = document.querySelector('.mobile-dropdown-content');
    const dropdownArrow = document.querySelector('.dropdown-arrow');

    if (!burgerBtn || !menuCard) return;

    function toggleMenu() {
        const isOpen = menuCard.classList.contains('active');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function openMenu() {
        menuCard.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menuCard.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdownContent.classList.contains('open');
            
            if (isOpen) {
                dropdownContent.classList.remove('open');
                dropdownBtn.classList.remove('active');
                if (dropdownArrow) dropdownArrow.textContent = '<';
            } else {
                dropdownContent.classList.add('open');
                dropdownBtn.classList.add('active');
                if (dropdownArrow) dropdownArrow.textContent = 'v';
            }
        });
    }

    burgerBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);


















});