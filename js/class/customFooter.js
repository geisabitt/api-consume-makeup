class CustomFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div class="container-footer bg-primary ">
    <footer>
      <div>Design credits<a href="https://www.figma.com/file/J3jbEo24N570nBXIzjnTso/Budega-(E-commerce)-%F0%9F%9B%92-(Community)?type=design&node-id=112-449&mode=design&t=vQbvEpvjPPeTapl3-0"><i class="fa-brands fa-figma"></i></a></div>
      <div>Developer Geisa Bittencourt <a href="https://linkedin.com/in/geisabittencourt"><i class="fa-brands fa-linkedin"></i></a> <a href="https://linkedin.com/in/geisabittencourt"><i class="fa-brands fa-github"></i></a></div>
    </footer>
  </div>`;
  }
}
customElements.define("custom-footer", CustomFooter);
