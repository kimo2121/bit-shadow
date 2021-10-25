import React from "react";
import "./roadmap.css";

const Roadmap = () => {
  return (
    <div id="ROADMAP" className="roadmap web">
      <h1>ROADMAP</h1>
      <div className="road-list">
        <div className="roads-pile mob"></div>
        <div className="left-container">
          <div className="road">
            <div className="pile-connector"></div>
            <div className="road-road">
              <span className="road-num">02</span>
              <span className="road-name">Listing</span>
              <p className="road-subhead">Secondary Markets</p>
              <p className="road-content">
                There will be two market places available: DigitalEyes and Magic
                Eden. Other marketplaces are not certain yet.
              </p>
            </div>
          </div>
          <div className="road">
            <div className="pile-connector"></div>
            <div className="road-road">
              <span className="road-num">04</span>
              <span className="road-name">Investing</span>
              <p className="road-subhead">Supporting tokens on Solana</p>
              <p className="road-content">
                We will invest 10% of our revenue in $BOP and will not touch for
                at least two years, we want to support projects in the Solana
                network, and we think $BOP is an excellent option for doing
                that.
              </p>
            </div>
          </div>
        </div>
        <div className="roads-pile web"></div>
        <div className="right-container">
          <div className="road left">
            <div className="road-road">
              <span className="road-num">01</span>
              <span className="road-name">The beginning of everything</span>
              <p className="road-subhead">Minting</p>
              <p className="road-content">
                Launch 3.333 Turtles that are all different, algorithmically
                generated, fierce, and collectible Turtles to our perfect
                community.
              </p>
            </div>
            <div className="pile-connector"></div>
          </div>
          <div className="road left">
            <div className="road-road">
              <span className="road-num">03</span>
              <span className="road-name">Donating</span>
              <p className="road-subhead">Help Save Baby Turtles</p>
              <p className="road-content">
                We will donate 10% of our revenue to "Help Save Baby Turtles"
                (Turtle EcoTraveler: @SEEturtles & Billion Baby Turtles:
                @SaveHatchlings).
              </p>
            </div>
            <div className="pile-connector"></div>
          </div>
          <div className="road left">
            <div className="road-road">
              <span className="road-num">05</span>
              <span className="road-name">Future things to come</span>
              <p className="road-subhead">
                Actions for the communities benefit
              </p>
              <p className="road-content">
                Collaborations with other projects.
                <br />
                Releasing a game.
                <br />
                Airdrop for Turtle Hodlers.
              </p>
            </div>
            <div className="pile-connector"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
