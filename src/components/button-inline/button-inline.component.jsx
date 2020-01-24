import React from "react";
import './button-inline.styles.scss';

const ButtonInline = ({children}) => (
    <button className="btn-inline">
        {children}
    </button>
);

export default ButtonInline;