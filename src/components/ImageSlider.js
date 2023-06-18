import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slider.module.css"
import React from 'react'
// import SlideImage from "./SlideImage";
import img1 from './Slideimage/photo1.jpg';
import img2 from './Slideimage/photo2.jpg';
import img3 from './Slideimage/photo3.jpg';
import classes from '../css/Slider.module.css';



const SlideImage=[
    {
                id:1,
                src:img1,
                alt:"image 1"
            },
            {
                id:2,
                src:img2,
                alt:"image 2"
            },
            {
                id:3,
                src:img3,
                alt:"image 3"
            }
]


const ImageSlider = () => {
 
  const settings = {
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 2000,

  };
  return (
    
      < >
          <div className="tag">
              
          </div>
          <div className="imgslider">
              <Slider {...settings}>
                  {SlideImage.map((item) => (
                      <div key={item.id}  className={classes.slideBox}>
                          <img src={item.src} alt={item.alt} className={classes.slideImg}/>
                      </div>
                  ))}
              </Slider>
          </div>
      </>
  )
}
export default ImageSlider;