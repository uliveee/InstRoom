var scrollToTopButton = document.getElementById("scrollToTopButton");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    // Если прокручена более 100 пикселей, показать кнопку
    scrollToTopButton.classList.add("show");
  } else {
    // В противном случае скрыть кнопку
    scrollToTopButton.classList.remove("show");
  }
});

scrollToTopButton.addEventListener("click", function () {
  // Плавно прокрутить страницу наверх
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});