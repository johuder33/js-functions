const PRODUCTS_KEY = 'products'

function getProducts() {
  const productsString = localStorage.getItem(PRODUCTS_KEY) || '[]'
  return JSON.parse(productsString)
}

const productList = document.querySelector('#product-list')

const products = getProducts()

products.forEach((product) => {
  const li = document.createElement('li')
  const productElement = document.createElement('product-element')

  productElement.setAttribute('data-product-description', product.description)
  productElement.setAttribute('data-product-image-url', product.imageUrl)

  li.appendChild(productElement)

  productList.appendChild(li)
});



export const sayHello = () => {
  console.log('Hello World')
}

export const sayBye = () => {
  console.log('Bye World')
}

const IamDefault = () => {
  console.log('I am defaul')
}

export default IamDefault
