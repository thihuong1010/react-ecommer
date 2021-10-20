import React from 'react';
import Products from "./components/Products";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }
  /* fetch products */
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    return(
      <div className="container">
        <h1>Ecommerce Shopping Cart</h1>
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
  
}

export default App;