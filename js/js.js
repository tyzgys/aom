document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.10 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    const animatedItems = document.querySelectorAll('.scroll-animate');
    animatedItems.forEach(item => {
        observer.observe(item);
    });









    const slider = document.getElementById('hallSlider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const tabs = document.querySelectorAll('.tab-btn');

    const scrollAmount = 380; 

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
        });
    });











    const form = document.getElementById('feedbackForm');
    const notification = document.getElementById('formNotification');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); 

           

            notification.classList.remove('hidden');

            form.reset();

            setTimeout(() => {
                notification.classList.add('hidden');
            }, 4000);
        });
    }










    const section = document.getElementById('rulesSection');
    const bgTop = document.getElementById('bgTop');
    const bgBottom = document.getElementById('bgBottom');

    section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
    
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    
        const maxOffset = 25; 
        const translateYTop = mouseY * maxOffset * 1.5;        
        const translateYBottom = -mouseY * maxOffset * 1.5; 
    
        const translateX = mouseX * maxOffset * 0.5;

        bgTop.style.transform = `translateX(calc(-50% + ${translateX}px)) translateY(${translateYTop}px)`;
        bgBottom.style.transform = `translateX(calc(-50% + ${translateX}px)) translateY(${translateYBottom}px)`;
    });

    section.addEventListener('mouseleave', () => {
        bgTop.style.transform = `translateX(-50%) translateY(0px)`;
        bgBottom.style.transform = `translateX(-50%) translateY(0px)`;
    });



});