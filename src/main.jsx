import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root/root';
import './index.css';
import Homepage, { loader as homepageLoader } from './routes/homepage/homepage';
import ProductPage, {
  loader as productpageLoader,
} from './routes/productpage/productpage';
import Store, { loader as storeLoader } from './routes/store/store';
import ShoppingCart, {
  loader as shoppingCartLoader,
} from './routes/shoppingcart/shoppingcart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Homepage />, loader: homepageLoader },
      {
        path: 'product/:productId',
        element: <ProductPage />,
        loader: productpageLoader,
      },
      {
        path: 'store',
        element: <Store />,
        loader: storeLoader,
      },
      { path: 'cart', element: <ShoppingCart />, loader: shoppingCartLoader },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
