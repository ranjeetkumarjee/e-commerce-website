import React from 'react';
import { Checkout } from '../components';
import styled from '../css/checkoutPage.module.css';

const CheckOutPage = () => {
  return (
    <div className={styled.checkoutSec}>
      <Checkout />
    </div>
  );
};

export default CheckOutPage;
