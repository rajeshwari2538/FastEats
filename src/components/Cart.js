import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="bg-black text-white m-4 p-2 rounded-lg">Clear Cart</button>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;