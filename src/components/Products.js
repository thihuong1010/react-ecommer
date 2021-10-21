import React from 'react'

const Products = ({data}) => {
    return (
        <>
        {data.map((prods, index) => (
            <div key={index} className="card">
                <h4>{prods.title}</h4>
            </div>
        ))}
        </>
    )
}

export default Products
