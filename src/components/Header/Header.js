import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <h1 >SA <span className=" fs-3">Tourism Planner Ltd</span></h1>
            <nav>
                <div>
                <NavLink to="/Home">Home</NavLink>
                <NavLink to="/review">Packages</NavLink>
                <NavLink to="/about">About</NavLink>
                {user.email && <NavLink to="/orders">My Orders</NavLink>}
                {user.email && <NavLink to="/allorders">All Orders</NavLink>}
                {user.email && <NavLink to="/addService">Add Service</NavLink>}
                <NavLink to="/contact">Contact us</NavLink>
                </div>
                <div>
                {user.email && <span style={{ color: 'white' }}>Hi {user.displayName} </span>}
                {
                    user.email ?
                        <button onClick={logOut}>log out</button>
                        :
                        <NavLink to="/login">Login</NavLink>}
                </div>
            </nav>
        </div>
    );
};

export default Header;