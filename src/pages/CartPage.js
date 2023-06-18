import React from 'react';
import {
  CartItems,
  Navbar,
  DeliveryAddress,
  Bills,
  Footer,
} from '../components';
import styled from '../css/CartPage.module.css';

const CartPage = (props) => {
  // console.log('props in cart page', props);
  return (
    <div className="">
      <Navbar />
      <div className={styled.orderSection}>
        <div className={styled.orderDetails}>
          <DeliveryAddress />
          <CartItems
            deleteProduct={props.deleteProduct}
            hanleIncrease={props.hanleIncrease}
            handleDecrease={props.handleDecrease}
          />
        </div>
        <div className={styled.billSection}>
          <Bills />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
