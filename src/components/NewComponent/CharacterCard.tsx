import React from "react";
import ClassNames from "classnames";

//  STYLE
import "./styles.scss";

const CharacterCard: React.FC<{
  image: string;
  text?: string;
  topText?: string;
  menuButton?: boolean;
  black?: boolean;
}> = (props) => {
  return (
    <div
      className={ClassNames("character-card", {
        black: props.black,
      })}
    >
      {props.menuButton && (
        <div className="menu-button">
          <i className="icon icon-dots" />
        </div>
      )}
      {props.topText && (
        <div className="percent-box">
          <span>{props.topText}</span>
        </div>
      )}
      <div className="character-card-inner">
        <img src={props.image} alt={props.text || ""} />
      </div>
      {props.text && <div className="character-card-text">{props.text}</div>}
    </div>
  );
};
export { CharacterCard };
