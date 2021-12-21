import React, { createRef } from 'react';
import { Link } from 'react-scroll';

import { ReactComponent as Menu } from '../../../assets/menu.svg';

import './index.scss';

export const Navbar = ({ logo, items, style, float }) => {
    const styled = {
        barStyles: {
            background: 'black'
        },
        linkStyles: {
            color: 'white'
        },
        logoStyles: {
            fontSize: '20px',
            color: 'white'
        },
        sidebarStyles: {
            background: 'grey',
            buttonColor: 'white'
        },
        ...style
    }
    const cross = createRef();
    const onOpen = () => {
        cross.current.style.width = '100%'
    }
    const onClose = () => {
        cross.current.style.width = '0'
    }
    return (
        <div
            className="navbar_wrapper"
            style={{
                ...styled.barStyles,
                position: float ? 'fixed' : null
            }}>
            <div className="logo_wrapper">
                <a style={{ ...styled.logoStyles }} href={logo.link}>
                    {logo.img ? <img src={logo.img} alt='logo' /> : logo.text}
                </a>
            </div>
            <div className="nav_elements">
                {items.map(({ text, link }, index) => {
                    return (
                        <span key={index}>
                            <Link to={link} spy={true} smooth={true}>{text}</Link>
                        </span>
                    )
                })}
            </div>
            <div className="mob_nav">
                <Menu
                    style={{ fill: styled.sidebarStyles.buttonColor }}
                    onClick={onOpen}
                />
                <div
                    className="sidebar_wrapper"
                    ref={cross}
                    style={{ ...styled.sidebarStyles }} >
                    <button
                        onClick={onClose}
                        style={{ color: styled.sidebarStyles.buttonColor }}>
                        &#x2716;
                    </button>
                    {items.map(({ text, link }, index) => {
                        return (
                            <span key={index}>
                                <Link to={link} spy={true} smooth={true} onClick={onClose}>{text}</Link>
                        </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
