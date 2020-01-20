import React from "react";
import './header.styles.scss';
import Logo from '../../assets/img/logo.png'
import SearchBox from "../search-box/search-box.component";
import UserImg from '../../assets/img/user.jpg'
import SvgIcon from "../svg-icon/SvgIcon.component";

const Header = () => (
    <header className="header">
        <img src={Logo} alt="Trillo logo" className='logo'/>
        <SearchBox placeHolder='search hotels'/>

        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <SvgIcon iconId='icon-bookmark' additionalClassName={'user-nav__icon'}/>
                <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
                <SvgIcon iconId='icon-chat' additionalClassName={'user-nav__icon'}/>
                <span className="user-nav__notification">14</span>
            </div>
            <div className="user-nav__user">
                <img src={UserImg} alt="User" className="user-nav__user-photo"/>
                <span className="user-nav__user-name">
                    Thet
                </span>
            </div>
        </nav>
    </header>
);

export default Header;