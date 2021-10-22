import React from 'react';
import Products from './Products'; 

const Main = ({data}) => {
    return (
        <>
        <h3 className="text-center mt-3">Products</h3>
        <section className="container py-4">
                <div className="row justify-content-center">
                    <Products data={data}/>
                </div>
        </section>
        </>
    )
}

export default Main
