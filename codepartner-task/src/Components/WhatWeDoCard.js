import React from "react";

const WhatWeDoCard = (props) => {
  return (
    <div className="whatWeDo-card">
      <div className="img-background">
        <img src={props.icon} />
      </div>
      <h3>{props.heading}</h3>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default WhatWeDoCard;
