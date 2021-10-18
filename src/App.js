import Cart from "./containers/Cart/Cart.jsx";
import styles from "./App.module.scss";
import storeItems from "./assets/storeItems";
import Orderdetails from "./components/Orderdetails";
import { useState } from "react";

function App() {
    const [getQty, setQty] = useState([0, 0, 0]);

    const increment = (targetQty) => {
        const newQty = getQty.map((item, index) => {
            if (targetQty === index) {
                console.log("hi");
                return (item += 1);
            } else {
                return item;
            }
        });

        setQty(newQty);
        // setQty([(getQty[0] += 1)], getQty[1], getQty[2]);
        // console.log(getQty[0]);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>

            <div className={styles.App}>
                {storeItems.map((item, index) => {
                    return (
                        <Cart
                            key={index}
                            indexno={index}
                            price={item.price}
                            name={item.name}
                            clickHandler={increment}
                            qty={getQty[index]}
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
