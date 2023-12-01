const loadingIndicator = document.getElementById("loading");
const cardContainer = document.querySelector("#cards-container");
const API = "https://makeup-api.herokuapp.com/api/v1/products.json";
const requestOptions = {
  method: "GET",
  redirect: "follow",
};
const CARD_LIMIT = 190;

async function fetchData(url) {
  try {
    const response = await fetch(url, requestOptions);
    return await response.json();
  } catch (error) {
    throw new Error(`Erro ao buscar dados: ${error}`);
  }
}

function createCard(product) {
  return `
    <div class="card">
      <div class="card-top">
        <img
          src="${product.image_link || "./assets/no-image.png"}"
          onerror="this.onerror=null; this.src='./assets/no-image.png';"
          alt="${product.name}"
        />
      </div>
      <div class="card-info">
        <h3>${product.name}</h3>
        <h3>${product.brand}</h3>
        <p class="price">${product.price_sign} ${product.price}</p>
        <p class="price-credit">Moeda: ${product.currency}</p>
      </div>
      <div class="card-like">
        <i class="fa-solid fa-heart"></i>
      </div>
    </div>
  `;
}

async function displayProducts() {
  try {
    loadingIndicator.style.display = "block";

    const products = await fetchData(API);

    let allCards = "";

    for (let i = 50; i < products.length && i < CARD_LIMIT; i++) {
      const product = products[i];
      const card = createCard(product);
      allCards += card;
    }

    cardContainer.innerHTML = allCards;
  } catch (error) {
    console.error(error);
  } finally {
    loadingIndicator.style.display = "none";
  }
}

displayProducts();
