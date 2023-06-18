import React, { useState } from 'react';
import classes from '../css/navbar.module.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [items, setItems] = useState(() => {
    const storedItem = localStorage.getItem('CartItemId');
    return storedItem ? JSON.parse(storedItem) : [];
  });

  console.log('from navabar ', items);
  let qty = 0;
  for (let i = 0; i < items.length; i++) {
    qty += items[i].qty;
  }
  console.log('qty:', qty);

  let logedin = true;
  return (
    <div className={classes.navbar}>
      <div className={classes.navlogo}>
        <div className={classes.logoImg}>
          <img src={require('../asset/image/amazon.png')} alt="logo" />
        </div>
      </div>
      <div className={classes.navSearchSection}>
        <div className={classes.searchConteainer}>
          <input type="text" />
          <button type="submit">search</button>
        </div>
      </div>
      <div className={classes.navCartSection}>
        <div className={classes.cartIcon}>
          <Link to={'/cart'}>
            <img src={require('../asset/image/cart.png')} />
            <div className={classes.countItems}>{qty}</div>
          </Link>
        </div>
        <div className={classes.logedUser}>
          {logedin ? 'Name' : <button>log in</button>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
