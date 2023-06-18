import React from 'react';
import classes from '../css/Products.module.css';

import Card from './Card';
const Products = (props) => {
  console.log('Product page ', props);
  // console.log('form products.js', props);
  return (
    <>
      <h3 className={classes.productHead}>Our Products </h3>
      <div className={classes.productContainer}>
        {props.products.map((item) => (
          <Card key={item.id} product={item} addToCart={props.addToCart} />
        ))}
      </div>
    </>
  );
};

export default Products;
