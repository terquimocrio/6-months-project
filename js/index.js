const buttons = document.querySelectorAll(".btn");

buttons.forEach((el) => {
  el.addEventListener("click", (e) => {

    console.log("si");
    el.style.width = "70px";
    el.style.height = "70px"

    el.style.fontSize = "55px"

    setTimeout(() => {
      el.style.width = "60px";
      el.style.height = "60px"

      el.style.fontSize = "45px"
    }, 100);
  });
});


