import React from 'react';
import styles from './store.module.css';
import { Link, useLoaderData } from 'react-router-dom';

export async function loader() {
  const res = await fetch('https://fakestoreapi.com/products?limit=10');
  const data = await res.json();
  return data;
}

export default function Store() {
  const products = useLoaderData();

  return (
    <>
      <div className={styles.flexContainer}>
        {products.map((product) => (
          <Link
            to={`../product/${product.id}`}
            className={styles.productCard}
            key={product.id}
          >
            <img src={product.image} />
            <div>
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
