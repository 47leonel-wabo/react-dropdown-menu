import React from "react";
import "./dropdown.styles.css";

function AdvancedNavbar(props) {
    return (
        <CustomNavbar>
            <NavbarItem icon="🤑" />
            <NavbarItem icon="🤑" />
            <NavbarItem icon="🤑" />
        </CustomNavbar>
    );
}

function CustomNavbar(props) {
    return (
        <div className="drop-navbar">
            <ul className="drop-navbar-nav">{props.children}</ul>
        </div>
    );
}

function NavbarItem(props) {
    return (
        <li className="drop-navbar-nav-item">
            <a href="#" className="drop-navbar-icon-btn">
                {props.icon}
            </a>
        </li>
    );
}

export default AdvancedNavbar;
