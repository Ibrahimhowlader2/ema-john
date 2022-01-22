import React from 'react';

const Cart = ({cart}) => {
    

    let total = 0;
    let totalQuantity = 0;

    for(const product of cart){
        /* if(!product.quantity){
            product.quantity =1;
        } */
        product.quantity = !product.quantity ? 1 : product.quantity;
        total += product.price * product.quantity;
        totalQuantity += product.quantity;
    }

    const shipping =total > 0 ? 15 : 0;
    const tax = (total + shipping) / 10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Cart {totalQuantity}</h3>
            <h2>Total : {total.toFixed(2)}</h2>
            <h3>Shipping {shipping.toFixed(2)}</h3>
            <h3>Tax {tax.toFixed(2)}</h3>
            <h2>Grand Total : {grandTotal.toFixed(2)}</h2>

        </div>
    );
};

export default Cart;