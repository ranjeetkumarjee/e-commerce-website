import React from 'react';
import styled from '../css/checkout.module.css';

const Checkout = () => {
  const handlePyaSubmit = () => {
    console.log('hello payment');
  };
  return (
    <div className={styled.paymentSec}>
      <div className={styled.checkHed}>
        <h2>Checkout</h2>
      </div>
      <div className={styled.payformSec}>
        <form onSubmit={handlePyaSubmit}>
          <div className={styled.cardNumber}>
            <label>CARD NUMBER</label>
            <input type="number" placeholder="Valid Card No" />
          </div>
          <div className={styled.DateAndCvv}>
            <div className="date">
              <label>EXPIRY DATE</label>
              <input
                type="number"
                placeholder="MM"
                className={styled.exmonth}
              />
              <input type="number" placeholder="YY" className={styled.exYear} />
            </div>
            <div className={styled.cvv}>
              <label>CV CODE</label>
              <input type="number" placeholder="CV" />
            </div>
          </div>
          <div className={styled.nameSec}>
            <label>NAME ON CARD</label>
            <input type="text" placeholder="Name on Card" />
          </div>
          <div className={styled.amountSec}>
            <h3>
              Amount :
              <img src={require('../asset/image/inr.png')} />
              599
            </h3>
          </div>
          <div className={styled.paybtnSec}>
            <button onClick={handlePyaSubmit}>pay</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
