import React from "react";
import "./slider.css";
import Slider from "react-slick";
import { fail } from "assert";

const Sldier = ({ data }: any) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-component">
      <Slider {...settings}>
        {data?.map((item: any, index: any) => (
          <div className="each-piece-of-data">
            <img src={item.img} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sldier;
