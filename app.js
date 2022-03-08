const title3 = document.querySelector(".example3.title");
const content3 = document.querySelector(".example3.content");

const title4 = document.querySelector(".example4.title");
const content4 = document.querySelector(".example4.content");

title3.addEventListener("click", () => {
  content3.classList.toggle("toggle");
});

title4.addEventListener("click", () => {
  content4.classList.toggle("toggle-display");
});
