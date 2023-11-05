class ProductElement extends HTMLElement {
  constructor() {
    super()

    const productTemplate = document.getElementById('product-template')
    this.template = productTemplate.cloneNode(true).content;
  }

  static get observedAttributes() {
    return ['class'];
  }

  initializeUI() {
    const linkStyleElement = document.createElement('link')

    linkStyleElement.rel = 'stylesheet'
    linkStyleElement.href = './style.css'

    const shadow = this.attachShadow({ mode: 'open' })

    const dataset = this.dataset;
    const description = dataset.productDescription;
    const imageUrl = dataset.productImageUrl;

    const descriptionElement = this.template.querySelector('#product-description')
    const imageElement = this.template.querySelector('#product-image')

    descriptionElement.textContent = description;
    imageElement.src = imageUrl;

    shadow.appendChild(linkStyleElement)
    shadow.appendChild(this.template)
  }

  connectedCallback() {
    this.initializeUI();
    console.log('Custom element added to page.');
  }

  disconnectedCallback() {
    console.log('Custom element removed from page.');
  }
  
  adoptedCallback() {
    console.log('Custom element moved to new page.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom element attributes changed.', name, oldValue, newValue);
  }
}

customElements.define("product-element", ProductElement);
