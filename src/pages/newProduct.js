import { initForm } from '../utils/form.js'

const PRODUCTS_KEY = 'products'

function getProducts() {
  const productsString = localStorage.getItem(PRODUCTS_KEY) || '[]'
  return JSON.parse(productsString)
}


function addNewProduct(product) {
  const products = getProducts()
  products.push(product)
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products))
}

const initialFormState = {
  product_url: '',
  product_description: ''
}
const form = document.querySelector('#form');
const formSaveButton = document.querySelector('#save-button');

const formState = initForm(initialFormState)

formSaveButton.addEventListener('click', (event) => {
  const product = {
    imageUrl: formState.product_url,
    description: formState.product_description,
  }
  addNewProduct(product)
})