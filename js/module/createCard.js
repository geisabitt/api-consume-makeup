export default function createCard(product) {
  return `
      <div id="${product.id}" class="card">
        <div class="card-top">
          <img
            src="${product.image_link || "./assets/no-image.png"}"
            onerror="this.onerror=null; this.src='./assets/no-image.png';"
            alt="${product.name}"
          />
        </div>
        <div class="card-info">
          <h3>${product.name}</h3>
          <h4>${product.brand}</h4>
          <p class="price">${product.price_sign} ${product.price}</p>
          <p class="price-credit">Moeda: ${product.currency}</p>
        </div>
        <div class="card-like">
          <i class="fa-solid fa-heart"></i>
        </div>
      </div>
    `;
}
