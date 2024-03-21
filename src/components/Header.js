import React, { useState } from 'react';
import Logo2020white2 from '../img/Logo2020white2.png';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className="header">
            <div className="logo">
                <img src={Logo2020white2} alt="Logo" />
                <span className="logo-name">Cognoblaze</span>
            </div>
            <nav className="header-nav">
                <ul className={menuActive ? "header-menu active" : "header-menu"}>
                    <li><a href="#">home</a></li>
                    <li><a href="#">event</a></li>
                    <li><a href="#">Registration</a></li>
                    <li><a href="#">Winners</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </nav>
        </div>
    );
};

export default Header;

