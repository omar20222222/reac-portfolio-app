import React from "react";
import twitter from "../../assets/twitter.png";

function Footer() {
  const footerImages = [{ name: twitter }];
  return (
    <footer>
      <div className="flex-row" style={{ justifyContent: "center" }}>
        {footerImages.map((footerImage) => (
          <img
            src={footerImage.name}
            className="px-1 py-1 img-thumbnail mx-1"
            style={{ width: "60px", height: "60px" }}
            alt="cover"
          />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
