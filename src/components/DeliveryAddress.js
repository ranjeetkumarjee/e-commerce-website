import React from 'react';

import styled from '../css/DeliveryAddress.module.css';
const DeliveryAddress = () => {
  return (
    <div className={styled.Address}>
      <div className={styled.siNo}>
        <h1>1</h1>
      </div>
      <div className={styled.AddHed}>
        <h2>Delivery Address</h2>
      </div>
      <div className={styled.AddressContainer}>
        <p>MDU Rohtak Boys Hostel gate</p>
        <p>Rohtak Haryana 124001</p>
      </div>
      <div className={styled.AddressChangeBtnSec}>
        <button>Change</button>
      </div>
    </div>
  );
};

export default DeliveryAddress;
