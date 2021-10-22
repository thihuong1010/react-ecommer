import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart,
    cartTotal
  } = useCart();

  /* set render when cart empty */
  if(isEmpty) return <section className="py-4">
    <div className="justify-content-center">
      <div className="col-12">
        <h3>Your cart is empty</h3>
        </div>
    </div>
  </section>

  return (
    <section className="py-4">
      <div className="justify-content-center">
        <div className="col-12">
          <h3>Cart ({totalUniqueItems}), totals Items ({totalItems})</h3>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                  <td>
                    <img src={item.image} alt="" style={{height: '3rem'}}/>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>Quantity: ({item.quantity})</td>
                  <td>
                    <button 
                    className="btn btn-info ms-2"
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    <button className="btn btn-info ms-2"
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                    <button className="btn btn-danger ms-2"
                    onClick={() => removeItem(item.id)}>Remove Item</button>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h3>Total price: $ {cartTotal}</h3>
        </div>
        <div id="clear_check" className="col-auto">
          <button className="btn btn-danger m-2"
          onClick={() => emptyCart()}
          >Clear cart</button>
          <button className="btn btn-warning m-2">Check out</button>
        </div>
      </div>
    </section>
    )
}

export default Cart