import React, { useState } from "react";
import Sldier from "../Slider/Sldier";
import "./rarity.css";
import {
  neckData,
  backgroundData,
  wingData,
  skinData,
  clothesData,
  smokeData,
  eyesData,
  glassesData,
  hairData,
  headData,
} from "./data";
const Rarity = () => {
  const [state, setstate] = useState(backgroundData);
  return (
    <div id="RARITY" className="rarity">
      <h1>RARITY</h1>
      <div className="rarity-content">
        <div className="left-content">
          <div
            onClick={() => setstate(backgroundData)}
            className={
              state === backgroundData ? "left-item active" : "left-item"
            }
          >
            <span>Background</span>
          </div>
          <div
            onClick={() => setstate(wingData)}
            className={state === wingData ? "left-item active" : "left-item"}
          >
            <span>Wing</span>
          </div>
          <div
            onClick={() => setstate(skinData)}
            className={state === skinData ? "left-item active" : "left-item"}
          >
            <span>Skin</span>
          </div>
          <div
            onClick={() => setstate(clothesData)}
            className={state === clothesData ? "left-item active" : "left-item"}
          >
            <span>Clothes</span>
          </div>
          <div
            onClick={() => setstate(eyesData)}
            className={state === eyesData ? "left-item active" : "left-item"}
          >
            <span>Eyes</span>
          </div>
          <div
            onClick={() => setstate(neckData)}
            className={state === neckData ? "left-item active" : "left-item"}
          >
            <span>Neck</span>
          </div>
          <div
            onClick={() => setstate(glassesData)}
            className={state === glassesData ? "left-item active" : "left-item"}
          >
            <span>Glasses</span>
          </div>
          <div
            onClick={() => setstate(hairData)}
            className={state === hairData ? "left-item active" : "left-item"}
          >
            <span>hair</span>
          </div>
          <div
            onClick={() => setstate(headData)}
            className={state === headData ? "left-item active" : "left-item"}
          >
            <span>Head</span>
          </div>
          <div
            onClick={() => setstate(smokeData)}
            className={state === smokeData ? "left-item active" : "left-item"}
          >
            <span>Smoke</span>
          </div>
        </div>
        <div className="right-content">
          <Sldier data={state} />
        </div>
      </div>
    </div>
  );
};

export default Rarity;
