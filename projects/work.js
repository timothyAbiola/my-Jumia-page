// let cartFilter = []
function reveal() {
  let reveal = document.querySelector(".reveal");
  const scrolled = window.scrollY;
  if (scrolled >= 73) {
    reveal.style.position = "fixed";
    reveal.style.top = 0;
  } else {
    reveal.style.position = "absolute";
    reveal.style.top = "unset";
  }
}
window.addEventListener("scroll", reveal);

function display(cart) {
  // localStorage.removeItem("product")
  fetch("http://localhost:1234/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let cartFilter = data.filter((product) => product.category === cart);
      console.log(cartFilter)
      localStorage.setItem("product", JSON.stringify(cartFilter));
      window.location.href = "view.html"
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

