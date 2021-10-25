import React from "react";
import "./welcome.css";
import welcome from "../../assets/images/welcome.png";
import flower from "../../assets/images/flower.jpg";
import logo23 from "../../assets/images/logo23.svg";
import digitaleyes from "../../assets/images/digitaleyes.svg";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="left-wel">
        <p>
          Collection of <span>3,333</span> Turtles that are each one-of-a-kind,
          <br /> algorithmically generated, strong, and collectible.
        </p>
        <div>
          <br />
          <p>LIVE on</p>
          <br />
          <div className="live-content">
            <img src={flower} alt="" />
            <img src={digitaleyes} alt="" />
            <img src={logo23} alt="" />
          </div>
        </div>
      </div>
      <img className="right-wel" src={welcome} alt="" />
    </div>
  );
};

export default Welcome;
