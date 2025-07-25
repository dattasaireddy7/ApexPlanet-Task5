const products = [
  { name: "Laptop", price: "$800", image: "https://via.placeholder.com/200?text=Laptop" },
  { name: "Headphones", price: "$120", image: "https://via.placeholder.com/200?text=Headphones" },
  { name: "Smartphone", price: "$500", image: "https://via.placeholder.com/200?text=Phone" },
  { name: "Watch", price: "$150", image: "https://via.placeholder.com/200?text=Watch" },
];

const productContainer = document.getElementById("products");
const searchBox = document.getElementById("searchBox");
const cartCount = document.getElementById("cartCount");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalClose = document.getElementById("modalClose");
const darkModeToggle = document.getElementById("darkModeToggle");

let cart = [];

function renderProducts(filter = "") {
  productContainer.innerHTML = "";
  const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));

  filtered.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    card.onclick = () => showModal(product);
    productContainer.appendChild(card);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  cartCount.textContent = cart.length;
  event.stopPropagation(); // prevent modal open on button click
}

function showModal(product) {
  modalImg.src = product.image;
  modalTitle.textContent = product.name;
  modalPrice.textContent = product.price;
  modal.classList.add("show");
}

modalClose.onclick = () => modal.classList.remove("show");

searchBox.addEventListener("input", (e) => renderProducts(e.target.value));
darkModeToggle.addEventListener("click", () => document.body.classList.toggle("dark"));

renderProducts();

