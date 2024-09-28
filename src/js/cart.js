import { getLocalStorage, setClick, setLocalStorage } from "./utils.mjs";

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
  totalCart();
  // renderCartContents();
}

function totalCart() {
  var items = getLocalStorage("cart");
  var total = 0.0;

  const cartFooter = document.querySelector(".cart-footer");
  const cartTotal = document.querySelector(".cart-total");
  if (items.length != 0) {
    items.forEach((item) => {
      total += parseFloat(item.FinalPrice);
    });

    cartTotal.textContent = `total: $${total.toFixed(2)}`;
    cartFooter.removeAttribute("hidden");
  } else {
    cartFooter.hidden = true;
  }
  renderCartContents();
}

renderCartContents();
totalCart();
