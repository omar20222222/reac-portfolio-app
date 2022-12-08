import React, { useState } from "react";
import Project from "../Project";
import pwGenImg from "../../assets/password-generator.png";
import pwaImg from "../../assets/pwa.png";
import horiseonImg from "../../assets/horiseon.png";

function Portfolio() {
  const [developers] = useState([
    {
      image: pwGenImg,
      application: "https://omar20222222.github.io/password-generator/",
      github: "https://github.com/omar20222222/password-generator/",
      name: "Photo Portfolio",
    },
    {
      image: pwaImg,
      application: "https://radiant-reaches-21203.herokuapp.com/",
      github: "https://github.com/omar20222222/pwa-text-editor/",
      name: "Photo Portfolio",
    },
    {
      image: horiseonImg,
      application:
        "https://omar20222222.github.io/marketing-agent/#search-engine-optimization",
      github: "https://github.com/omar20222222/marketing-agent",
      name: "Photo Portfolio",
    },
  ]);

  return (
    <>
      <h1 data-testid="h1tag">Portfolio</h1>
      <div className="flex-row">
        {developers.map((developer) => (
          <Project developer={developer} />
        ))}
      </div>
    </>
  );
}

export default Portfolio;
