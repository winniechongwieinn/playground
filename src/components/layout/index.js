import React from 'react';

import Navbar from './navbar';
import Header from './header';
import Content from './content';
import Footer from './footer';

import './scss/index.scss';

const Layout = () => {
    return <div className="layout">
        <Navbar />
        <Header />
        <Content />
        <Footer />
    </div>
}

export default Layout;
