import React from "react";
import './navigation.styles.scss';
import SvgIcon from "../svg-icon/SvgIcon.component";

const Navigation = () => (
    <nav className="sidebar">
        <ul className="side-nav">
            <li className="side-nav__item side-nav__item--active">
                <a href="/#" className="side-nav__link">
                    <SvgIcon iconId='icon-home' additionalClassName='side-nav__icon'/>
                    <span>Hotel</span>
                </a>
            </li>

            <li className="side-nav__item">
                <a href="/#" className="side-nav__link">
                    <SvgIcon iconId='icon-aircraft-take-off' additionalClassName='side-nav__icon'/>
                    <span>Flight</span>
                </a>
            </li>

            <li className="side-nav__item">
                <a href="/#" className="side-nav__link">
                    <SvgIcon iconId='icon-key' additionalClassName='side-nav__icon'/>
                    <span>Car rental</span>
                </a>
            </li>

            <li className="side-nav__item">
                <a href="/#" className="side-nav__link">
                    <SvgIcon iconId='icon-map' additionalClassName='side-nav__icon'/>
                    <span>Tours</span>
                </a>
            </li>
        </ul>

        <div className="legal">
            &copy; 2017 by trillo. All right reserved.
        </div>
    </nav>
);

export default Navigation;