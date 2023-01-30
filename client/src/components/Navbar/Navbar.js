import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar  ()  {

    return (
        <>
        
           <div className="navbar-container">
                <div className="navbar_logo_1">
                    <img src="https://user-images.githubusercontent.com/37651620/142762093-45207811-0c6e-4b62-9cb2-8d0009efb4ea.png" height={80} alt="logo"/>
                </div>
                <div className="navbar_logo_2">
                     <img src="https://user-images.githubusercontent.com/37651620/142764762-fef8f764-4cd5-44c6-8b9a-cffcfab2ccf8.png" height={120}/>
                </div>
                <div className="navbar_buttons">
                    <Link to="/">
                       <button className="btn">Calori info</button>
                    </Link>
                    <Link to="/create">
                       <button className="btn"> ➕Add food</button>
                    </Link>
                    <Link to="/user">
                       <button className="btn">➕ Add user</button>
                    </Link>
                </div>
           </div>

        </>
    )
}

export default Navbar;