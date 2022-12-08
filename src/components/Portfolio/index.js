import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [developers] = useState([
    {
      image: "",
      application: "",
      github: "",
      name: "Photo Portfolio",
    },
    {
      image: "",
      application: "",
      github: "",
      name: "Photo Portfolio",
    },
    {
      image: "",
      application: "",
      github: "",
      name: "",
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
