import React from 'react';

import './navbar.css'
import DrawerToggleButton from '../sideDrawer/drawerToggleButton.jsx';

const navbar = props =>(
    <header className='navbar_'>
        <nav className='nav_'>
            <div className='btn_nav'>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
)

export default navbar;