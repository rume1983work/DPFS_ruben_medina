
document.addEventListener("DOMContentLoaded", function () {
  // Hover efecto (mostrar botones)
  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });
  });

  // Filtro por categorías (mock básico)
  const checkboxes = document.querySelectorAll(".filter-category input[type='checkbox']");
  checkboxes.forEach(box => {
    box.addEventListener("change", () => {
      const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
      const products = document.querySelectorAll(".product-card");
      products.forEach(product => {
        const category = product.getAttribute("data-category");
        if (selected.length === 0 || selected.includes(category)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  });
});
