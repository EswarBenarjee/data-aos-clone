import React from "react";

const AOS = (props) => {
  const { dataAOS, dataAOSDuration, dataAOSEasing, ...rest } = props;

  return (
    <div
      data-aos={dataAOS}
      data-aos-duration={dataAOSDuration || 1000}
      data-aos-easing={dataAOSEasing || "ease-in-out"}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default AOS;
