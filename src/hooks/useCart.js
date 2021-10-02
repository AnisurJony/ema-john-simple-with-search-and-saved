import { useEffect } from "react";
import { useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = products => {
            console.log(products);
            const [cart, setCart] = useState([]);
            useEffect(() => {

                        if (products.length) {
                                    const savedCart = getStoredCart();
                                    const StoredCard = [];
                                    for (const key in savedCart) {
                                                const addedProduct = products.find(product => product.key === key);
                                                if (addedProduct) {
                                                            const quantity = savedCart[key];
                                                            addedProduct.quantity = quantity;
                                                            StoredCard.push(addedProduct);
                                                }
                                    }
                                    setCart(StoredCard);
                        }


            }, [products])

            return [cart, setCart];
}



export default useCart;