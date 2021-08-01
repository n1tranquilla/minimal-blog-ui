import React from 'react';
import NavSquare from '../NavSquare';

import './NavCorner.css'

const modes = [
    "primary", "quaternary", "tertiary", "quaternary",
    "tertiary", "secondary", "tertiary", "quaternary",
    "primary", "secondary", "tertiary", "secondary",
    "primary", "secondary", "primary", "quaternary",

]

const NavCorner = props => {


    return (
        <nav className="nav-corner">
            {props.links.map(({ link }, i) => {
                return (
                    <NavSquare to="to" mode={modes[i]}>{link}</NavSquare>
                )
            })}
        </nav>
    )
}

export default NavCorner;