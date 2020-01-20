import React from "react";
import Icons from '../../assets/icons/sprite.svg';//sprite.svg is a bundle of svg files we want that is downloaded from icomooon.io . we use instead of individual svgs because we don't want make 100 requests from server if we hae 100 svgs

const SvgIcon = ({iconId, additionalClassName}) => {
    return(
        <svg className={`icon ${additionalClassName}`}>
            <use xlinkHref={`${Icons}#${iconId}`}></use>  {/*ths is how we use svg bundle// behind # is the individual svg file id we want to display here*/}
        </svg>
    )
};

export default SvgIcon;