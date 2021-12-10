import React from 'react';
import moment from 'moment';

import './scss/footer.scss';

const Navbar = () => {
    return <div className="footer">
        <div className="copyright">© {moment().year()} Winnie Chong. Website made from scratch with <a href="https://reactjs.org">ReactJS</a>.</div>
    </div>
}

export default Navbar;
