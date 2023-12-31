import {cart} from "./cart.js";
import { deliveryOptions } from "./deliveryOptions.js";
import {getProduct} from "./products.js";


function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option)=>{
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption;
}


function formatCurrency (priceCents) {
  return (Math.round(priceCents) /100).toFixed(2);
}


export function renderPaymentSummary () {
  let productPriceCents = 0;
  let shippingPriceCents = 0;
  
      cart.forEach((cartItem) =>{
         const product = getProduct(cartItem.productName);
         productPriceCents += product.priceCents * cartItem.quantity;

        const deliveryOption =  getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;
      });

     const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
     const TaxCents = totalBeforeTaxCents *0.1;
     const totalCents = totalBeforeTaxCents +TaxCents;


     const paymentSummaryHTML = `
     <h3>Order Summary</h3>

          <div class="summary-row text-summary-row">
            <p>Items:</p><p>$${productPriceCents /100}</p>
              </div>

              <div class="summary-row text-summary-row">
                <p>Shipping:</p><p>$${shippingPriceCents /100}</p>
              </div>
          
              <div class="summary-row text-summary-row">
                <p>Total before tax:</p><p>$${totalBeforeTaxCents /100}</p>
              </div>

              <div class="summary-row text-summary-row">
                <p>Estimated tax (10%):</p><p>$${formatCurrency(TaxCents)}</p>
              </div>
          
              <div class="summary-end text-summary-end">
                <p>Total:</p><p>$${formatCurrency(totalCents)}</p>
            </div>
          <button id="btn-place-order">Place order</button>

     `;

     document.querySelector('.js-payment-summary')
      .innerHTML = paymentSummaryHTML;
  }


  
