import React from "react";
import './review-card.styles.scss';

const ReviewCard = ({reviewText, username, reviewedDate, rating, imgUrl}) => (
    <figure className="review">
        <blockquote className="review__text">
            {reviewText}
        </blockquote>
        <figcaption className="review__user">
            <img src={imgUrl} alt="User" className="review__photo"/>
            <div className="review__user-box">
                <p className="review__user-name">{username}</p>
                <p className="review__user-date">{reviewedDate}</p>
            </div>
            <div className="review__rating">{rating}</div>
        </figcaption>
    </figure>
);

export default ReviewCard;