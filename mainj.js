const carousel = document.getElementById('productCarousel');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        
        prevButton.addEventListener('click', () => {
            carousel.scrollBy({ left: -340, behavior:'smooth' }); });
                nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 340, behavior: 'smooth' });
    });
 
 
    const backToTopButton = document.getElementById('backToTop');
 
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
 
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
 
 
    document.getElementById('whatsappButton').onclick = function() {
        window.open('https://wa.me/6282250760160', '_blank');
    };
 
    document.getElementById('telegramButton').onclick = function() {
        window.open('https://www.instagram.com/maz_teplu?igsh=MXNyaDRkc3JsZmV4aA==', '_blank');
    };

    document.getElementById('tiktokButton').onclick = function() {
        window.open('https://www.tiktok.com/@mazteplu?_t=ZS-8vjJdxPPjZw&_r=1', '_blank');
    };