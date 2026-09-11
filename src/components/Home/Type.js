import React from "react";
import Typewriter from "typewriter-effect";
import { personalInfo } from "../../data/portfolioData";

function Type() {
  return (
    <Typewriter
      options={{
        strings: personalInfo.titles,
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        delay: 50,
      }}
    />
  );
}

export default Type;
