import React from 'react';
import { Navbar } from '../common/navbar';
import ScrollToTop from 'react-scroll-to-top';

import logo from '../../assets/logo-resize.png';

import './scss/navbar.scss';

const Navigation = () => {

    const props = {
        items: [
            {
                text: 'About',
                link: 'about'
            },
            {
                text: 'Resume',
                link: 'resume'
            },
            {
                text: 'Portfolio',
                link: 'portfolio'
            },
            {
                text: 'Contact',
                link: 'contact'
            }
        ],
        logo: {
            img: logo,
            link: '/'
        },
        style: {
            barStyles: {
                fontFamily: 'monospace',
                fontSize: 'calc(10px + 1vmin)',
                background: 'black',
                boxShadow: 'none'
            },
            sidebarStyles: {
                background: 'black',
                buttonColor: 'white',
                boxShadow: 'none'
            }
        }
    }
    return <div className="navbar">
        <ScrollToTop smooth />
        <Navbar {...props} />
    </div>
}

export default Navigation;
