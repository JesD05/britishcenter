document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.toggle("is-active", i === index);
      dots[i].classList.toggle("is-active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      currentIndex = parseInt(this.dataset.index);
      showSlide(currentIndex);
    });
  });

  setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos
});
