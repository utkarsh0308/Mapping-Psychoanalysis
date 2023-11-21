import React, { useState, useEffect } from "react";

const ColorDisplay = () => {
  const [colorValues, setColorValues] = useState({
    red: 0,
    blue: 0,
    green: 0,
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/color_values", {
      method: "GET", // Use GET method
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setColorValues(data))
      .catch((error) => console.error("Error fetching color values:", error));
  }, []);

  const { red, blue, green } = colorValues;

  const colorDisplayStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  };

  const colorBlockStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid #000",
    borderRadius: "5px",
  };

  // Use the fetched color values to construct the correct rgb values for each color
  const redColor = `rgb(${red}, 0, 0)`;
  const blueColor = `rgb(0, 0, ${blue})`;
  const greenColor = `rgb(0, ${green}, 0)`;

  return (
    <div>
      <div style={colorDisplayStyle}>
        <div style={{ ...colorBlockStyle, backgroundColor: redColor }}></div>
        <div style={{ ...colorBlockStyle, backgroundColor: blueColor }}></div>
        <div style={{ ...colorBlockStyle, backgroundColor: greenColor }}></div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <p>Red: {red}</p>
        <p>Blue: {blue}</p>
        <p>Green: {green}</p>
      </div>
    </div>
  );
};

export default ColorDisplay;
