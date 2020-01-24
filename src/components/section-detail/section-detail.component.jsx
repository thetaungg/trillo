import React from "react";
import './section-detail.styles.scss';
import Img1 from '../../assets/img/user-3.jpg';
import Img2 from '../../assets/img/user-4.jpg';
import Img3 from '../../assets/img/user-5.jpg';
import Img4 from '../../assets/img/user-6.jpg';
import ReviewUserImg1 from '../../assets/img/user-1.jpg'
import ReviewUserImg2 from '../../assets/img/user-2.jpg'

import ReviewCard from "../review-card/review-card.component";
import ButtonInline from "../button-inline/button-inline.component";

const DetailSection = () => (
    <div className="detail">
        <div className="description">
            <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
            </p>
            <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
            </p>
            <ul className="list">
                <li className="list__item">Close to the beach</li>
                <li className="list__item">Breakfast included</li>
                <li className="list__item">Free airport shuttle</li>
                <li className="list__item">Free wifi in all room</li>
                <li className="list__item">Air conditioning and heating</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">We speak all languages</li>
                <li className="list__item">Perfect for families</li>
            </ul>
            <div className="recommend">
                <p className="recommend__count">
                    Lucy and 3 other friends recommend this hotel.
                </p>
                <div className="recommend__friends">
                    <img src={Img1} alt="Friend 1" className="recommend__photo"/>
                    <img src={Img2} alt="Friend 2" className="recommend__photo"/>
                    <img src={Img3} alt="Friend 3" className="recommend__photo"/>
                    <img src={Img4} alt="Friend 4" className="recommend__photo"/>
                </div>
            </div>
        </div>
        <div className="user-review">
            <ReviewCard reviewText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex."
                        username='Nick Smith' reviewedDate="Feb 23r, 2017" rating='7.8' imgUrl={ReviewUserImg1}/>

            <ReviewCard reviewText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi."
                        username="Mary Thomas" reviewedDate="Sept 13th, 2017" rating="9.3" imgUrl={ReviewUserImg2}/>

            <ButtonInline>Show all <span>&rarr;</span></ButtonInline>
        </div>
    </div>
);

export default DetailSection;