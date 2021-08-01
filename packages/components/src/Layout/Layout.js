import React from 'react';
import NavCorner from '../NavCorner';

import './Layout.css';

const Layout = props => {

    return (
        <div className="layout-container">
            <div className="layout">
                <NavCorner links={props.links} />
                <div className="ribbons-container ribbons-container--horizontal">
                    <div /><div /><div /><div />
                </div>
            </div>
            <div className="content-container">
                <div className="ribbons-container ribbons-container--vertical">
                    <div /><div /><div /><div />
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout