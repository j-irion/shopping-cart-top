import React from 'react';
import styles from './homepage.module.css';
import { Link, useLoaderData } from 'react-router-dom';

export async function loader() {
  const res = await fetch('https://fakestoreapi.com/products?limit=10');
  const data = await res.json();
  return data;
}

export default function Homepage() {
  const products = useLoaderData();

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.subContainer} ${styles.subContainer1}`}>
          <h1>Your one-stop destination for all your shopping needs</h1>
          <p>
            Discover an unparalleled shopping experience with our extensive
            selection of products, unbeatable prices, and exceptional customer
            service. Shop now and transform your shopping journey with us.
          </p>
          <Link to='store'>Shop Now</Link>
        </div>
        <div className={`${styles.subContainer} ${styles.subContainer2}`}>
          <h2>Featured Items</h2>
          <div>
            {products.slice(0, 4).map((product) => (
              <Link
                to={`product/${product.id}`}
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
        </div>
      </div>
    </>
  );
}
