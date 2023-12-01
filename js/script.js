import createCard from './module/createCard.js';
import favoriteStorage from './module/favoriteStorage.js';

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

async function displayProducts() {
  try {
    loadingIndicator.style.display = "block";

    const products = await fetchData(API);
    //console.log(products);

    let allCards = "";

    for (let i = 50; i < products.length && i < CARD_LIMIT; i++) {
      const product = products[i];
      const card = createCard(product);
      allCards += card;
    }

    cardContainer.innerHTML = allCards;

    favoriteStorage();
  } catch (error) {
    console.error(error);
  } finally {
    loadingIndicator.style.display = "none";
  }
}

displayProducts();
