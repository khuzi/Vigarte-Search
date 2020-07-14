import React from 'react'

import searchImg from '../../assets/Icons/iconSearch_1.png';
import toggleImg from '../../assets/Icons/iconSidebar.png';

const Navbar = () => {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link" href="/">Add a Property</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">ClientLogin</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><img src={searchImg} alt=""/></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"><img src={toggleImg} alt=""/></a>
            </li>
        </ul>
    );
};

export default Navbar;
