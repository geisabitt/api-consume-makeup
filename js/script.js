import createCard from "./module/createCard.js";
import createViewProduct from "./module/createViewProduct.js";
import favoriteMenu from "./module/favoriteMenu.js";
import favoriteStorage from "./module/favoriteStorage.js";

const loadingIndicator = document.getElementById("loading");
const cardContainer = document.querySelector("#cards-container");
const pageContainer = document.getElementById("product-container");
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

function displayProductDetails(event) {
  const card = event.target.closest(".card");
  if (card) {
    const productId = card.getAttribute("id");
    const apiId = `https://makeup-api.herokuapp.com/api/v1/products/${productId}.json`;
    fetchProductDetails(apiId);
  }
}

async function fetchProductDetails(apiId) {
  try {
    const getProductId = await fetchData(apiId);
    const createPage = createViewProduct(getProductId);

    pageContainer.innerHTML = createPage;
    cardContainer.style.display = "none";
    pageContainer.style.display = "block";

    const btnBack = document.querySelector('[data-button="back"]');
    if (btnBack) {
      btnBack.addEventListener("click", () => {
        cardContainer.style.display = "flex";
        pageContainer.style.display = "none";
      });
    }

    const btnModal = document.querySelectorAll(".open-modal");
    const modal = document.getElementById("modal");
    const closeButton = modal.querySelector(".close");
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    btnModal.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.style.display = "block";
      });
    });
  } catch (error) {
    console.error(error);
  }
}

async function displayAllProducts() {
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

    favoriteStorage();
    favoriteMenu();

    const btnProduct = document.querySelectorAll('[data-button="details"]');
    btnProduct.forEach((item) => {
      item.addEventListener("click", displayProductDetails);
    });
  } catch (error) {
    console.error(error);
  } finally {
    loadingIndicator.style.display = "none";
  }
}

displayAllProducts();
