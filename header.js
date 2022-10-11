const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".main-menu");

function toggleMenu() {
  menu.classList.toggle("shown");
  const menuShown = menu.classList.contains("shown");

  if (menuShown) {
    console.log(menuShown);
    btn.textContent = " LUK ";
  } else {
    console.log(menuShown);
    btn.textContent = "MENU";
  }
}
btn.addEventListener("click", toggleMenu);
