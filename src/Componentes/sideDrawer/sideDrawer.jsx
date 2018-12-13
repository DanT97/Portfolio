import React from 'react'

import './sideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses='side-drawer open';
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href='/about'>About</a></li>
                <li><a href='/#for company'>for company</a></li>
                <li><a href='/#about'>about</a></li>
                <li><a href='/#instagram'>where to buy</a></li>
            </ul>
        </nav>);
};

export default sideDrawer;