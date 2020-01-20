import React from "react";
import './search-box.styles.scss';
import SvgIcon from "../svg-icon/SvgIcon.component";

const SearchBox = ({placeHolder}) => (
    <form action='#' className="search">
        <input type="text" className='search__input' placeholder={placeHolder} />
        <button className="search__button">
            <SvgIcon iconId='icon-magnifying-glass' additionalClassName={'search__icon'}/>
        </button>
    </form>
);

export default SearchBox;