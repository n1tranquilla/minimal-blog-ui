import React from 'react';

import './NavSquare.css';

import classNames from 'classnames';

const NavSquare = props => {

    return (
        <div className={classNames("nav-square", `nav-square--${props.mode}`)} role="link">
            {props.children}
        </div>
    )
}

export default NavSquare