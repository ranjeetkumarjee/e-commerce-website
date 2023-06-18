import { createContext, useContext, useState, useEffect } from 'react';

// const productsContest = createContext();

// // console.log('', productsContest);
// export const useValue = () => {
//   return useContext(productsContest);
// };

export const CustomContext = (/*{ children } */) => {
  // const [products, setProducts] = useState([]);

  const [products, setProducts] = useState(() => {
    // Retrieve products from localStorage if available
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);

        localStorage.setItem('products', JSON.stringify(data));
      });
  }, []);

  // return (
  //   <productsContest.Provider value={{ products }}>
  //     {children}
  //   </productsContest.Provider>
  // );
};
