import React from "react";
import NavigationBar from "./Components/NavigationBar";
import Banner from "./Components/Banner";
import WhatWeDo from "./Components/WhatWeDo";
import Footer from "./Components/Footer";
import JoinUs from "./Components/JoinUs";
import WhyChooseUs from "./Components/WhyChooseUs";

const App = () => {
  return (
    <div
      style={{
        width: "92%",
        // height: "7000px",
        // background: "#f07",
        background: "#fff",
        margin: "auto",
      }}
    >
      <NavigationBar />
      <Banner />
      <hr />
      <WhatWeDo />
      <hr />
      <WhyChooseUs />
      <hr />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default App;
