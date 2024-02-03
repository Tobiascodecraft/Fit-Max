

export let cart =

JSON.parse(localStorage.getItem('cart'));

if (!cart){
  cart =[

  ];
}

   //    { 
  // productName:'500 ml Bottle',
 //  deliveryOptionId: '1'
// },{
 //  productName:'T-shirt2',
 //  deliveryOptionId: '1'
 //  }

export function addToCart (productName){
    let matchingItem;
  
    cart.forEach((cartItem) =>{
      if(productName === cartItem.productName){
        matchingItem = cartItem;
      }
    });
  
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else{
      cart.push({
        productName: productName,
        quantity: 1,
        deliveryOptionId: '1'
      });
    }

    saveToStorage();
  };




export function removeFromCart (productName) {
    const newCart= [];

    cart.forEach ((cartItem) =>{
        if (cartItem.productName !== productName){
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}



function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}


export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;
  
  cart.forEach((cartItem) =>{
    if(productId === cartItem.productName){
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}