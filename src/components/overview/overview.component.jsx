import React from "react";
import './overview.styles.scss';
import SvgIcon from "../svg-icon/SvgIcon.component";
import ButtonInline from "../button-inline/button-inline.component";

const Overview = () => (
    <div className="overview">
        <h1 className="overview__heading">
            Hotel Los Palmas
        </h1>
        <div className="overview__stars">
            <SvgIcon iconId='icon-star' additionalClassName='overview__icon-star'/>
            <SvgIcon iconId='icon-star' additionalClassName='overview__icon-star'/>
            <SvgIcon iconId='icon-star' additionalClassName='overview__icon-star'/>
            <SvgIcon iconId='icon-star' additionalClassName='overview__icon-star'/>
            <SvgIcon iconId='icon-star' additionalClassName='overview__icon-star'/>
        </div>
        <div className="overview__location">
            <SvgIcon iconId='icon-location-pin' additionalClassName='overview__icon-location'/>
            <ButtonInline content='Albufeira, Portugal'/>
        </div>
        <div className="overview__rating">
            <div className="overview__rating-average">8.6</div>
            <div className="overview__rating-count">429 votes</div>
        </div>
    </div>
);

export default Overview;