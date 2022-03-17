import React from "react";
import "./SingleCard.css";

export default function SingleCard({ image, choice }) {
  const handleClick = () => {
    choice(image);
  };
  return (
    <div className="card">
      <div>
        <img src={image.src} alt="card front" />
        <img onClick={handleClick} src="img/cover.png" alt="card front" />
      </div>
    </div>
  );
}
