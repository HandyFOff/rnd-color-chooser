import React from 'react';
import Slider from 'react-slick';

/*

    npm imports:
    1. npm i react-slick
    2. npm i slick-carousel --save

    Put in your MAIN.js file:
    
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

*/

export default function Slick() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <div className='slider'>
          <h2> Single Item</h2>
          <Slider {...settings}>
                {/* { enter your items } */}
          </Slider>
        </div>
      );
}