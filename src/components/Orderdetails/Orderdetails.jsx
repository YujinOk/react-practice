import React from "react";
import styles from "./Orderdetails.module.scss";
const Orderdetails = () => {
    return (
        <div>
            <div className={styles.Orderdetails}>
                <p>Items</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Total</p>
                <p>Actions</p>
            </div>
        </div>
    );
};

export default Orderdetails;
