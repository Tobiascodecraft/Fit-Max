export function getProduct (productName) {
  
    let matchingProduct;

    products.forEach((product) =>{
        if (product.name === productName){
            matchingProduct = product;
        }
    });
    return matchingProduct;
}



 
 
 export const products = [{
    image:'item_bottle.png',
    name:'500 ml Bottle',
    text: 'Optimized drink experience',
    priceCents: '2949'
  }, {
    image:'item_shirt.png',
    name:'T-Shirt',
    text: 'Perfect fit for hitting legs',
    priceCents: '999'
  }, {
    image:'item_compression.png',
    name:'Compression-shirt',
    text: 'Show your muscels',
    priceCents: '2559'
  },
  {
    image:'item_shirt2.png',
    name:'Shirthoddie',
    text: 'Limited Edition',
    priceCents: '4559'
  },
  {
    image:'item_towel.png',
    name:'Alpha Towel',
    text: 'Made of the best cotton',
    priceCents: '959'
  },
  {
    image:'item_towel2.png',
    name:'Warrior Towel',
    text: 'Limited Edition',
    priceCents: '3559'
  }];