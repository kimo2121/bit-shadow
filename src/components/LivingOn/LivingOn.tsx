import React from "react";
import "./styles.css";
import skew_cards from "../../assets/images/skew-cards.png";
const LivingOn = () => {
  return (
    <div className="living-on">
      <div className="header-living">
        Shadows rising on <br />
        <span>Solana.</span>
      </div>
      <div className="pattern-1">
        <img src={skew_cards} alt="" />
      </div>
    </div>
  );
};

export default LivingOn;
