const backToTopBtn = document.getElementById("backToTop");

const toggleButton = () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", toggleButton);
backToTopBtn.addEventListener("click", scrollToTop);

const currentYear = new Date().getFullYear();
document.querySelector("#currentYear").textContent = currentYear;
