import React from "react";

import Twitter from "../../assets/twitter.png";

function Project({ developer }) {
  return (
    <div>
      <div className="container">
        <img
          alt="developer"
          src={developer.image}
          width="500px"
          height="300px"
        />
        <div className="middle">
          <a href={developer.twitter} target="_blank" rel="noreferrer">
            <img alt="twitter" src={Twitter} width="40px" height="40px" />
          </a>
          <a href={developer.application} target="_blank" rel="noreferrer">
            <p>{developer.name}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
