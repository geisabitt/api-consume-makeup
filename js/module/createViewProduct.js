function productColor(product) {
  return product
    .map((color) => {
      const colorElement = document.createElement("div");
      colorElement.classList.add("product-Color");
      colorElement.style.backgroundColor = `${color.hex_value}`;
      return colorElement.outerHTML; // Retorna o elemento como HTML
    })
    .join(" "); // Junta os elementos em uma string
}
export default function createViewProduct(product) {
  return `<div id="${product.id}" class="view-product">
    <h2>${product.name}</h2>
    <div class="product-info">
      <div class="product-images">
        <div class="img-icons">
          <img src="${product.image_link || "./assets/no-image.png"}"
          onerror="this.onerror=null; this.src='./assets/no-image.png';"
          alt="${product.name}"/> <img src="${
    product.image_link || "./assets/no-image.png"
  }" onerror="this.onerror=null;
          this.src='./assets/no-image.png';" alt="${product.name}"/> <img
          src="${product.image_link || "./assets/no-image.png"}"
          onerror="this.onerror=null; this.src='./assets/no-image.png';"
          alt="${product.name}"/> <img src="${
    product.image_link || "./assets/no-image.png"
  }" onerror="this.onerror=null;
          this.src='./assets/no-image.png';" alt="${product.name}"/>
        </div>
        <div class="img-focus">
          <img src="${product.image_link || "./assets/no-image.png"}"
          onerror="this.onerror=null; this.src='./assets/no-image.png';"
          alt="${product.name}"/>
        </div>
      </div>
      <div class="product-cta">
        <div class="header-cta">
          <h2>${product.brand}</h2>
          <h5>${product.product_type}</h5>
        </div>
        <div class="product-variation">
          ${productColor(product.product_colors)}
        </div>
        <div class="product-price">
          <h3>
            <span>${product.price_sign}:</span> ${product.price}
            <span class="price-currency">Moeda: ${product.currency}</span>
          </h3>
          <h4 class="price-credit">
            3x de ${product.price_sign} ${(product.price / 3).toFixed(2)}
            sem juros
          </h4>
        </div>
        <div class="container-btn">
          <button class="stl-primary open-modal" type="button">Comprar agora</button>
          <button class="stl-line font-small open-modal" type="button">
            Adicionar a sacola
          </button>
        </div>
      </div>
    </div>
    <button data-button="back" class="stl-primary font-small" type="button">
        <i class="fa-solid fa-arrow-left font-small"></i> Voltar
      </button>
  </div>
    `;
}
