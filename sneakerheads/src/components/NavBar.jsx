import React from "react";
import { NavLink } from "react-router-dom";
import { useContext, useState } from 'react';
import { shoppingCartContext } from "../context";

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const context = useContext(shoppingCartContext)

    return (
        <div>
            <nav className="navbar navbar-expand-lg mynav" id="mynavbar">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><img src="/icon5.svg" alt="Logo" /></NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink className="nav-link" to="/ManSneakers"><button className="navbutton">Man</button></NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/WomanSneakers"><button className="navbutton">Woman</button></NavLink></li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <div className="navlink-dropdown" onClick={toggleDropdown}>
                                        <button className="navbutton brand">Brands</button>
                                    </div>
                                    {dropdownOpen && (
                                        <div className="dropdown-container">
                                            <NavLink to="/AdidasSneakers" activeClassName="active" id="item1">
                                                <img src="src/assets/adidas.png" id="logo" alt="" />
                                            </NavLink>
                                            <NavLink to="/NikeSneakers" activeClassName="active" id="item2">
                                                <img src="src/assets/Nike.png" id="logo" alt="" />
                                            </NavLink>
                                            <NavLink to="/JordanSneakers" activeClassName="active" id="item3">
                                                <img src="src/assets/Jordan.png" id="logo" alt="" />
                                            </NavLink>
                                        </div>
                                    )}
                                </div>
                            </li>
                            <li className="nav-item"><NavLink className="nav-link" to="/AboutUs"><button className="navbutton">About Us</button></NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/MyAccount" id="login"><img src="/user.svg" id="user" alt="" /></NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/Cart"><img src="/bag-fill.svg" id="cart" alt="" /></NavLink></li>
                            <h4 className="count">{context.count}</h4>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
