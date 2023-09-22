import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <nav>
        <Link className='navber' to="/">Home</Link>
        <Link className='navber' to="/login">LogIn</Link>
        <Link className='navber' to="/register">Register</Link>
        <Link className='navber' to="/registr-rbs">Register RBS</Link>
        <Link className='navber' to="/registr-bs">Register BS</Link>
        </nav>
    );
};

export default Header;