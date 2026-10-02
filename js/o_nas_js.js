document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".scroll-anim");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, {
        threshold: 0.15 
    });

    animatedElements.forEach(el => observer.observe(el));







    window.addEventListener('scroll', () => {
    
        const header = document.querySelector('header');
    
        // Если прокрутили больше 50px, добавляем класс 'scrolled'
    
        if (window.scrollY > 50) {
    
            header.classList.add('scrolled');
    
        } else {
    
            header.classList.remove('scrolled');
    
        }
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





    




});