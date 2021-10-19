import React, { useState, useEffect} from 'react';
import './App.css';
import Products from './components/Products';

function App() {
  /* fetch products */
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((products) => setProducts(products));
  }, []);
  /* end fetch products */

  return(
    <div className="container">
      <h1>Ecommerce shopping cart</h1>
      <hr/>
      <div className="row">
        <div className="col-sm-8">
          <Products/>
        </div>
        <div className="col-sm-4">
          cart
        </div>
      </div>
    </div>
  );
}

export default App;
