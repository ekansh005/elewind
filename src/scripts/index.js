const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const menu_close = document.querySelector("#menu-close");

function toggleMenu(e) {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu_close.classList.remove("hidden");
    burger.classList.add("hidden");
  } else {
    menu.classList.add("hidden");
    menu_close.classList.add("hidden");
    burger.classList.remove("hidden");
  }
}

burger.addEventListener("click", toggleMenu);

menu_close.addEventListener("click", toggleMenu);
