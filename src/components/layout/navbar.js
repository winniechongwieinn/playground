import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './scss/navbar.scss';

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(null);

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    },[scrollPosition]);

    const updateScroll = () => {
        setScrollPosition(window.scrollY);
    };

    const scrollHome = () => {
        scroll.scrollToTop();
    };

    return <div className="navbar">
        <div className={scrollPosition > 75 ? "navigation-container colour-change" : "navigation-container"}>
            <div className="logo" onClick={scrollHome}/>
            <div className="navigation desktop">
                <ul>
                    <li><Link to="about" spy={true} smooth={true}>About</Link></li>
                    <li><Link to="resume" spy={true} smooth={true}>Resume</Link></li>
                    <li><Link to="portfolio" spy={true} smooth={true}>Portfolio</Link></li>
                    <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                </ul>
            </div>
            <div className="navigation mobile">

            </div>
        </div>
    </div>
}

export default Navbar;
