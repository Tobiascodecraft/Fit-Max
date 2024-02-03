import {cart, removeFromCart, updateDeliveryOption} from './cart.js';
import { products} from './products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions} from './deliveryOptions.js';
import {renderPaymentSummary} from './paymentSummary.js';

 const today = dayjs();
 today.add(7, 'days');

 const deliveryDate = today.add(7, 'days');
 deliveryDate.format('dddd, MMMM D');




 export function renderOrderSummary() {


let cartSummaryHTML = '';

cart.forEach ((cartItem) =>{
    const productName = cartItem.productName;

    let matchingProduct;


    products.forEach((product) =>{
      if (product.name === productName){
          matchingProduct = product;
      }
  });


    cartSummaryHTML +=`

    <div class="js-cart-item-container">
    <div class="container-js-fix">
    <div class="card">
        <img class="card-img" src="${matchingProduct.image}">
        <div class="card-info">
          <p class="text-title">${matchingProduct.name}</p>
          <p class="text-title">${matchingProduct.text}</p>
        </div>
        <div class="card-footer">
        <span class="text-title">$${matchingProduct.priceCents /100}</span>
        <button class="card-button js-delete-link" data-product-name="${matchingProduct.name}">Delete item</button>
        </div></div>
      


        <div class="container-js-fix-2">
        <p id="delivery-body">${deliveryOptionHTML(matchingProduct, cartItem)}
        </p>
        </div>
        </div>
        </div>
      
    `;
});



function deliveryOptionHTML(matchingProduct, cartItem) {
  let html = '';


  deliveryOptions.forEach((deliveryOption) =>{
    const today = dayjs();
    const deliveryDate = today.add( 
      deliveryOption.deliveryDays,'days'
    );
    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );

    const priceString = deliveryOption.priceCents
    === 0
    ? '$0'
    : `$${deliveryOption.priceCents /100}`;


    const isChecked = deliveryOption.id ===
    cartItem.deliveryOptionId;

    
    html +=`
    <p class="js-delivery-option delete-html" data-delivery-option-id="${deliveryOption.id}"
     data-product-id="${matchingProduct.id}" id="delivery-body">${dateString} ( ${priceString} )
        <label>
          <input type="checkbox"  ${isChecked ? 'checked' :''} class="input">
          <span class="custom-checkbox"></span>
        </label>
    </p>
    `
  });


  //das sorgt dafur das man nur eine checkbox ausfuellen kann
  document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.input');

    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
       
        checkboxes.forEach(function (otherCheckbox) {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
          }
        });
      });
    });
  });

  return html;
}

document.querySelector('.js-order-summary')
.innerHTML = cartSummaryHTML;




document.querySelectorAll('.js-delete-link')
.forEach ((link) =>{
link.addEventListener('click', () => {
   const productName = link.dataset.productName;
   removeFromCart(productName);

   const container = document.querySelector(`.js-cart-item-container`);
   container.remove();


   renderPaymentSummary();
 });
});




document.querySelectorAll('.js-delivery-option')
.forEach ((element) => {
element.addEventListener('click', () =>{
  const {productId, deliveryOptionId} = element.dataset;
  updateDeliveryOption(productId, deliveryOptionId);

  renderOrderSummary();
  
  renderPaymentSummary();
});
});

}


