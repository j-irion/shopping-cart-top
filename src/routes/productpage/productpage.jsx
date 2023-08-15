import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from './productpage.module.css';
import { addToCart } from '../../cart';

export async function loader({ params }) {
  const product = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const data = await product.json();
  return data;
}

export default function ProductPage() {
  const product = useLoaderData();

  const handleClick = () => {
    const input = document.getElementById('amount');
    addToCart(product, input.value);
    input.value = 0;
  };

  return (
    <>
      <div className={styles.flexContainer}>
        <div className={styles.gridContainer}>
          <img src={product.image} />
          <div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <input type='number' name='amount' id='amount' defaultValue={1} />
            <button onClick={handleClick}>Add to cart</button>
          </div>
          <div>
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
