class CustomFooter2 extends HTMLElement {
  constructor() {
    super();
    const nameFigma = this.getAttribute("nameFigma");
    const linkFigma = this.getAttribute("linkFigma");
    const nameCopy = this.getAttribute("nameCopy");
    const linkLinkedin = this.getAttribute("linkLinkedin");
    const linkGithub = this.getAttribute("linkGithub");
    this.innerHTML = `<div class="container-footer bg-primary ">
    <footer>
      <div>${nameFigma}<a href="${linkFigma}"><i class="fa-brands fa-figma"></i></a></div>
      <div>${nameCopy}<a href="${linkLinkedin}"><i class="fa-brands fa-linkedin"></i></a> <a href="${linkGithub}"><i class="fa-brands fa-github"></i></a></div>
    </footer>
  </div>`;
  }
}
customElements.define("custom-footer2", CustomFooter2);
