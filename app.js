window.addEventListener("DOMContentLoaded", () => {
  var readBtn = document.getElementById("read");
  var history = document.querySelector(".history");
  readBtn.addEventListener("click", (event) => {
    history.hidden = false;
    history.classList.remove("out");
    history.classList.add("in");

    readBtn.hidden = true;
  });

  var lessBtn = document.getElementById("less");
  lessBtn.addEventListener("click", (event) => {
    history.classList.remove("in");
    history.classList.add("out");
    history.hidden = true;
    readBtn.hidden = false;
  });
});
