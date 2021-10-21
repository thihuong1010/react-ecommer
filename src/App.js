import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import ProdsDetail from './components/ProdsDetail';

function App() {
  /* fetch product */
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);

  return(
    <Router>
      <Route exact path="/">
        <Main data={data}/>
      </Route>
      <Route path="/prods/id">
        <ProdsDetail data={data}/>
      </Route>
    </Router>
  );
}

export default App;