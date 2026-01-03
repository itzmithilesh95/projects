
let bagItems;
 onLoad();
function onLoad(){
let bagItemsStr = localStorage.getItem('bagItems');
bagItems = bagItemsStr? JSON.parse(bagItemsStr):[];

displayItemsOnHomePage();
displayBagIcon();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagIcon();

}
function displayBagIcon() {
  let bagItemCountElemt = document.querySelector('.bag-item-count');
  if(bagItems.length > 0){

    bagItemCountElemt.style.visibility ='visible';
  bagItemCountElemt.innerText =bagItems.length;
  }
  else{
    bagItemCountElemt.style.visibility ='hidden';
  }
}

function displayItemsOnHomePage(){
  let itemsContainerElement = document.querySelector('.items-container');
  
  if(!itemsContainerElement ){
    return;
  }
let innerHtml ='';

items.forEach(items =>{
innerHtml += `<div class="item-container">
      <img class="item-image" src="${items.image}" alt="item image">
      <div class="rating">
        ${items.rating.stars}⭐ |${items.rating.count}
        </div>
        <div class="company-name">${
          items.company
        }</div>
        <div class="item-name">${
          items.item_name
        }</div>
        <div class="price">
          <span class = "current-price">RS ${
            items.current_price
          }</Span>
          <span class ="Original-price"> Rs ${
            items.Original_price
          }
          </span>
          <span class="discount">${
             items.discount_percentage
          } % OFF</span>
        </div>
        <button class="Btn-add-bag" onclick ="addToBag(${items.id})
        
        
        "> Add to Bag</button>
     </div> `
});

itemsContainerElement.innerHTML = innerHtml ;

}


// let item  ={
//   item_image: 'images/1.jpg',
//     rating : {
//     stars:4.5,
//     noOfReviews:1400,
//   },
//   compnay_name:
//     'carlton London',
//     item_name:'  Rhodium-Plated CZ Floral Studs',
//    current_price: 619,
//    Original_price:1045,
//    discount_percentage:42,}




// itemsContainerElement.innerHTML = 
// `<div class="item-container">
//       <img class="item-image" src="${item.item_image}" alt="item image">
//       <div class="rating">
//         ${item.rating.stars}⭐ |${item.rating.noOfReviews}
//         </div>
//         <div class="company-name">${
//           item.compnay_name
//         }</div>
//         <div class="item-name">${
//           item.item_name
//         }</div>
//         <div class="price">
//           <span class = "current-price">RS ${
//             item.current_price
//           }</Span>
//           <span class ="Original-price"> Rs ${
//             item.Original_price
//           }
//           </span>
//           <span class="discount">${
//              item.discount_percentage
//           } % OFF</span>
//         </div>
//         <button class="Btn-add-bag"> Add to Bag</button>
//      </div> `;


     