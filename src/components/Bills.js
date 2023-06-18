import React, { useState } from 'react';
import styled from '../css/Bills.module.css';
import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SosTwoTone, Stroller } from '@mui/icons-material';
import { toast } from 'react-hot-toast';

const Bills = () => {
  const [storedItems, setStoredItems] = useState(() => {
    const items = localStorage.getItem('CartItemId');
    return items ? JSON.parse(items) : [];
  });

  console.log('from bills ', storedItems);

  let price = 0;
  for (let i = 0; i < storedItems.length; i++) {
    price += storedItems[i].price * storedItems[i].qty;
  }
  console.log('price', price);

  let gst = price / 20;

  let deleveryCharge = 40;

  let total = price + gst + deleveryCharge;
  total = total.toFixed(2);

  return (
    <div className={styled.BillContainer}>
      <div className={styled.orderHed}>
        <h2>Order Summary</h2>
      </div>
      <div className={styled.priceDesSec}>
        <table>
          <tr>
            <td>Price :</td>
            <td>
              <img src={require('../asset/image/inr.png')} />
              {price.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>GST :</td>
            <td>
              <img src={require('../asset/image/inr.png')} />
              {gst.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>Delevery Charge :</td>
            <td>
              <img src={require('../asset/image/inr.png')} />
              {deleveryCharge}
            </td>
          </tr>
          <tr>
            <th>Total :</th>
            <td>
              <img src={require('../asset/image/inr.png')} />
              {total}
            </td>
          </tr>
        </table>
      </div>
      <div className={styled.payBtnSec}>
        <Link to={'/checkout'}>
          <Button variant="contained" className={styled.paybtn}>
            proced to pay
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Bills;
