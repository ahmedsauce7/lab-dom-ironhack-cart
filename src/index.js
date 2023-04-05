// ITERATION 1

function updateSubtotal(product) {
  const price = +product.querySelector(".price span").innerHTML;
  const quantity = +product.querySelector(".quantity input").value;
  return product.querySelector(".subtotal span").innerHTML = price * quantity;
}


/* a step by step explaination for better understaning {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const thePrice = Number(price.innerHTML)
  const quantity = product.querySelector(".quantity input");
  const theQuantity = Number(quantity.value);
  const subTotal = product.querySelector('.subtotal span');
  return subTotal.innerHTML = thePrice * theQuantity;
} */


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test 

  // ITERATION 2
  const allProduct = document.querySelectorAll(".product")
  let total = 0;
  allProduct.forEach((element) => {
    total += updateSubtotal(element)
  });

  /* const singleProduct = document.getElementsByClassName('.product');
  for (let i = 0; i <singleProduct.length; i++ ) {
  updateSubtotal(singleProduct[i]);
  } */ 
  
  // ITERATION 3
  //... your code goes here
  const theTotal = document.querySelector("#total-value span");
  return theTotal.innerHTML = total;
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
