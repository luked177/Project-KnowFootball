import * as React from "react";
import { stack as Menu } from 'react-burger-menu'
import './SideNav.css'
  
  
export default function SideNav() {
    return (
    <div className="sideNav">
        <Menu noOverlay>
            <a id="Home" className="menu-item" href="/">Home</a>
            <a id="Predictions" className="menu-item" href="/prediction">Prediction</a>
            <a id="Grounds" className="menu-item" href="/grounds">Grounds</a>
        </Menu>
    </div>
  );
}