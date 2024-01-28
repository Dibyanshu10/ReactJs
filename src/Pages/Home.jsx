import React, { useState } from "react";

const Home = () => {
  const [value, setValue] = useState(0);
  const [newImages, setImages] = useState([]);

  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    if (value == 0) {
      alert("value can not be less than 0(zero)");
      return;
    }
    setValue(value - 1);
  };
  const printStar = () => {
    setImages([true, false, true, true, true]);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "powderblue" }}>
      <button onClick={() => handleIncrement()}>Increase</button>

      <input
        type="text"
        placeholder="Enter the Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleDecrement()}>Decrease</button>
      <div>
        <img
          src="./Images/star.jpg"
          alt="logo"
          style={{ height: "20px", width: "20px" }}
        />
        <div>
          <button onClick={() => printStar()}>Print Star</button>
        </div>
      </div>
      <div>
        {newImages.map(
          (value, index) =>
            value && (
              <img
                src="./Images/star.jpg"
                alt="logo"
                style={{ height: "20px", width: "20px" }}
              />
            )
        )}
      </div>
    </div>
  );
};
export default Home;
