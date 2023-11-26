const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const popupContent = card.querySelector(".popup-content");
  card.addEventListener("mouseenter", () => {
    popupContent.style.display = "block";
  });
  card.addEventListener("mouseleave", () => {
    popupContent.style.display = "none";
  });
});
const images = document.querySelectorAll(".slideshow-image");
const prevButton = document.querySelector(".nav-button.previous");
const nextButton = document.querySelector(".nav-button.next");
const imageCountSpans = document.querySelectorAll(".image-count");
let currentIndex = 0;

function showImage(index) {
  images.forEach(image => image.style.opacity = 0);
  images[index].style.opacity = 1;

  imageCountSpans.forEach((span, idx) => {
    span.classList.remove("active");
    if (idx === index) {
      span.classList.add("active");
    }
  });
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

imageCountSpans.forEach((span, idx) => {
  span.addEventListener("click", () => {
    currentIndex = idx;
    showImage(currentIndex);
  });
});

images[currentIndex].style.opacity = 1;

setTimeout(() => {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 10000);
}, 10000);
const menuButton = document.querySelector(".menu-button");
const popup = document.querySelector(".popup");

menuButton.addEventListener("click", () => {
  popup.classList.toggle("show-popup");
});

