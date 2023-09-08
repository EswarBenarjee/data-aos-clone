import React from "react";

import Button from "./reusables/Button";
import Line from "./reusables/Line";
import Heading from "./reusables/Heading";
import SubHeading from "./reusables/SubHeading";

const Footer = () => {
  return (
    <div className="footer p-5 md:p-20 md:px-40">
      <Heading title="GET IT" />

      <div className="mt-4">
        <Button link="" title="Download" className="me-4" />
        <Button link="" title="View on GitHub" />
      </div>

      <Line />

      <Heading title="Install using yarn, npm, bower" />

      <code>
        <span className="title">yarn</span> add aos
      </code>
      <code>
        npm <span className="operation">install</span> aos --save
      </code>
      <code>
        bower <span className="operation">install</span> aos --save
      </code>

      <Line />

      <Heading title="cdn sources" />

      <SubHeading title="CSS" />

      <code>
        {"<"}
        <span className="operation">link</span> href="
        <span className="link">https://unpkg.com/aos@2.3.1/dist/aos.css</span>"
        rel="<span className="link">stylesheet</span>"{">"}
      </code>

      <SubHeading title="JS" />

      <code>
        {"<"}
        <span className="operation">script</span> src="
        <span className="link">https://unpkg.com/aos@2.3.1/dist/aos.js</span>"
        {"></script>"}
      </code>

      <Line />

      <SubHeading title="Initialize AOS" />

      <code>
        {"<"}
        <span className="title">script</span>
        {">"}
        AOS.init();
        {"</"}
        <span className="title">script</span>
        {">"}
      </code>
    </div>
  );
};

export default Footer;
