import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root/root';
import './index.css';
import Homepage, { loader as homepageLoader } from './routes/homepage/homepage';
import ProductPage, {
  loader as productpageLoader,
} from './routes/productpage/productpage';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
