const title = document.getElementById("title");
const category = document.getElementById("category");
const description = document.getElementById("description");
const discount = document.getElementById("discount");
const price = document.getElementById("price");
const stock = document.getElementById("stock");
const rating = document.getElementById("rating");
const brand = document.getElementById("brand");
const ip = document.getElementById("ip");
const image = document.getElementById("image");

  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const product = {
    title: title.value,
    category: category.value,
    description: description.value,
    discount: discount.value,
    price: price.value,
    stock: stock.value,
    rating: rating.value,
    brand: brand.value,
    ip: ip.value,
    image: image.value,
    };
    fetch("http://localhost:1234/products", {
      method: "POST",

      body: JSON.stringify(product),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data loaded successfully", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    });
    
    
 
 

