import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const discount = total * 0.10;
    const grandTotal = total - discount;
    return (
        <div>
            <h3>Booking Summary</h3>
            <h5>Total Booked Package: {totalQuantity}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Discount: {discount.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;