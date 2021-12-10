import React from 'react';

import About from '../sections/about';
import Resume from '../sections/resume';
import Portfolio from '../sections/portfolio';
import Contact from '../sections/contact';

import './scss/content.scss';

const Content = () => {
    return <div className="content">
        <About />
        <Resume />
        <Portfolio />
        <Contact />
    </div>
}

export default Content;
