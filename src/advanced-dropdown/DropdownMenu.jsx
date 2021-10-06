import React, { useEffect, useRef, useState } from "react";
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
import { ReactComponent as LionIcon } from "./icons/lion.svg";
import { ReactComponent as SpiderIcon } from "./icons/spider.svg";
import { ReactComponent as CatIcon } from "./icons/cat.svg";
import { ReactComponent as EagleIcon } from "./icons/eagle.svg";

// CSS Transition
import { CSSTransition } from "react-transition-group";

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
    const [activeMenu, setActiveMenu] = useState("main"); // settings, animals
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    // function to calculate the height
    function calculateHeight(elt) {
        const height = elt.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownMenuItem(props) {
        return (
            <a
                href="#"
                className="drop-dropdown-menu-item"
                onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
            >
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
        <div
            className="drop-dropdown"
            style={{ height: menuHeight }}
            ref={dropdownRef}
        >
            {/* FIRST PAGE DROPDOWN MENU */}
            <CSSTransition
                classNames="menu-primary"
                in={activeMenu === "main"}
                unmountOnExit
                timeout={500}
                onEnter={calculateHeight}
            >
                <div className="menu">
                    <DropdownMenuItem>My Profile</DropdownMenuItem>
                    <DropdownMenuItem
                        goToMenu="settings"
                        leftIcon={<CogIcon />}
                        rightIcon={<CaretRightIcon />}
                    >
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        goToMenu="animals"
                        leftIcon={<LionIcon />}
                        rightIcon={<CaretRightIcon />}
                    >
                        Animals
                    </DropdownMenuItem>
                    <DropdownMenuItem leftIcon={<BoltIcon />}>
                        Logout
                    </DropdownMenuItem>
                    {/* <DropdownMenu leftIcon={<BoltIcon />}>Logout</DropdownMenu> */}
                </div>
            </CSSTransition>

            {/* SECOND PAGE DROPDOWN MENU */}
            <CSSTransition
                classNames="menu-secondary"
                in={activeMenu === "settings"}
                unmountOnExit
                timeout={500}
                onEnter={calculateHeight}
            >
                <div className="menu">
                    <DropdownMenuItem
                        leftIcon={<BackArrowIcon />}
                        goToMenu="main"
                    >
                        SETTINGS
                    </DropdownMenuItem>
                    {/* settings options */}
                    <DropdownMenuItem>Settings One</DropdownMenuItem>
                    <DropdownMenuItem>Settings Two</DropdownMenuItem>
                    <DropdownMenuItem>Settings Three</DropdownMenuItem>
                    <DropdownMenuItem>Settings Four</DropdownMenuItem>
                </div>
            </CSSTransition>

            <CSSTransition
                classNames="menu-secondary"
                in={activeMenu === "animals"}
                unmountOnExit
                timeout={500}
                onEnter={calculateHeight}
            >
                <div className="menu">
                    <DropdownMenuItem
                        leftIcon={<BackArrowIcon />}
                        goToMenu="main"
                    >
                        ANIMALS
                    </DropdownMenuItem>
                    {/* settings options */}
                    <DropdownMenuItem leftIcon={<CatIcon />}>
                        Cat
                    </DropdownMenuItem>
                    <DropdownMenuItem leftIcon={<EagleIcon />}>
                        Eagle
                    </DropdownMenuItem>
                    <DropdownMenuItem leftIcon={<SpiderIcon />}>
                        Spider
                    </DropdownMenuItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default AdvancedNavbar;
