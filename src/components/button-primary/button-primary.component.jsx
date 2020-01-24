import React from "react";
import './button-primary.styles.scss';

const ButtonPrimary = ({visibleText, hoverText}) => (
    <button className="btn-primary">
        <span className="btn-primary__visible">
            {visibleText}
        </span>
        <span className="btn-primary__invisible">
            {hoverText}
        </span>
    </button>
);

export default ButtonPrimary;