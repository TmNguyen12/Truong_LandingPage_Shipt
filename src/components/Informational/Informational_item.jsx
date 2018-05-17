import React from "react";

const InformationalItem = props => {
  return (
    <div className={"informational-item-" + props.info.name}>
      <div className="info-image-holder">
        <img
          src={process.env.PUBLIC_URL + `${props.info.image}`}
          alt={props.name}
        />
      </div>
      <div className="info-catch-text">{props.info.catchText}</div>
      <div className="info-description">{props.info.description}</div>
    </div>
  );
};

export default InformationalItem;
