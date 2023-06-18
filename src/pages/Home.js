import React from 'react';
import { Products, Footer, ImageSlider, Navbar } from '../components';

import { useState, useEffect } from 'react';
// import { Javascript, Podcasts } from '@mui/icons-material';

const Home = (props) => {
  const [products, setProducts] = useState([]);
  // console.log('home display =', localStorage);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        // console.log('respnese', response);
        if (response.ok) {
          const jsonData = await response.json();

          setProducts(jsonData);
          localStorage.setItem('products', JSON.stringify(jsonData));
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log('heom hand clik', props);
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <Products products={products} addToCart={props.addToCart} />
      <Footer />
    </div>
  );
};

export default Home;
