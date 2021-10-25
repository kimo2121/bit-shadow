import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { ReactComponent as Dots } from "../../assets/images/dots.svg";
import { ReactComponent as Close } from "../../assets/images/close.svg";
import { Link } from "react-scroll";
import "./navbar.css";
const Navbar = () => {
  const [state, setstate] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-content">
        <div className="nav-links">
          <img className="logo" src={logo} alt="" />
          <Link to="MINT" href="/">
            MINT
          </Link>
          <Link to="RARITY" href="/">
            RARITY
          </Link>
          <Link to="ROADMAP" href="/">
            ROADMAP
          </Link>
          <Link to="FAQ" href="/">
            FAQ
          </Link>
        </div>

        <div className={state === true ? "mob-menu active" : "mob-menu"}>
          <Close className="close-icon" onClick={() => setstate(false)} />
          <Link to="MINT" href="/">
            MINT
          </Link>
          <Link to="RARITY" href="/">
            RARITY
          </Link>
          <Link to="ROADMAP" href="/">
            ROADMAP
          </Link>
          <Link to="FAQ" href="/">
            FAQ
          </Link>
        </div>
        <div style={{ display: "flex" }}>
          <button className="connect-btn">Select Wallet</button>
          <div onClick={() => setstate(!state)} className="menu">
            <Dots />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
