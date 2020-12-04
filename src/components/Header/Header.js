import React from 'react';

import Logo from './Logo';
import Menu from './Menu';
import NavLink from './NavLink';

function Header() {
    return( 
        <div>
            <Logo />
            <Menu>
                <NavLink to="/" link="Link 1" />
                <NavLink to="/" link="Link 2" />
                <NavLink to="/" link="Link 3" />
            </Menu>
        </div>
    )
} 

export default Header;