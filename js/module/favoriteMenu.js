export default function favoriteMenu() {
  async function localFavoriteItem() {
    const getKeys = Object.keys(localStorage);
    const allFavorites = [];

    getKeys.forEach((key) => {
      const favorite = JSON.parse(localStorage.getItem(key));
      allFavorites.push({ key, favorite });
    });

    console.log(allFavorites);

    allFavorites.forEach((favorite) => {
      console.log(favorite.key);
      let cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        const cardID = card.getAttribute("id");

        if (cardID === favorite.key) {
          console.log(card);
          const favoriteHeart = card.querySelector(".fa-heart");
          favoriteHeart.classList.add("colorHeart");
        }
      });
    });

    let favoriteItemsHTML = "";

    allFavorites.forEach((favorite) => {
      favoriteItemsHTML += `<li class="favorite-item">
          ${favorite.favorite.productName} <img src="${
        favorite.favorite.productImage || "./assets/no-image.png"
      }" onerror="this.onerror=null;
          this.src='./assets/no-image.png';" alt="${
            favorite.favorite.productName
          }" />
        </li>`;
    });

    const getFavoriteMenu = document.querySelector(".favorite-dropdown");
    getFavoriteMenu.innerHTML = favoriteItemsHTML;
  }

  localFavoriteItem();
}
