<<<<<<< HEAD
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <span class="remove" data-id="${item.Id}">X<span>
</li>`;

  return newItem;
}

function renderCartContents() {
  const cartItems = getLocalStorage("cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  var remove = document.getElementsByClassName("remove");
  Array.from(remove).forEach(function (element) {
    element.addEventListener("click", function (event) {
      const targetElement = event.target;
      removeFromCart(targetElement);
    });
  });
  //Array.from(remove).forEach(function (element) { setClick(element, removeFromCart) })
}

//handle clicks for remove

function removeFromCart(targetElement) {
  const clickedElement = targetElement.dataset.id;
  const cart = getLocalStorage("cart");
  var filterd = cart.filter(function (el) {
    return el.Id != clickedElement;
  });
  setLocalStorage("cart", filterd);
  renderCartContents();
}

renderCartContents();
=======
import ShoppingCart from "./ShoppingCart.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const cart = new ShoppingCart("cart", ".product-list");
cart.displaycart();
>>>>>>> 4f247f43caef9dc9b4907bf7de6d7b9a1b8a8d58
