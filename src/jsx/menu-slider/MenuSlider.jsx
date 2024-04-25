import React, { useState } from "react";
import "./menu-slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cake from "../../assets/images/image1.avif";
import img1 from "../../assets/images/image2.avif";
import img2 from "../../assets/images/image3.avif";
import img3 from "../../assets/images/image4.avif";
import img4 from "../../assets/images/image5.avif";
import img5 from "../../assets/images/image6.avif";

const MenuSlider = () => {
  const menuslides = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="menu-slider-bg">
        <div className="carousel-container">
          <Slider {...menuslides}>
            <div>
              <MenuImages
                image={cake}
                title="Chocolate Cake"
                details="DESSERT"
              />
            </div>
            <div>
              <MenuImages image={img1} title="Easy Recipe" details="Recipe" />
            </div>
            <div>
              <MenuImages image={img2} title="Easy Recipe" details="Recipe" />
            </div>

            <div>
              <MenuImages image={img3} title="Easy Recipe" details="Recipe" />
            </div>
            <div>
              <MenuImages image={img4} title="Easy Recipe" details="Recipe" />
            </div>
            <div>
              <MenuImages image={img5} title="Easy Recipe" details="Recipe" />
            </div>

            <div>
              <MenuImages image={cake} title="Easy Recipe" details="Recipe" />
            </div>
            <div>
              <MenuImages image={img1} title="Easy Recipe" details="Recipe" />
            </div>
            <div>
              <MenuImages image={img2} title="Easy Recipe" details="Recipe" />
            </div>

            <div>
              <MenuImages image={img3} title="Easy Recipe" details="Recipe" />
            </div>
            <div>
              <MenuImages image={img4} title="Easy Recipe" details="Recipe" />
            </div>
            <div>
              <MenuImages image={img5} title="Easy Recipe" details="Recipe" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
export default MenuSlider;

const MenuImages = (props) => {
  return (
    <>
      <div className="content">
        <div className="content-overlay"></div>
        <div className="menu-image-box">
          <img className="menu-image" src={props.image} alt="menu image" />
        </div>
        <div className="content-details fadeIn-bottom">
          <h6 className="content-title">{props.title}</h6>
          <p className="content-text">{props.details}</p>
        </div>
      </div>
    </>
  );
};

