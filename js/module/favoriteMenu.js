export default function favoriteMenu() {
  async function localFavoriteItem() {
    const getKeys = Object.keys(localStorage);
    const allFavorites = [];

    getKeys.forEach((key) => {
      const favorite = JSON.parse(localStorage.getItem(key));
      allFavorites.push({ key, favorite });
    });

    allFavorites.forEach((favorite) => {
      let cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        const cardID = card.getAttribute("id");

        if (cardID === favorite.key) {
          const favoriteHeart = card.querySelector(".fa-heart");
          favoriteHeart.classList.add("colorHeart");
        }
      });
    });

    let favoriteItemsHTML = "";

    allFavorites.forEach((item) => {
      const { productName, productImage } = item.favorite;
      console.log(productName, productImage);
      favoriteItemsHTML += `<li class="favorite-item">
          ${productName} <img src="${
        productImage || "./assets/no-image.png"
      }" onerror="this.onerror=null;
          this.src='./assets/no-image.png';" alt="${productName}" />
        </li>`;
    });

    const getFavoriteMenu = document.querySelector(".favorite-dropdown");
    getFavoriteMenu.innerHTML = favoriteItemsHTML;
  }

  localFavoriteItem();
}
