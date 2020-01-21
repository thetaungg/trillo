import React from 'react';
import './gallery.styles.scss';
import HotelImg1 from '../../assets/img/hotel-1.jpg';
import HotelImg2 from '../../assets/img/hotel-2.jpg';
import HotelImg3 from '../../assets/img/hotel-3.jpg';

const Gallery = () => (
    <div className="gallery">
        <figure className="gallery__item">
            <img src={HotelImg1} alt="Hotel pic 1" className="gallery__photo"/>
        </figure>
        <figure className="gallery__item">
            <img src={HotelImg2} alt="Hotel pic 2" className="gallery__photo"/>
        </figure>
        <figure className="gallery__item">
            <img src={HotelImg3} alt="Hotel pic 3" className="gallery__photo"/>
        </figure>
    </div>
);

export default Gallery;