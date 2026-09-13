document.addEventListener("DOMContentLoaded", () => {
  // Icons
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // Mobile menu
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("site-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.dataset.open === "true";

      menu.dataset.open = String(!isOpen);
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  // Portfolio filters
  const filters = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const selectedCategory = filter.dataset.filter;

      // Accent only the selected button
      filters.forEach((button) => {
        button.setAttribute(
          "aria-pressed",
          button === filter ? "true" : "false"
        );
      });

      // Show / hide projects
      cards.forEach((card) => {
        if (selectedCategory === "all") {
          card.classList.remove("is-hidden");
        } else if (card.dataset.category === selectedCategory) {
          card.classList.remove("is-hidden");
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });
});
