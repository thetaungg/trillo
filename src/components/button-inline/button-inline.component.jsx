import React from "react";
import './button-inline.styles.scss';

const ButtonInline = ({content}) => (
    <button className="btn-inline">
        {content}
    </button>
);

export default ButtonInline;