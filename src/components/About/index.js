import React from "react";
import omar from "../../assets/omar.PNG";

function About() {
  return (
    <section>
      <h1 data-testid="h1tag">About me</h1>
      <img
        src={omar}
        className="py-2"
        style={{
          width: "25%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        alt="cover"
      />
      <h5 id="about" style={{ textAlign: "center", padding: "40px" }}>
        WEllCOME TO MY Portfolio..
        <br />
        HEllO! My name is Omar, I am 25 years old. Currently working as IT
        Support technician Second Line for about 3 years ago. I chose to embark
        on this Boot camp course not only for an opportunity of a career change
        but to seek more challenges, enhance my knowledge of technology and
        learning in general! Being in this Boot camp has taught me invaluable
        skills such as strengthening my technical and problem-solving skills but
        most importantly, but has given me a glimpse into the working-life of a
        developer.
        <p></p>I recently earned a certificate in full stack development from
        the University of Birmingham boot camp, with newly developed skills in
        JavaScript, CSS, React.js, and responsive web design.
      </h5>
    </section>
  );
}

export default About;
