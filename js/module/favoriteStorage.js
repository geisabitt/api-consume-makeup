export default function favoriteStorage() {
  const classHeart = "colorHeart";

  function favoriteHeartClick(event) {
    // Alterna a classe colorHeart no ícone do coração
    this.classList.toggle(classHeart);

    const card = event.target.closest(".card");

    // Verifica se o elemento pai foi encontrado
    if (card) {
      const productId = card.getAttribute("id");
      const productName = card.querySelector("h3").textContent;
      const productImage = card.querySelector("img").getAttribute("src");

      const data = {
        productName,
        productImage,
      };

      const key = productId;

      // Se a classe colorHeart foi removida, remove o item do LocalStorage
      if (!this.classList.contains("colorHeart")) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(data));
      }
    }
  }

  const favoriteHeart = document.querySelectorAll(".fa-heart");
  favoriteHeart.forEach((item) => {
    item.addEventListener("click", favoriteHeartClick);
  });
}
