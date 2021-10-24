import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';

function Wishlist() {
    /* fetch 5 carts */
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts?limit=5')
        .then((res) => res.json())
        .then((carts) => setCarts(carts));
    }, []);

    return (
        <section className="">
        <Navbar/>
        <div className="container justify-content-center">
            <div className="row">
                <h4 className="text-center" id="urwish">Your wishlist</h4>
                {carts.map((cart, index) => (
                    <div key={index} id="5carts">
                        <h5>ID {cart.id}</h5>
                        <h3>Products: {cart.products.productId}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Wishlist