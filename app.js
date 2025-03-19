let images = document.querySelectorAll(".img-gallery img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector(".imageWrapper span");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openModal(images[currentIndex].src);
  });
});

close.addEventListener("click", () => {
  wrapper.style.display = "none";
});

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(images[currentIndex].src);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  openModal(images[currentIndex].src);
});

// Optional: Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (wrapper.style.display === "flex") {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      openModal(images[currentIndex].src);
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      openModal(images[currentIndex].src);
    } else if (e.key === "Escape") {
      wrapper.style.display = "none";
    }
  }
});
