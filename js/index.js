const buttons = document.querySelectorAll(".btn");

buttons.forEach((el) => {
  el.addEventListener("click", (e) => {
    el.style.fontSize = "60px";

    setTimeout(() => {
      el.style.fontSize = "50px";
    }, 100);
  });
});
