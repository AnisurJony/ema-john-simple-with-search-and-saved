import { useEffect } from "react";
import { useState } from "react"
import useCart from "./useCart";

const useProducts = () => {

            const [products, setProducts] = useState([]);
            const [displayProducts, setDisplayProducts] = useState([]);

            useEffect(() => {
                        fetch('./products.json')
                                    .then(res => res.json())
                                    .then(data => {
                                                setProducts(data)
                                                setDisplayProducts(data);

                                    });


            }, []);



            return [products, setProducts, displayProducts, setDisplayProducts];

}
export default useProducts;