import Cart from "./components/Cart/Cart.jsx";
import styles from "./App.module.scss";
import storeItems from "./assets/storeItems";
import Orderdetails from "./components/Orderdetails";
import { useState } from "react";

function App() {
    const [getQty, setQty] = useState(0);

    const increment = () => {
        setQty(getQty + 1);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>

            <div className={styles.App}>
                {storeItems.map((item, index) => {
                    return (
                        <Cart
                            key={index}
                            price={item.price}
                            name={item.name}
                            clickHandler={increment}
                            qty={getQty}
                        />
                    );
                })}
            </div>
            <h2>Order Details</h2>
            <Orderdetails />
        </div>
    );
}

export default App;
