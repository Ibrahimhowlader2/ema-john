import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';


const OrderReviews = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);


    return (
        <div className="shop-container">
            {/* <h2>{products.length}</h2> */}
            <div className="product-container">
                {/* {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                } */}
            </div>
            <div className="cart-container">
                <h2> cart {cart.length}</h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReviews;