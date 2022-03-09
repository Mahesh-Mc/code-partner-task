import React from "react";
import youngLadySitting from "../Media Files/task1 Images/youngLadySittingWb.png";

const WhyChooseUs = () => {
  return (
    <div className="whyChooseUs-container">
      <div className="whyChooseUs-left">
        <h1>Why Choose Code Partner?</h1>
        <p className="para-1">
          So how does it work? Let's check our Getting Started tutorial for
          detailed info.
        </p>

        <ul>
          <li>
            <span className="right-tick">&#10003;</span>
            Provides <span className="underline-text">professional</span>{" "}
            service with ease an single point of contact.{" "}
          </li>
          <li>
            <span className="right-tick">&#10003;</span>
            Takes complete{" "}
            <span className="underline-text">responsibility</span> from start to
            end.
          </li>
          <li>
            <span className="right-tick">&#10003;</span>Dedicated Relationship
            Manager in place.
          </li>
        </ul>
        <div>
          <button className="whyChooseUs-button">
            Consult with an expert now!
          </button>
        </div>
      </div>
      <div className="whyChooseUs-right">
        <img src={youngLadySitting} alt="young lady sitting image" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
