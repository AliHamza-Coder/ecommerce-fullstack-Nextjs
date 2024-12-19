// components/Cart.js

import styles from '../styles/Cart.module.css';

const Cart = () => {
    return (
        <section className={styles.cartAria}>
            <div className={styles.cart}>
                <div className={styles.cartHeader}>
                    <h1>Your Shopping Cart</h1>
                </div>
                <div className={styles.cartItems}>
                    <div className={styles.cartItem}>
                        <img
                            src="/Grand 1 - Furniture Store Responsive Magento Theme/11_compressed_7.jpg"
                            alt="Product 1"
                            className={styles.itemImage}
                        />
                        <div className={styles.itemDetails}>
                            <div className={styles.itemName}>Product 1</div>
                            <div className={styles.itemPrice}>$19.99</div>
                        </div>
                        <div className={styles.itemQuantity}>
                            <label htmlFor="quantity1" className="sr-only">
                                Quantity:
                            </label>
                            <input
                                type="number"
                                id="quantity1"
                                className={styles.quantityInput}
                                value="1"
                                min="1"
                            />
                        </div>
                        <div className={styles.itemTotal}>$19.99</div>
                    </div>

                    <div className={styles.cartItem}>
                        <img
                            src="images/12_compressed_1.jpg"
                            alt="Product 2"
                            className={styles.itemImage}
                        />
                        <div className={styles.itemDetails}>
                            <div className={styles.itemName}>Product 2</div>
                            <div className={styles.itemPrice}>$24.99</div>
                        </div>
                        <div className={styles.itemQuantity}>
                            <label htmlFor="quantity2" className="sr-only">
                                Quantity:
                            </label>
                            <input
                                type="number"
                                id="quantity2"
                                className={styles.quantityInput}
                                value="2"
                                min="1"
                            />
                        </div>
                        <div className={styles.itemTotal}>$49.98</div>
                    </div>

                    <div className={styles.cartItem}>
                        <img
                            src="images/6_compressed_1_4.jpg"
                            alt="Product 3"
                            className={styles.itemImage}
                        />
                        <div className={styles.itemDetails}>
                            <div className={styles.itemName}>Product 3</div>
                            <div className={styles.itemPrice}>$14.99</div>
                        </div>
                        <div className={styles.itemQuantity}>
                            <label htmlFor="quantity3" className="sr-only">
                                Quantity:
                            </label>
                            <input
                                type="number"
                                id="quantity3"
                                className={styles.quantityInput}
                                value="3"
                                min="1"
                            />
                        </div>
                        <div className={styles.itemTotal}>$44.97</div>
                    </div>
                </div>
                <div className={styles.cartSummary}>
                    <div className={styles.totalPrice}>Total: $114.94</div>
                    <a href="/customer-order-form">
                        <button className={styles.checkoutBtn}>Proceed to Checkout</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Cart;
