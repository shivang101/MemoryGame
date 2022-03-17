import React from "react";
import "./SingleCard.css";

export default function SingleCard({ image, choice, flipped }) {
  const handleClick = () => {
    choice(image);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={image.src} alt="card front" />
        <img
          className="back"
          onClick={handleClick}
          src="img/cover.png"
          alt="card front"
        />
      </div>
    </div>
  );
}
