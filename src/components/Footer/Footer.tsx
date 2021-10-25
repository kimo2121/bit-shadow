import React from "react";
import { Link } from "react-scroll";
import "./footer.css";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
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
      <div className="footer-ext">
        <AiOutlineTwitter
          style={{ marginRight: "20px" }}
          size="30"
          color="white"
        />
        <FaDiscord size="30" color="white" />
      </div>
    </div>
  );
};

export default Footer;
