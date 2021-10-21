import React from 'react';
import Products from './Products';
import Cart from './Cart';

const Main = ({data}) => {
    return (
        <div className="container">
            <h1>Droppe Xmas</h1>
            <hr/>
            <div className="row">
                <div className="col-sm-8">
                    <Products data={data}/>
                </div>
                <div className="col-sm-4">
                    <Cart/>
                </div>
            </div>
        </div>
    )
}

export default Main
