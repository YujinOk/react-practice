import React from "react";
import styles from "./Button.module.scss";

const Button = ({ clickHandler }) => {
    return (
        <>
            <button onClick={clickHandler} className={styles.green}>
                Add to cart
            </button>
        </>
    );
};

export default Button;
