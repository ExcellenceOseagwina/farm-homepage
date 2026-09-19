const menuBar = document.querySelector(".menu-icon");
const hiddenMenu = document.querySelector(".red");

menuBar.addEventListener("click", function () {
  if (hiddenMenu.style.display === "none") {
    hiddenMenu.style.display = "flex";
     hiddenMenu.style.flexDirection = "column";
    //   hiddenMenu.style.transform = "translateX(-10px)";
  } else hiddenMenu.style.display = "none";
});
