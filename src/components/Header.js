import {LOGO_URL} from "../utils/common"
import {Link} from "react-router-dom"
import { useContext } from "react"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header = () => {
    const {loggedInUser} = useContext(UserContext);
    //console.log(data);

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);

    return(
        <div className="header h-24 flex justify-between bg-yellow-100 shadow-lg">
            <div className="logo-container my-3">
                <img className="w-24 ml-10" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items flex">
                <ul className="flex items-center p-4">
                    <li className="px-4 mx-6"> 
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 mx-6">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4 mx-6">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 mx-6">
                        <Link to="/cart">Cart - [{cartItems.length}]</Link>
                    </li>
                    <li className="px-4 mx-6 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;