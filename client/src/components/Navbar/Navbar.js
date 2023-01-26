import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <>
        <h1>arsal</h1>
           <nav>
             <div className="container">
                <Link to="/"></Link>

                <Link to="/"></Link>

                <div>
                    <ul>
                        <li>
                            <Link to="/"></Link>
                            <button>Calori info</button>
                        </li>
                        <li>
                            <Link to="/create"></Link>
                            <button>Add food</button>
                        </li>
                        <li>
                            <Link to="/user"></Link>
                            <button>Add user</button>
                        </li>
                    </ul>
                </div>
             </div>
           </nav>
        </>
    )
}

export default Navbar;