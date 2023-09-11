import React from "react";

import Line from "./reusables/Line";

import AOS from "./AOS";

const Property = ({ propertyName, properties, children }) => {
  return (
    <>
      <Line />
      <h2 className="mb-2 mt-0 text-4xl text-center font-medium leading-tight text-primary">
        {propertyName.toUpperCase()}
      </h2>
      <Line />

      <div className="aos-items">
        {properties.map((property, index) => {
          return (
            <AOS
              key={index}
              dataAOS={property}
              className="lg:w-1/2 border-4 p-4 py-20 text-center bg-[#172554] overflow-x-auto my-5 lg:my-40"
            >
              <code>
                {"<"}
                <span className="operation">AOS</span>{" "}
                <span className="title">dataAos</span>="
                <span className="link">{property}</span>"{"/>"}
              </code>
            </AOS>
          );
        })}
      </div>
    </>
  );
};

export default Property;
