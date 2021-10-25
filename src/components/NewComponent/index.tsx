import React from "react";

import { CharacterCard } from "./CharacterCard";

import "./styles.scss";

import Turtle1 from "../../assets/wheel/omer.png";
import Turtle2 from "../../assets/wheel/gustavo.png";
import Turtle3 from "../../assets/wheel/rueben.png";
import Turtle4 from "../../assets/wheel/brenton.png";
import Turtle5 from "../../assets/wheel/willie.png";
import Turtle6 from "../../assets/wheel/maxwel.png";
import Turtle7 from "../../assets/wheel/howard.png";
import Turtle8 from "../../assets/wheel/benito.png";
import Turtle9 from "../../assets/wheel/lucius.png";

import Turtle10 from "../../assets/wheel/jhonathan.png";
import Turtle11 from "../../assets/wheel/alien.png";
import Turtle12 from "../../assets/wheel/miguel.png";
import Turtle13 from "../../assets/wheel/dean.png";

import Turtle14 from "../../assets/wheel/leo.png";
import Turtle15 from "../../assets/wheel/eugene.png";
import Turtle16 from "../../assets/wheel/clay.png";
import Turtle17 from "../../assets/wheel/victor.png";

import Turtle18 from "../../assets/wheel/roland.png";
import Turtle19 from "../../assets/wheel/lino.png";
import Turtle20 from "../../assets/wheel/zane.png";
import Pattern from "../../assets/images/pattern-3.c54e5ade.png";

const Box3 = () => {
  return (
    <div id="box-3">
      <div className="circle-box">
        <div className="circle-text">
          MEET SOME <span>TURTLES</span>
        </div>
        <img src={Pattern} className="pattern" />
        <div className="circle">
          <div className="group">
            <div className="item">
              <CharacterCard
                image={Turtle1}
                text={"Omer Mcpherson"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle2}
                text={"Gustavo Mcnally"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle3}
                text={"Rueben Valles"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle4}
                text={"Brenton Quinlan"}
                black={true}
              />
            </div>
          </div>
          <div className="group">
            <div className="item">
              <CharacterCard
                image={Turtle5}
                text={"Willie Neely"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle6}
                text={"Maxwell Foy"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard image={Turtle7} text={"Howard Law"} black={true} />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle8}
                text={"Benito Marlow"}
                black={true}
              />
            </div>
          </div>
          <div className="group">
            <div className="item">
              <CharacterCard
                image={Turtle9}
                text={"Lucius Browne"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle10}
                text={"Johnathon Kelso"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle11}
                text={"X \u00c6 A-2"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle12}
                text={"Miguel Perea"}
                black={true}
              />
            </div>
          </div>
          <div className="group">
            <div className="item">
              <CharacterCard
                image={Turtle13}
                text={"Dean Mcgowan"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle14}
                text={"Leo Herzog"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle15}
                text={"Eugene Witherspoon"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle16}
                text={"Clay Cuevas"}
                black={true}
              />
            </div>
          </div>
          <div className="group">
            <div className="item">
              <CharacterCard
                image={Turtle17}
                text={"Victor Messina"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle18}
                text={"Roland Aponte"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle19}
                text={"Lino Carnes"}
                black={true}
              />
            </div>
            <div className="item">
              <CharacterCard
                image={Turtle20}
                text={"Zane Stack"}
                black={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Box3;
