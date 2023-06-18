import React, { useState } from 'react';

import styled from '../css/CartOne.module.css';
const CartOneItem = (props) => {
  // console.log('props from cartone items', props);

  const [products, setProducts] = useState(() => {
    const products = window.localStorage.getItem('products');
    return JSON.parse(products);
  });

  const index = products.findIndex((obj) => obj.id == props.itemId.id);

  const product = products[index];

  // console.log('oneCart', props);
  // console.log('product added to cart ', product);
  return (
    <div className={styled.oneItem}>
      <div className={styled.ImageSection}>
        <img src={product.image} />
      </div>
      <div className={styled.DescriptionSection}>
        <h4>{product.title}</h4>
        <p className={styled.pricePara}>
          <img src={require('../asset/image/inr.png')} /> {product.price}
        </p>
        <p className={styled.ButtonSec}>
          Quantity : <span className="quantityNo"> {props.itemId.qty}</span>
        </p>
        <div className={styled.ButtonSec}>
          <img
            src={require('../asset/image/plus.png')}
            className={styled.plusbtn}
            onClick={() => props.hanleIncrease(product)}
          />

          <img
            src={require('../asset/image/minus.png')}
            className={styled.minusProduct}
            onClick={() => props.handleDecrease(product)}
          />

          <img
            src={require('../asset/image/bin.png')}
            onClick={() => props.deleteProduct(product)}
            className={styled.deleteProductbtn}
          />
        </div>
      </div>
    </div>
  );
};

export default CartOneItem;
