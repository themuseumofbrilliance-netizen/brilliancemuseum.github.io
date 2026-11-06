/* Navigation is visible without JavaScript; enhancement only on small screens. */
(() => {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (!button || !nav) return;
  document.documentElement.classList.add("js-nav");
  button.hidden = false;
  const closeMenu = () => {
    button.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      closeMenu();
      button.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".masthead")) closeMenu();
  });
  window.matchMedia("(min-width: 641px)").addEventListener("change", closeMenu);
})();
