import React from "react";
import Button from "../../components/Button/Button";
import styles from "./Cart.module.scss";

const Cart = ({ indexno, price, name, clickHandler, qty }) => {
    console.log(indexno);
    const handleClick = () => {
        clickHandler(indexno);
    };
    return (
        <div className={styles.Cart}>
            <img src="" alt="" />

            <p>{name}</p>
            <p>{price}</p>
            <input type="number" name="input" value={qty} />
            <Button clickHandler={handleClick} />
        </div>
    );
};

export default Cart;
