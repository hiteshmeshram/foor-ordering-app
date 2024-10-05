import { useState } from "react";
import {Link} from "react-router-dom"
import useIsOnline from "../utils/useIsOnline"
import { useSelector } from "react-redux";

const Header=()=>{
const [isLoggedIn,setIsLoggedIn]=useState(true);
const isOnline=useIsOnline();
const items=useSelector((store)=>store.cart.items)

    return (
        <div className="flex  justify-between w-58  border-b shadow-md" >
            <div onClick={()=>{
                window.location.href = '/'
            }} className="m-2 mx-24">
                <img  className="w-16" src="data:image/jpeg;base64,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" alt="food-logo"></img>
            </div>
            <div className="flex mr-24 ">
                <ul className="flex items-center font-semibold">
                    <li>{isOnline?"✅":"🔴"}</li>
                        <Link to="/">  <li className="px-4 py-2 hover:border hover:rounded-md hover:bg-gray-100 ">Home</li></Link>
                        <Link to="/about"><li className="px-4 py-2 hover:border hover:rounded-md hover:bg-gray-100">About us</li></Link>
                        <Link to="/contact"><li className="px-4 py-2 hover:border hover:rounded-md hover:bg-gray-100">Contact</li></Link>
                        <Link to="/cart"><li className="px-4 py-2 hover:border hover:rounded-md hover:bg-gray-100">Cart({items.length})</li></Link>
                    <li>{isLoggedIn?<button className=" px-4 py-2 hover:border hover:rounded-md hover:bg-gray-100" onClick={()=>{setIsLoggedIn(false)}}>Login</button>:<button className=" py-1 px-2 rounded-lg hover:bg-gray-400" onClick={()=>{setIsLoggedIn(true)}}>Logout</button>}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;