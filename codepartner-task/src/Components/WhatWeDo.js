import React from "react";
import star from "../Media Files/task1 Images/white-star-solid.png";
import rench from "../Media Files/task1 Images/white-rench.png";
import WhatWeDoCard from "./WhatWeDoCard";

const WhatWeDo = () => {
  return (
    <div className="whatWeDo-container ">
      <WhatWeDoCard
        heading="Marketing"
        icon={star}
        subtitle="Creating a spacing how people move through."
      />

      <WhatWeDoCard
        heading="Dev & Design."
        icon={star}
        subtitle="Creating a higher spacing how people move through. From its mel origins to the digital era.."
      />

      <WhatWeDoCard
        heading="Creativity"
        icon={rench}
        subtitle="Get a full control of debts in the dsu digital world simplesity. Labore et dolore magna aliqua.."
      />
    </div>

    ///////////////////////////////////////////////////////////

    // <div className="whatWeDo-container">
    //   <div className="whatWeDo-card card-1">
    //     <img src={star} />
    //     <h1>Marketing</h1>
    //     <p>Creating a spacing how people move through.</p>
    //   </div>

    //   <div className="whatWeDo-card card-2 ">
    //     <img src={star} />
    //     <h1>Marketing</h1>
    //     <p>Creating a spacing how people move through.</p>
    //   </div>

    //   <div className="whatWeDo-card card-3 ">
    //     <img src={star} />
    //     <h1>Marketing</h1>
    //     <p>Creating a spacing how people move through.</p>
    //   </div>
    // </div>
  );
};

export default WhatWeDo;
