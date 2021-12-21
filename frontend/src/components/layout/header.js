import React from 'react';
import Typewriter from 'typewriter-effect';

import './scss/header.scss';

const Header = () => {
    return <div className="header">
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('Hello, my name is Winnie.')
                    .pauseFor(2500)
                    .start();
            }}
            options={{ loop: true }}
        />
    </div>
}

export default Header;
