import React, { useState } from 'react';
import { Link, json } from 'react-router-dom';

import classes from '../css/OneProducts.module.css';
import { Class, ClassSharp } from '@mui/icons-material';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useValue } from '../context/database';

const OneProductDetails = (props) => {
  console.log('props form one product details', props);

  const [storedProducts, setStoredProducts] = useState(() => {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
  });

  const index = storedProducts.findIndex((obj) => obj.id == props.userId.id);
  const currentObj = storedProducts[index];

  // console.log('one product print', storedProducts);

  // set price on discount
  let price = (currentObj.price * 10) / 9;
  price = price.toFixed(2);
  console.log('qty from oneproducts', currentObj);
  return (
    <div className={classes.oneProduct}>
      <div className={classes.imageSection}>
        <img src={currentObj.image} alt={currentObj.id} />
      </div>
      <div className={classes.productDetails}>
        <div className={classes.ProductDescription}>
          <div className={classes.titleHed}>
            <div className={classes.titileName}>
              <h2>{currentObj.title}</h2>
            </div>
            <div>
              <div className={classes.rating}>
                <p>{currentObj.rating.rate}</p>
                <img src={require('../asset/image/star.png')} />
              </div>
              <p>({currentObj.rating.count}) Rating & Reviews</p>
            </div>
          </div>

          <div className={classes.Pricing}>
            <p className={classes.Discount}>-10%</p>
            <p className={classes.currentPrice}>
              <sup>
                <img src={require('../asset/image/inr.png')} />
              </sup>
              <span className={classes.PriceAmount}>{currentObj.price}</span>
            </p>
            <p>
              MRP :
              <img src={require('../asset/image/inr.png')} />
              <p className={classes.initialPrice}>{price}</p>
            </p>
          </div>
          <div className={classes.OfferSection}>
            <div className={classes.offerBoxes}>
              <h4>No Cost EMI</h4>
              <p>Upto ₹290.95 EMI interest savings on select Credit Cards…</p>
            </div>
            <div className={classes.offerBoxes}>
              <h4>Bank Offer</h4>
              <p>Upto ₹1,750.00 discount on select Credit Cards, HDFC…</p>
            </div>
            <div className={classes.offerBoxes}>
              <h4>Partner Offer</h4>
              <p>Get GST invoice and save up to 28% on business purchases.</p>
            </div>
          </div>
          <div className={classes.ProductLable}>
            <div className={classes.productFeatureIcon}>
              <img src={require('../asset/image/fast-delivery.png')} />
              <p className={classes.IconHeding}>free Delivery</p>
            </div>
            <div className={classes.productFeatureIcon}>
              <img src={require('../asset/image/payment-method.png')} />
              <p className={classes.IconHeding}>Pay on Delivery</p>
            </div>
            <div className={classes.productFeatureIcon}>
              <img src={require('../asset/image/refund.png')} />
              <p className={classes.IconHeding}>10 days Returnable</p>
            </div>
            <div className={classes.productFeatureIcon}>
              <img src={require('../asset/image/warranty.png')} />
              <p className={classes.IconHeding}>3 years warranty</p>
            </div>
            <div className={classes.productFeatureIcon}>
              <img src={require('../asset/image/trophy.png')} />
              <p className={classes.IconHeding}>Top Brand</p>
            </div>
          </div>
        </div>
        <div className={classes.orderSection}>
          <div className={classes.price}>
            <img src={require('../asset/image/inr.png')} />
            <h5>{currentObj.price}</h5>
          </div>
          <div className={classes.locationSection}>
            <Link className={classes.location}>
              <img src={require('../asset/image/Address.png')} />
              <p>Deliver to Ranjeet: Rohtak 124001</p>
            </Link>
          </div>

          <div buttunSection>
            <Button
              variant="contained"
              color="warning"
              onClick={() => props.addToCart(currentObj)}
            >
              Add to Cart
            </Button>
            <br />
            <br />
            <Link to={`/cart`}>
              <Button
                variant="contained"
                color="warning"
                onClick={() => props.addToCart(currentObj)}
              >
                Buy now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProductDetails;
