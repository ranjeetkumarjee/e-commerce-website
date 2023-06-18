import React, { useState } from 'react';
import CartOneItem from './CartOneItem';
import { useParams } from 'react-router-dom';

import styled from '../css/CartItems.module.css';
import { JoinFull } from '@mui/icons-material';

const CartItems = (props) => {
  console.log('props form cart items', props);
  const [addedItemsId, setaddedItem] = useState(() => {
    const ids = localStorage.getItem('CartItemId');
    return ids ? JSON.parse(ids) : [];
  });
  console.log('from cart items ', addedItemsId);

  // console.log('props form cartItem', props);
  return (
    <div className={styled.OneCartItemContainer}>
      <div className={styled.selectedItemSec}>
        <div className={styled.count2}>
          <h2>2</h2>
        </div>
        <div className={styled.hedSec}>
          <h2>Selected Products</h2>
        </div>
      </div>
      <div className={styled.soredItemsContener}>
        {addedItemsId.map((id) => (
          <CartOneItem
            itemId={id}
            deleteProduct={props.deleteProduct}
            hanleIncrease={props.hanleIncrease}
            handleDecrease={props.handleDecrease}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
