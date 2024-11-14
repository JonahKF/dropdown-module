import "./styles.css";

const navController = () => {
  const navItems = document.querySelectorAll(".dropdown-menu-text");
  navItems.forEach((item) => {
    const parentLi = item.parentElement;
    const dropdownMenu = parentLi.querySelector(".dropdown-menu");

    parentLi.addEventListener("mouseenter", () => {
      dropdownMenu.classList.add("visible");
    });

    parentLi.addEventListener("mouseleave", () => {
      dropdownMenu.classList.remove("visible");
    });
  });
};

navController();
