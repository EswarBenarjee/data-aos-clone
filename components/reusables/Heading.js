import React from "react";

const Heading = ({ title }) => {
  return <p className="text-xl font-bold">{title.toUpperCase()}</p>;
};

export default Heading;
