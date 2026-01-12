const navbartoggeler = document.querySelector(".menu-btn");
const navbarCollapsed = document.querySelector(".navbar-collapsed");

let open = false;

navbartoggeler.addEventListener("click", () => {
  if (open) {
    open = false;

    navbarCollapsed.style.display = "none";

    navbartoggeler.classList.remove("menu-active");
  } else {
    open = true;

    navbarCollapsed.style.display = "block";

    navbartoggeler.classList.add("menu-active");
  }
});
