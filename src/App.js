import React, { useEffect, useState } from 'react';

import Main from './components/Main';
import Cart from './components/Cart';
import {CartProvider} from 'react-use-cart';
import Navbar from './components/Navbar';

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
      <Navbar data={data}/>
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <Main data={data}/>
          </div>
          <div className="col-sm-3">
            <Cart data={data}/>
          </div>
        </div>
      </div>
    </CartProvider>
    </>
  );
}

export default App;