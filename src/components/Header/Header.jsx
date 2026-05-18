import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import { FaSquareFacebook, FaBars } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import Logo from "./images/logo.svg";
import "./Header.css";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
            if (window.innerWidth > 992) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    const navLinks = [
        { id: 1, text: t("header.link1"), href: "#" },
        { id: 2, text: t("header.link2"), href: "#" },
        { id: 3, text: t("header.link3"), href: "#" },
        { id: 4, text: t("header.link4"), href: "#" },
        { id: 5, text: t("header.link5"), href: "#" },
        { id: 6, text: t("header.link6"), href: "#" },
        { id: 7, text: t("header.link7"), href: "#" },
        { id: 8, text: t("header.link8"), href: "#" },
        { id: 9, text: t("header.link9"), href: "#" },
    ];

    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='header__container'>
                        <a href="/" className='header__logo'>
                            <img src={Logo} alt="Landing page Logo" />
                        </a>
                        
                        <div className='header__actions'>
                            <div className='header__contacts'>
                                <a className='header__link' href="tel:0800508622">
                                    <FaPhoneAlt className='phone' /> 
                                    <span>(800) 508-622</span>
                                </a>
                                <a className='header__link' href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <FaSquareFacebook className='facebook' />
                                </a>
                                <a className='header__link' href="https://instagram.com" target="_blank" rel="noreferrer">
                                    <IoLogoInstagram className='instagram' />
                                </a>
                                <select 
                                    onChange={handleChangeLanguage} 
                                    className="header__select" 
                                    defaultValue={i18n.language || "ru"}
                                >
                                    <option value="ru">🇷🇺 RU</option>
                                    <option value="uz">🇺🇿 UZ</option>
                                    <option value="en">🇬🇧 EN</option>
                                </select>
                            </div>
                            
                            <button className='burger-menu' onClick={toggleMenu}>
                                {isMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                    
                    <hr className='header__hr' />
                    
                    {!isMobile && (
                        <nav className='navbar'>
                            <ul className='navbar__list'>
                                {navLinks.map(link => (
                                    <li key={link.id}>
                                        <a className='navbar__link' href={link.href}>
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </header>

            <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
                <div className='mobile-menu__header'>
                    <a href="/" onClick={closeMenu}>
                        <img src={Logo} alt="Logo" />
                    </a>
                    <button className='mobile-menu__close' onClick={closeMenu}>
                        <FaTimes />
                    </button>
                </div>
                
                <nav className='mobile-menu__nav'>
                    <ul className='mobile-menu__list'>
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <a 
                                    className='mobile-menu__link' 
                                    href={link.href}
                                    onClick={closeMenu}
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                <div className='mobile-menu__footer'>
                    <div className='mobile-menu__contacts'>
                        <a className='mobile-menu__contact-link' href="tel:0800508622">
                            <FaPhoneAlt /> (800) 508-622
                        </a>
                        <div className='mobile-menu__social'>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <FaSquareFacebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <IoLogoInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div 
                className={`mobile-overlay ${isMenuOpen ? 'mobile-overlay--open' : ''}`} 
                onClick={closeMenu}
            ></div>
        </>
    );
};

export default Header;