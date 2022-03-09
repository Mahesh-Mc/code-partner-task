import "../style.css";
import RightWb from "../Media Files/task1 Images/RightWb.png";

const Banner = () => {
  return (
    <div className="banner-container">
      {/* Banner Left */}
      <div className="banner-left">
        <h1 className="banner-heading">Smart Consulting Group.</h1>

        <p className="banner-subtitle">
          We helping client to create technology that uses Blockchain, Ai and
          IOT with our talented expert.
        </p>

        <button className="banner-button">Consult with an expert now!</button>

        <p className="banner-text">
          <small>
            <span>Already a member? </span>
            <a href="#"> Sign in</a>.
          </small>
        </p>
      </div>

      {/* Banner right */}
      <div className="banner-right">
        <img src={RightWb} alt="girl laptop card" />
        <div className="image-backShade"></div>
      </div>
    </div>
  );
};

export default Banner;
