import React, { useState } from 'react';

import { faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import classes from '../css/ProductsCard.module.css';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import SignIn from './Signin';

const Card = (props) => {
  const { product, addToCart } = props;
  // console.log('from Card', props);
  // console.log('product form Card props', product);

  // window.localStorage.setItem('addedCartItem', JSON.stringify(product));

  // const [storedProduct, setStoredProduct] = useState(() => {
  //   const storedCartProduct = window.localStorage.getItem('addedCartItem');
  //   return storedCartProduct ? JSON.parse(storedCartProduct) : [];
  // });

  // const product = props.product;
  let title = product.title;
  if (product.title.length > 65) {
    title = title.slice(0, 50) + ' ...';
  }

  return (
    <div className={classes.Card}>
      <div className={classes.imgContainer}>
        <Link to={`/details/${product.id}`}>
          <img src={product.image} alt="image here" />
        </Link>
      </div>

      <div className={classes.productTitle}>
        <Link to={`/details/${product.id}`}>
          <p>{title}</p>
        </Link>
      </div>

      <div className={classes.ratingSection}>
        <div className={classes.productRating}>
          <p className={classes.rateData}>{product.rating.rate}</p>
          <img src={require('../asset/image/star.png')} alt="start" />
        </div>
        <div className={classes.ratingCount}>
          <p className={classes.ratingCountData}>
            ({product.rating.count} )Ratings & Reviews
          </p>
        </div>
      </div>
      <div className={classes.productPrice}>
        <img src={require('../asset/image/inr.png')} alt="image here" />
        <p>{product.price}</p>
        <p className={classes.initialPrice}>MRP : {product.price + 100}</p>
      </div>
      <div className={classes.addToCartButtonDiv}>
        <Link to={`/details/${product.id}`}>
          <Button variant="contained" href="">
            Buy now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
