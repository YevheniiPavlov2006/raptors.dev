  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  let interval;

  function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }

  function nextSlide() {
    let newIndex = (currentIndex + 1) % slides.length;
    goToSlide(newIndex);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAutoSlide();
      goToSlide(Number(dot.dataset.index));
      startAutoSlide();
    });
  });

  startAutoSlide();