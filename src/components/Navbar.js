import React from 'react';
import {FaTree} from 'react-icons/fa';
import {BsFillSuitHeartFill} from 'react-icons/bs';
import {BsFillCartFill} from 'react-icons/bs';
import { useCart } from 'react-use-cart';

const Navbar = () => {
    const { totalUniqueItems } = useCart();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#/">Droppe Xmas <FaTree/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarText" aria-controls="navbarText" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#/">Home</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <a className="nav-link" href="#/"><BsFillSuitHeartFill/></a>
                    </span>
                    <span className="navbar-text">
                        <a className="nav-link" href="#/"><BsFillCartFill/> ({totalUniqueItems})</a>
                    </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar