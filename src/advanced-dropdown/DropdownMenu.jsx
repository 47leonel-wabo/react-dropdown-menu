import React, { useState } from "react";
import "./dropdown.styles.css";

// SVG icons
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as BackArrowIcon } from "./icons/back-arrow.svg";
import { ReactComponent as CaretRightIcon } from "./icons/caret-right.svg";
import { ReactComponent as CaretDownIcon } from "./icons/caret.svg";
import { ReactComponent as MessageIcon } from "./icons/comment-box.svg";
import { ReactComponent as CogIcon } from "./icons/gears.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as BoltIcon } from "./icons/spark.svg";

function AdvancedNavbar(props) {
    return (
        <CustomNavbar>
            <NavbarItem icon={<PlusIcon />} />
            <NavbarItem icon={<BellIcon />} />
            <NavbarItem icon={<MessageIcon />} />
            <NavbarItem icon={<CaretDownIcon />}>
                {/* Dropdown content */}
                <DropdownMenu />
            </NavbarItem>
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
    const [openDropdown, setOpenDropdown] = useState(false);
    return (
        <li className="drop-navbar-nav-item">
            <a
                href="#"
                className="drop-navbar-icon-btn"
                onClick={() => setOpenDropdown(!openDropdown)}
            >
                {props.icon}
            </a>
            {/* show svg icon */}
            {openDropdown && props.children}
        </li>
    );
}

function DropdownMenu(props) {
    function DropdownMenuItem(props) {
        return (
            <a href="#" className="drop-dropdown-menu-item">
                {/* here, for the left icon we use the same style as previously in order to get the same look */}
                <span className="drop-navbar-icon-btn">{props.leftIcon}</span>
                {props.children}
                <span className="drop-dropdown-menu-item-icon-right">
                    {props.rightIcon}
                </span>
            </a>
        );
    }

    return (
        <div className="drop-dropdown">
            <DropdownMenuItem>My Profile</DropdownMenuItem>
            <DropdownMenuItem
                leftIcon={<CogIcon />}
                rightIcon={<CaretRightIcon />}
            >
                My Profile
            </DropdownMenuItem>
        </div>
    );
}

export default AdvancedNavbar;
