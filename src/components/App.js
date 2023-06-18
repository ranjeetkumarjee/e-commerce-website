import '../css/App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { faL } from '@fortawesome/free-solid-svg-icons';

import ProductsDetails from '../pages/ProductsDetails';
import Home from '../pages/Home';
import CartPage from '../pages/CartPage';
import SignUpPage from '../pages/SignUpPage';
import SigninPage from '../pages/SigninPage';
import CheckOutPage from '../pages/CheckOutPage';

import { getProducts } from '../api';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';

import { useState, useEffect } from 'react';
import { click } from '@testing-library/user-event/dist/click';
import { SosTwoTone } from '@mui/icons-material';

function App() {
  const [storedItems, setCartItemId] = useState(() => {
    const storedItems1 = localStorage.getItem('CartItemId');
    if (!storedItems1.length) {
      localStorage.setItem('CartItemId', JSON.stringify([]));
    }
    return storedItems1 ? JSON.parse(storedItems1) : [];
  });

  const addToCart = (product) => {
    if (storedItems) {
      let storeStatus = false;
      for (let i = 0; i < storedItems.length; i++) {
        if (storedItems[i].id == product.id) {
          storeStatus = true;
          break;
        }
      }

      if (!storeStatus) {
        storedItems.push({
          id: product.id,
          qty: 1,
          price: product.price,
        });
        localStorage.setItem('CartItemId', JSON.stringify(storedItems));
      }
    }
  };

  const hanleIncrease = (product) => {
    console.log('handle increase');
    if (storedItems) {
      let index = -1;
      for (let i = 0; i < storedItems.length; i++) {
        if (storedItems[i].id == product.id) {
          index = i;
          break;
        }
      }
      const store = 10;
      if (index >= 0 && storedItems[index].qty <= store) {
        storedItems[index].qty++;
      }

      localStorage.setItem('CartItemId', JSON.stringify(storedItems));
    }
    window.location.reload();
  };

  const handleDecrease = (product) => {
    console.log('handle increase');
    if (storedItems) {
      let index = -1;
      for (let i = 0; i < storedItems.length; i++) {
        if (storedItems[i].id == product.id) {
          index = i;
          break;
        }
      }

      if (index >= 0 && storedItems[index].qty > 1) {
        storedItems[index].qty--;
      }

      localStorage.setItem('CartItemId', JSON.stringify(storedItems));
    }
    window.location.reload();
  };

  const deleteProduct = (product) => {
    // console.log('delete clicked');
    if (storedItems) {
      let storeStatus = false;
      for (let i = 0; i < storedItems.length; i++) {
        if (storedItems[i].id == product.id) {
          storeStatus = true;
          break;
        }
      }
      let currentIds;
      if (storeStatus) {
        // storedItems.pop(product.id);
        currentIds = storedItems.filter(
          (storedId) => storedId.id != product.id
        );
      }
      localStorage.setItem('CartItemId', JSON.stringify(currentIds));
    }
    window.location.reload();
  };

  console.log(localStorage);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home addToCart={addToCart} />} />
          <Route
            exact
            path="/details/:id"
            element={
              <ProductsDetails
                addToCart={addToCart}
                hanleIncrease={hanleIncrease}
                handleDecrease={handleDecrease}
              />
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <CartPage
                hanleIncrease={hanleIncrease}
                deleteProduct={deleteProduct}
                handleDecrease={handleDecrease}
              />
            }
          />
          <Route exact path="/checkout" element={<CheckOutPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/signin" element={<SigninPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
