import React from "react";
// import Button from "../Button/Button";
import styles from "./Cart.module.scss";

const Cart = ({ price, name, clickHandler, qty }) => {
    return (
        <div className={styles.Cart}>
            <img src="" alt="" />

            <p>{name}</p>
            <p>{price}</p>
            <input type="number" name="input" placeholder={qty} />
            <button onClick={clickHandler} className={styles.green}>
                Add to cart
            </button>
        </div>
    );
};

export default Cart;
