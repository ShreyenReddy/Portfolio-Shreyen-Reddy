const menuBtn = document.querySelector(".menu-btn");
const dropdown= document.querySelector("#dropdown");

menuBtn.addEventListener("click", function () {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});