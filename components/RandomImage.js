import React from "react";
import Image from "next/image";

const randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const RandomImage = ({ classes }) => {
  return (
    <img src={`/img/${randomNumberGenerator(1, 8)}.png`} className={classes} />
  );
};

export default RandomImage;
