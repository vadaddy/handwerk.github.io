let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];


/*  Main Constellation Interface... ------------------------------------- */

//generates Product Constellation -------------------------------------
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let {id,name,composition,unit,co2kg,plastic,wood,paper,fabrictextile,glass,metal,ink,adhesive,cream,epoxy,composite,solid,greywater,energyuseKwh,lcaMfg,lcaUse,lcaTrnsp,lcaEol,lcaMfgKg,lcaUseKg,lcaTrnspKg,lcaEolKg,notesTitle,notes,img, top, left, deg} = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
    <div id=product-id-${id} class="item" style="top: ${top}px; left: ${left}px; transform: rotate(${deg}deg);">
      <div class="img-wrap">
        <img src=${img} alt="">
      </div>
      <div class="cart-buttons">
        <a onclick="decrement(${id})">&minus;</a>
        <div id=${id} class="qty"><p>${search.item === undefined ? 0 : search.item}</p></div>
        <a onclick="increment(${id})">&plus;</a>
      </div>
      <div class="close-card" onclick="closeCard(${id})"><p class="bi bi-x-lg"></p></div>
      <div class="expand-card" onclick="openCard(${id})"><p class="bi bi-chevron-down"></p></div>
      <div class="details">
        <h2>${name}</h2>
        <p>${unit}</p>
        <div class="content">
          <div class="materials">
            <p>MATERIALS:</p>
            <p>${composition}</p>
          </div>
         
          <div class="emissions">
            <p>EMISSIONS IMPACT:</p>
            <p> ${co2kg.toFixed(6)} kg <span>(CO<sub>2</sub> EQ.)</span></p>
          </div> 
          
          <div class="lca">
            <p>LIFE CYCLE ANALYSIS <br>on emissions impact:</p>
            <div>
              <p><span>${lcaMfgKg.toFixed(6)} <span>kg</span></span>   <span>${lcaMfg.toFixed(2)}<span>%</span></span></p>
              <p>from Manufacturing</p>
            </div>
            <div>
              <p><span>${lcaTrnspKg.toFixed(6)} <span>kg</span></span> <span>${lcaTrnsp.toFixed(2)}<span>%</span></span></p>
              <p>from Transportation</p>
            </div>
            <div>
              <p><span>${lcaUseKg.toFixed(6)} <span>kg</span></span>   <span>${lcaUse.toFixed(2)}<span>%</span></span></p>
              <p>from Use</p>
            </div>
            <div>
              <p><span>${lcaEolKg.toFixed(6)} <span>kg</span></span>    <span>${lcaEol.toFixed(2)}<span>%</span></span></p>
              <p>from End-of-Life</p>
            </div>
          </div>

          <div class="composition">
            <p>RESOURCE COMPOSITION<br>(incl. Packaging) for <br>${unit}:</p>
            <p><span>Plastic</span>   <span>...............</span>  <span>${plastic.toFixed(4)} gm&nbsp;</span></p>
            <p><span>Wood</span>      <span>...............</span>  <span>${wood.toFixed(4)} gm&nbsp;</span></p>
            <p><span>Paper</span>     <span>...............</span>  <span>${paper.toFixed(4)} gm&nbsp;</span></p>
            <p><span>Fabric</span>    <span>...............</span>  <span>${fabrictextile.toFixed(4)} gm&nbsp;</span></p>
            <p><span>Glass</span>     <span>...............</span>  <span>${glass.toFixed(4)} gm&nbsp;</span></p>
            <p><span>Metal</span>     <span>...............</span>  <span>${metal.toFixed(4)} gm&nbsp;</span></p>
            <p><span>Ink</span>       <span>...............</span>  <span>${ink.toFixed(4)} ml&nbsp;</span></p>
            <p><span>Adhesive</span>  <span>...............</span>  <span>${adhesive.toFixed(4)} gm&nbsp;</span></p>
            <p><span>Cream</span>     <span>...............</span>  <span>${cream.toFixed(4)} gm&nbsp;</span></p>
            <p><span>Epoxy</span>     <span>...............</span>  <span>${epoxy.toFixed(4)} gm&nbsp;</span></p>
            <p><span>Composite</span> <span>...............</span>  <span>${composite.toFixed(4)} gm&nbsp;</span></p>
            <p><span>Solid</span>     <span>...............</span>  <span>${solid.toFixed(4)} gm&nbsp;</span></p>
            <p><span>Grey Water</span><span>...............</span>  <span>${greywater.toFixed(4)} ml&nbsp;</span></p>
            <p><span>Energy Use</span><span>...............</span>  <span>${energyuseKwh.toFixed(4)} kWh</span></p>
          </div>

          <div class="notes">
          <p>${notesTitle}</p>
          <p>${notes}</p>
          </div>
        </div>
      </div>
    </div>
      
    `;
    })
    .join(""));
};

generateShop();

//expand & collapse Product Card   -------------------------------------

let openCard = (id) => {
  let selectedCard = id; 
  //the .content div height is set to auto: 
  var content = selectedCard.parentNode.parentNode.lastElementChild.lastElementChild;
  content.style.height = "auto";

  //the card becomes wider: 
  selectedCard.parentNode.parentNode.style.width = "var(--item-wd-exp)";
  //the image gets larger (taller): 
  selectedCard.parentNode.parentNode.firstElementChild.style.height = "var(--img-ht-exp)";

  //the expand-button is hidden
  selectedCard.parentNode.nextElementSibling.nextElementSibling.style.display = "none";
  //the close -button is added
  selectedCard.parentNode.nextElementSibling.style.display = "block";

  // card pos is reset:
  // selectedCard.parentNode.parentNode.style.top = "var(--item-wd-exp)";
  // selectedCard.parentNode.parentNode.style.transform = "rotate(0deg)";

  var e = selectedCard.parentNode.nextElementSibling;

  console.log(selectedCard.parentNode.nextElementSibling.nextElementSibling.nextElementSibling);


  if (o.style.height === "auto") {
    b.style.height = "auto";
  } else {
    b.style.height = "0";
  }

}

let closeCard = (id) => {
  let selectedCard = id;  
  
  //the .content div height is set to 0: 
  var o = selectedCard.parentNode.parentNode.lastElementChild.lastElementChild;
   o.style.height = "0";

    //the card becomes narrow: 
   selectedCard.parentNode.parentNode.style.width = "var(--item-wd)";
    //the image gets shorter: 
   selectedCard.parentNode.parentNode.firstElementChild.style.height = "var(--img-ht)";

   //the expand-button is shown
  selectedCard.parentNode.nextElementSibling.nextElementSibling.style.display = "block";
  //the close-button is hidden
  selectedCard.parentNode.nextElementSibling.style.display = "none";



}



//generates Total Selection (cart items)
let cartItems = document.getElementById("totalSelection");
let generateCartItems = () => {
  if (basket.length !== 0) {
    return (cartItems.innerHTML = basket
      .map((x) => {
        let {id, item} = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        //console.log(search.name);
        return `
          <p><span>${search.name}</span><span>&nbsp;x${item}</span><p>
        `;
      }).
      join(""));
      }
      else {
        cartItems.innerHTML = ``;
      };
}
generateCartItems();


let cartImg = document.getElementById("cartImg");

let generateCartImg = () => {
  if (basket.length !== 0) {
    return (cartImg.innerHTML = basket
      .map((x) => {
        let {id, item} = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        //console.log(search.name);
        return `
          <span><img src="${search.img}"></span>
        `;
      }).
      join(""));
    } else {
      cartImg.innerHTML = ``;
    };
}
generateCartImg();

//adds product to basket -------------------------------------

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update(selectedItem.id);
  TotalAmount();
  generateCartItems();
  generateCartImg();
  localStorage.setItem("data", JSON.stringify(basket));

};

//removes product from basket -------------------------------------

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  TotalAmount();
  generateCartItems();
  generateCartImg();
  localStorage.setItem("data", JSON.stringify(basket));

};



/*  Basket / Calculation / Cruncher... --------------------------------------*/

//update basket
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  //console.log(search.name);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  //generateCruncherDetails ();
  generateCartItems();
  generateCartImg();
  TotalAmount();
};

//calculates total number of selected items
let calculation = () => {
  let totalItems = document.getElementById("cartAmount");
  let totalItems2 = document.getElementById("cartAmount2");
  totalItems.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  totalItems2.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();





//generates Cruncher details

let Crunch = document.getElementById("cruncher-details");

let TotalAmount = () => {
  if(basket.length !==0){
    let TotalC02 = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.co2kg;
    }).reduce((x,y) => x+y, 0);
    
    let TotalPlastic = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.plastic;
    }).reduce((x,y) => x+y, 0);

    let TotalWood = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.wood;
    }).reduce((x,y) => x+y, 0);
    
    let TotalPaper = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.paper;
    }).reduce((x,y) => x+y, 0);

    let TotalFabric = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.fabrictextile;
    }).reduce((x,y) => x+y, 0);

    let TotalGlass = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.glass;
    }).reduce((x,y) => x+y, 0);

    let TotalMetal = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.metal;
    }).reduce((x,y) => x+y, 0);

    let TotalInk = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.ink;
    }).reduce((x,y) => x+y, 0);

    let TotalAdhesive = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.adhesive;
    }).reduce((x,y) => x+y, 0);

    let TotalCream = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.cream;
    }).reduce((x,y) => x+y, 0);

    let TotalEpoxy = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.epoxy;
    }).reduce((x,y) => x+y, 0);

    let TotalComposite = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.composite;
    }).reduce((x,y) => x+y, 0);
    
    let TotalSolid = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.solid;
    }).reduce((x,y) => x+y, 0);

    let TotalGreywater = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.greywater;
    }).reduce((x,y) => x+y, 0);

    let TotalEnergyuseKwh = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.energyuseKwh;
    }).reduce((x,y) => x+y, 0);

//
    let TotalMfg = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.lcaMfgKg
    }).reduce((x,y) => x+y, 0);


    let TotalMfgPerc = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.lcaMfgKg / TotalC02 * 100;
    }).reduce((x,y) => x+y, 0);

    let TotalTrnsp = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.lcaTrnspKg;
    }).reduce((x,y) => x+y, 0);

    let TotalTrnspPerc = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.lcaTrnspKg / TotalC02 * 100;
    }).reduce((x,y) => x+y, 0);


    let TotalUse = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.lcaUseKg;
    }).reduce((x,y) => x+y, 0);

    let TotalUsePerc = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.lcaUseKg / TotalC02 * 100;
    }).reduce((x,y) => x+y, 0);

    let TotalEol = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.lcaEolKg;
    }).reduce((x,y) => x+y, 0);

    let TotalEolPerc = basket.map((x) => {
      let {item,id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return item * search.lcaEolKg / TotalC02 * 100;
    }).reduce((x,y) => x+y, 0);


    Crunch.innerHTML = `
      <p>${TotalC02.toFixed(6)} <span>kg</span> <span>(CO<sub>2</sub>&nbsp;EQ.)</span></p>

      <div class="total-lca">
        <p>LIFE CYCLE ANALYSIS<br>on emissions impact:</p>
        <div>
          <p><span>${TotalMfg.toFixed(6)} <span>kg</span></span>   <span>${TotalMfgPerc.toFixed(2)}<span>%</span></span></p>
          <p>from Manufacturing</p>
        </div>
        <div>
          <p><span>${TotalTrnsp.toFixed(6)} <span>kg</span></span> <span>${TotalTrnspPerc.toFixed(2)}<span>%</span></span></p>
          <p>from Transportation</p>
        </div>
        <div>
          <p><span>${TotalUse.toFixed(6)} <span>kg</span></span>   <span>${TotalUsePerc.toFixed(2)}<span>%</span></span></p>
          <p>from Use</p>
        </div>
        <div>
          <p><span>${TotalEol.toFixed(6)} <span>kg</span></span>    <span>${TotalEolPerc.toFixed(2)}<span>%</span></span></p>
          <p>from End-of-Life</p>
        </div>
      </div>

      <div class="total-composition">
        <p>RESOURCE COMPOSITION   <br>(incl. packaging) for <br>all items:</p>
        <p><span>Plastic</span>   <span>...............</span>  <span>${TotalPlastic.toFixed(4)} gm&nbsp;</span></p>
        <p><span>Wood</span>      <span>...............</span>  <span>${TotalWood.toFixed(4)} gm&nbsp;</span></p>
        <p><span>Paper</span>     <span>...............</span>  <span>${TotalPaper.toFixed(4)} gm&nbsp;</span></p>
        <p><span>Fabric</span>    <span>...............</span>  <span>${TotalFabric.toFixed(4)} gm&nbsp;</span></p>
        <p><span>Glass</span>     <span>...............</span>  <span>${TotalGlass.toFixed(4)} gm&nbsp;</span></p>
        <p><span>Metal</span>     <span>...............</span>  <span>${TotalMetal.toFixed(4)} gm&nbsp;</span></p>
        <p><span>Ink</span>       <span>...............</span>  <span>${TotalInk.toFixed(4)} ml&nbsp;</span></p>
        <p><span>Adhesive</span>  <span>...............</span>  <span>${TotalAdhesive.toFixed(4)} gm&nbsp;</span></p>
        <p><span>Cream</span>     <span>...............</span>  <span>${TotalCream.toFixed(4)} gm&nbsp;</span></p>
        <p><span>Epoxy</span>     <span>...............</span>  <span>${TotalEpoxy.toFixed(4)} gm&nbsp;</span></p>
        <p><span>Composite</span> <span>...............</span>  <span>${TotalComposite.toFixed(4)} gm&nbsp;</span></p>
        <p><span>Solid</span>     <span>...............</span>  <span>${TotalSolid.toFixed(4)} gm&nbsp;</span></p>
        <p><span>Grey Water</span><span>...............</span>  <span>${TotalGreywater.toFixed(4)} ml&nbsp;</span></p>
        <p><span>Energy Use</span><span>...............</span>  <span>${TotalEnergyuseKwh.toFixed(4)} kWh</span></p>
      </div>

      <button class="print-button" onclick="window.print();">
      <p><span>PRINT</span></p>
      </button>

    `
  } else {
    Crunch.innerHTML = ``;
  };


}

TotalAmount();

// clears the "basket" and reloads page

let clearSelection = () => {
  basket =[]
  TotalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));

  const quantities = document.querySelectorAll(".qty");
  quantities.forEach(quantity => quantity.innerHTML = "0");

  Crunch.innerHTML = ``;
  cartImg.innerHTML = ``;
  cartItems.innerHTML = ``;

  //console.log(basket);
  //window.location.reload();
  //generateCartItems();
  //generateCartImg();
  
};




/*  Home Page Navigation, Info, Styling, etc... ------------------------------------- */



// Open the 'about' modal
  function openAbout() {
    document.getElementById("about").style.width = "100%";
    document.getElementById("open-about").style.display = "none";
    document.getElementById("close-about").style.display = "block";
  }
  
  // Close the 'about' modal
  function closeAbout() {
    document.getElementById("about").style.width = "0";
    document.getElementById("open-about").style.display = "block";
    document.getElementById("close-about").style.display = "none";
  }



//draggable 
Draggable.create(".item", {
  //bounds:"#products",
  allowNativeTouchScrolling:false,
  onDrag:function() {
    if (!this.hitTest(document.documentElement, "100%")) {
      console.log("hit the edge!");
    }
 }
});


function resetCards() {
  //reset positions before being dragged
  TweenLite.set(".item", {x:0,y:0});

}

function closeCards() {
  //collapse the .content div
  const contents = document.querySelectorAll(".content");
  contents.forEach(content => content.style.height = "0");

  //shorten the product card width
  const items = document.querySelectorAll(".item");
  items.forEach(item => item.style.width = "var(--item-wd)");

  //reduce the image height
  const imgWrappers = document.querySelectorAll(".img-wrap");
  imgWrappers.forEach(imgWrapper => imgWrapper.style.height = "var(--img-ht)");

  //hide the close-card buttons
  const closeCards = document.querySelectorAll(".close-card");
  closeCards.forEach(closeCard => closeCard.style.display = "none");

  //show the expand-card buttons
  const expandCards = document.querySelectorAll(".expand-card");
  expandCards.forEach(expandCard => expandCard.style.display = "block");
}




