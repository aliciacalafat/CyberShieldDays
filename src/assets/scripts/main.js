document.addEventListener("DOMContentLoaded", () => {
  const navbarToggle = document.querySelector(".navbar__toggle");
  const navbarLinks = document.querySelector(".navbar__links");

  if (navbarToggle) {
    navbarToggle.addEventListener("click", () => {
      navbarLinks.classList.toggle("navbar__links--active");
    });
  }

  const galleryImages = document.querySelectorAll(".gallery__photos img");

  galleryImages.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.1)";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });
  });
});
