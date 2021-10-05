import React from "react";
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
            <NavbarItem icon={<CaretDownIcon />} />
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
                {/* show svg icon */}
                {props.icon}
            </a>
        </li>
    );
}

export default AdvancedNavbar;
