// ITERATION 1

function updateSubtotal(product) {
  
  const priceElt = product.querySelector('.price span');
  console.log('priceElt', priceElt, priceElt.innerHTML);
  const price = Number(priceElt.innerHTML)
  const quantityElt = product.querySelector('.quantity input');
  console.log ('quantityElt',quantityElt, quantityElt.value)
  const quantity = Number(quantityElt.value)
  const subTotalElt = product.querySelector('.subtotal span');
  console.log ('subTotalElt', subTotalElt, subTotalElt.innerHTML)
  
  const subTotalPrice = price * quantity; 
  console.log('subTotalPrice', subTotalPrice);
  
  subTotalElt.innerHTML = subTotalPrice;

  return subTotalPrice; 
}


function calculateAll() {

  // ITERATION 2
  const allProducts = document.getElementsByClassName("product"); 
  const finalTotalPrice = document.querySelector('#total-value span'); 
  console.log('allProducts', allProducts);

  let totalPrice = 0;
  for ( let i = 0; i < allProducts.length; i++) {
    const currentProductSubtotal = updateSubtotal(allProducts[i]); 
    console.log(updateSubtotal(allProducts[i]));
 
  // ITERATION 3
    totalPrice = totalPrice + currentProductSubtotal; 
    finalTotalPrice. innerHTML = totalPrice; 
  }
  
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
