/* eslint-disable react/prop-types */
import React from "react";
import { FaStar } from "react-icons/fa";

const ColorStar = () => {
  //console.log(color);
  const circleStyles = {
    borderRadius: "50%",
    width: "2rem",
    height: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "green",
  };

  const iconStyles = {
    color: "white",
    fontSize: "1.5em",
  };

  return <div style={circleStyles}>{<FaStar style={iconStyles} />}</div>;
};

export default ColorStar;
