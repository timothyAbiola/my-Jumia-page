(function display() {
  let views = document.getElementById("view");
  let mainDiv = document.getElementById("mainDiv");
  const stock = document.getElementById("stock")
  const product = JSON.parse(localStorage.getItem("product"));
    console.log("new product", product)
    views.innerHTML = product[0].category;
    mainDiv.innerHTML = product[0].category;
  product.forEach(item => {
    let desc = item.description
    if (desc.length >= 25) {
      desc = item.description.slice(0, 21);
      stock.innerHTML += `<div class="perStock"> 
        <img src="${item.image}" class="stockImg"> 
        <p class="desc">${desc}...</p>
        <p class="s-price">₦${item.price}</p>
        <p class="s-through">₦${item.ip}</p>
      </div>`;
    }
    });
}())
