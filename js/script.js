let upbutton = document.querySelector(".upbutton");
window.onscroll = function () {
  if (window.pageYOffset > 1000) {
    upbutton.classList.remove("upbutton--hidden");
  } else {
    upbutton.classList.add("upbutton--hidden");
  }
};

upbutton.onclick = function () {
  window.scrollTo(0, 0);
};
