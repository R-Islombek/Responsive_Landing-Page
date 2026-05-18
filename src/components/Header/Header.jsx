import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import Rus from "./images/rus.png"
import Logo from "./images/logo.svg"
import "./Header.css";
const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__container'>
                    <a href="#"><img src={Logo} alt="Landing page Logo" /></a>
                    <ul className='header__list'>
                        <li><a className='header__link' href="#"><FaPhoneAlt className='phone' /> (800) 508-622 </a></li>
                        <li><a className='header__link' href="#"><FaSquareFacebook className='facebook' /></a></li>
                        <li><a className='header__link' href="#"><IoLogoInstagram className='instagram' /></a></li>
                        <li><a className='header__link' href="#">
                                <select className="header__select" defaultValue="Ru">
                                         <option value="Ru">🇷🇺 RU</option>
                                         <option value="Uz">🇺🇿 UZ</option>
                                </select>
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className='header__hr' />
                <nav className='navbar'>
                     <ul className='navbar__list'>
                         <li><a className='navbar__link' href="#"></a></li>
                     </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
