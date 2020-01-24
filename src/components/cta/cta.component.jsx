import React from 'react';
import './cta.styles.scss';
import ButtonPrimary from "../button-primary/button-primary.component";

const CTA = ({content}) => (
    <div className="cta">
        <h2 className="cta__book-now">
            {content}
        </h2>
        <ButtonPrimary visibleText="Book now" hoverText='Only 4 rooms left'/>
    </div>
);

export default CTA;