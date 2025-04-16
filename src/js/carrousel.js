document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.guest-carrousel-content');
  const btnLeft = document.querySelector('.guest-carrousel-btn-left');
  const btnRight = document.querySelector('.guest-carrousel-btn-right');

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  showSlide(currentIndex);

  btnLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  btnRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });
});
