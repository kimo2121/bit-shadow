import React, { useEffect, useState } from "react";
import "./styles.css";
import border_top from "../../assets/images/border-top.png";
import border_bottom from "../../assets/images/border-bottom.png";
import bk_v from "../../assets/images/bk-v.svg";
import gif from "../../assets/images/gif.gif";

const MintComponent = () => {
  const names = ["Jack Heurta", "Lisa", "", "Erick", ""];
  const [state, setstate] = useState(names[0]);
  useEffect(() => {
    //  setInterval(setstate,110)
  }, []);
  return (
    <div id="MINT" className="mint-component">
      <div>
        <img className="border-top" src={border_top} alt="" />
      </div>
      <h1>MINT</h1>
      <div>
        <img className="bk_v" src={bk_v} alt="" />
      </div>
      <div className="mint-component-contain">
        <div className="character-card-black">
          <img src={gif} alt="" />
          <br />
          <p>{state}</p>
        </div>
        <div className="random-card">
          <div className="random-card-inner">
            <div className="question">
              <span>?</span>
            </div>
            <div className="text">
              <br />
              <p>1x Random Turtle</p>
              <br />
              <p>
                (Once the transaction is confirmed, it appears immediately in
                your wallet.)
              </p>
            </div>
          </div>
          <div className="g-button disabled">
            <div className="g-button-inner">
              <div className="g-button-text">SOLD OUT</div>
            </div>
            <div className="g-button-bg-1">
              <div></div>
            </div>
            <div className="g-button-bg-2"></div>
          </div>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img className="border-bottom" src={border_bottom} alt="" />
      </div>
    </div>
  );
};

export default MintComponent;
