import React, { useId } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar, OneProductDetails, Footer } from '../components';

// import { useValue } from '../context/database';

const ProductsDetails = (props) => {
  const userId = useParams();
  // console.log('userid form productDetials', userId);
  // const data = useValue();
  const addToCart = props.addToCart;
  const hanleIncrease = props.hanleIncrease;
  const handleDecrease = props.handleDecrease;

  return (
    <div>
      <Navbar />
      <OneProductDetails
        userId={userId}
        addToCart={addToCart}
        hanleIncrease={hanleIncrease}
        handleDecrease={handleDecrease}
      />
      <Footer />
    </div>
  );
};

export default ProductsDetails;
