"use client";

import React, { useRef } from "react";
import useIsInViewport from "use-is-in-viewport";

const AOS = (props) => {
  const { dataAOS, dataAOSDuration, dataAOSEasing, ...rest } = props;

  const targetRef = useRef(null);
  const [isInViewport, wrappedTargetRef] = useIsInViewport({
    target: targetRef,
    threshold: 50,
  });

  return (
    <div
      data-aos={isInViewport ? dataAOS : ""}
      data-aos-duration={isInViewport ? dataAOSDuration || 1000 : ""}
      data-aos-easing={isInViewport ? dataAOSEasing || "ease-in-out" : ""}
      style={{ opacity: isInViewport ? 1 : 0 }}
      {...rest}
      ref={wrappedTargetRef}
    >
      {props.children}
    </div>
  );
};

export default AOS;
