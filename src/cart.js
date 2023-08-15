import localforage from 'localforage';

export async function getCart() {
  let cart = await localforage.getItem('cart');
  if (!cart) cart = [];
  return cart;
}

export async function addToCart(item, amount) {
  let cart = await getCart();
  const index = cart.findIndex((i) => i.id === item.id);
  if (index !== -1) {
    updateCart(item, +amount + +cart[index].amount);
    return;
  }
  const newItem = { id: item.id, amount: +amount, item: item };
  cart.unshift(newItem);
  await set(cart);
  return newItem;
}

export async function updateCart(item, amount) {
  let cart = await getCart();
  const index = cart.findIndex((i) => i.id === item.id);
  cart[index].amount = +amount;
  await set(cart);
}

export async function removeFromCart(item) {
  let cart = await getCart();
  const index = cart.findIndex((i) => i.id === item.id);
  cart.splice(index, 1);
  await set(cart);
}

export async function clearCart() {
  let cart = await getCart();
  cart = [];
  await set(cart);
}

function set(items) {
  return localforage.setItem('cart', items);
}
