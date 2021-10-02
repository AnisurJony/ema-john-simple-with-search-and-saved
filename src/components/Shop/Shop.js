
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/UseProduct';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart([]);
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useProducts();



    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="btn-regular"> Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;