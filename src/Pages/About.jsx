import React from "react";

const printPattern = () => {};

const About = () => {
  return (
    <div>
      Printing Pattern
      <img
        src="./Images/star.jpg"
        alt="logo"
        style={{ height: "20px", width: "20px" }}
      />
      <button onClick={() => printPattern()}>Print Pattern</button>
    </div>
  );
};
export default About;
