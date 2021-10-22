import React, { useEffect, useState } from 'react';

import Main from './components/Main';
import Cart from './components/Cart';
import {CartProvider} from 'react-use-cart';

function App() {
  /* fetch product */
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);

  return(
    <>
    <CartProvider>
      <Main data={data}/>
      <Cart data={data}/>
    </CartProvider>
    </>
  );
}

export default App;