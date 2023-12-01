class CustomHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div class="container-fluid bg-primary">
      <nav class="container">
        <div class="menu"><i class="fa-solid fa-bars"></i></div>
        <div>Loja</div>
        <form id="search">
          <input type="text" />
          <button type="button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div class="favorite-menu">
        <i class="fa-solid fa-heart-circle-check"></i>Favorito
        </div>
        <div class="cart">
          <span><i class="fa-solid fa-bag-shopping"></i></span>
          Sacola
        </div>
        <div class="avatar"><i class="fa-solid fa-user"></i></div>
      </nav>
    </div>`;
  }
}
customElements.define("custom-header", CustomHeader);
