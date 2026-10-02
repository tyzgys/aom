document.addEventListener('DOMContentLoaded', function () {

    function initEgoSlider() {
        const slides = document.querySelectorAll('.vip-hall-bg');
        const steps = document.querySelectorAll('.vip-progress-step');
        const fills = document.querySelectorAll('.vip-progress-fill');

        if (!slides.length) return;

        const slideDuration = 5000;
        let currentIndex = 0;
        let startTime = null;

        function updateProgress(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min((elapsed / slideDuration) * 100, 100);

            if (fills[currentIndex]) {
                fills[currentIndex].style.width = `${progress}%`;
            }

            if (elapsed < slideDuration) {
                requestAnimationFrame(updateProgress);
            } else {
                steps[currentIndex].classList.remove('active');
                steps[currentIndex].classList.add('completed');
                fills[currentIndex].style.width = '0%';

                slides[currentIndex].classList.remove('active');

                currentIndex++;

                if (currentIndex >= slides.length) {
                    currentIndex = 0;
                    steps.forEach(step => {
                        step.classList.remove('completed', 'active');
                    });
                }

                slides[currentIndex].classList.add('active');
                steps[currentIndex].classList.add('active');

                startTime = null;
                requestAnimationFrame(updateProgress);
            }
        }

        requestAnimationFrame(updateProgress);
    }





















    function initDuoSlider() {
        const duoSlides = document.querySelectorAll('.duo-slide');
        const duoSteps = document.querySelectorAll('.duo-progress-step');
        const duoFills = document.querySelectorAll('.duo-progress-fill');

        if (!duoSlides.length) return;

        const duration = 5000;
        let duoCurrentIndex = 0;
        let duoStartTime = null;

        function animateDuoSlider(timestamp) {
            if (!duoStartTime) duoStartTime = timestamp;
            const elapsed = timestamp - duoStartTime;
            const progress = Math.min((elapsed / duration) * 100, 100);

            if (duoFills[duoCurrentIndex]) {
                duoFills[duoCurrentIndex].style.width = `${progress}%`;
            }

            if (elapsed < duration) {
                requestAnimationFrame(animateDuoSlider);
            } else {
                duoSteps[duoCurrentIndex].classList.remove('active');
                duoSteps[duoCurrentIndex].classList.add('completed');
                duoFills[duoCurrentIndex].style.width = '0%';

                duoSlides[duoCurrentIndex].classList.remove('active');

                duoCurrentIndex++;

                if (duoCurrentIndex >= duoSlides.length) {
                    duoCurrentIndex = 0;
                    duoSteps.forEach(step => {
                        step.classList.remove('completed', 'active');
                    });
                }

                duoSlides[duoCurrentIndex].classList.add('active');
                duoSteps[duoCurrentIndex].classList.add('active');

                duoStartTime = null;
                requestAnimationFrame(animateDuoSlider);
            }
        }

        requestAnimationFrame(animateDuoSlider);
    }

    initEgoSlider();
    initDuoSlider();





















    function createSlider(slideSelector, stepSelector, fillSelector, duration = 5000) {
        const slides = document.querySelectorAll(slideSelector);
        const steps = document.querySelectorAll(stepSelector);
        const fills = document.querySelectorAll(fillSelector);

        if (!slides.length) return;

        let currentIndex = 0;
        let startTime = null;

        function animate(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min((elapsed / duration) * 100, 100);

            if (fills[currentIndex]) {
                fills[currentIndex].style.width = `${progress}%`;
            }

            if (elapsed < duration) {
                requestAnimationFrame(animate);
            } else {
                steps[currentIndex].classList.remove('active');
                steps[currentIndex].classList.add('completed');
                fills[currentIndex].style.width = '0%';

                slides[currentIndex].classList.remove('active');

                currentIndex++;

                if (currentIndex >= slides.length) {
                    currentIndex = 0;
                    steps.forEach(step => step.classList.remove('completed', 'active'));
                }

                slides[currentIndex].classList.add('active');
                steps[currentIndex].classList.add('active');

                startTime = null;
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    createSlider('.vip-hall-bg', '.vip-progress-step', '.vip-progress-fill');
    createSlider('.duo-slide', '.duo-progress-step', '.duo-progress-fill');
    createSlider('.trio-slide', '.trio-progress-step', '.trio-progress-fill');
    createSlider('.home-bg', '.home-progress-step', '.home-progress-fill');











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




    window.addEventListener('scroll', () => {
    
        const header = document.querySelector('header');
    
        // Если прокрутили больше 50px, добавляем класс 'scrolled'
    
        if (window.scrollY > 50) {
    
            header.classList.add('scrolled');
    
        } else {
    
            header.classList.remove('scrolled');
    
        }
    });







    
    



















});