import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import {
  getCart,
  removeFromCart as removeFromCartAPI,
  updateCart as updateCartAPI,
  clearCart as clearCartAPI,
} from '../../cart';
import styles from './shoppingcart.module.css';
import Trashcan from '../../assets/trashcan.svg';

export async function loader() {
  const cart = await getCart();
  return cart;
}

export default function ShoppingCart() {
  const cart = useLoaderData();
  const navigate = useNavigate();

  const removeFromCart = async (item) => {
    await removeFromCartAPI(item);
    navigate('../cart');
  };

  const updateCart = async (item, amount) => {
    await updateCartAPI(item, amount);
    navigate('../cart');
  };

  const clearCart = async () => {
    await clearCartAPI();
    navigate('../cart');
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Cart</h1>
        {cart.length === 0 && <p>Your cart is empty</p>}
        {cart.map((item) => (
          <div key={item.id} className={styles.item}>
            <div>
              <img src={item.item.image} />
            </div>
            <div>
              <h4>{item.item.title}</h4>
              <p>${item.item.price * item.amount}</p>
            </div>
            <div>
              <p>Quantity: </p>
              <input
                type='number'
                defaultValue={item.amount}
                onChange={(e) => updateCart(item, +e.target.value)}
              />
            </div>
            <img src={Trashcan} onClick={() => removeFromCart(item)} />
          </div>
        ))}
        {cart.length !== 0 && <button onClick={clearCart}>Checkout</button>}
      </div>
    </>
  );
}
