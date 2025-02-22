document.addEventListener("DOMContentLoaded", function () {

    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextSlide() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message. We will get back to you soon.');
        contactForm.reset();
    });
});

document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;

    if (name && email && category) {
        alert('Registration successful!');
    } else {
        alert('Please fill in all fields.');
    }
});

let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showNextImage() {
    images[currentImageIndex].classList.remove('visible');
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].classList.add('visible');
}

setInterval(showNextImage, 3000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
