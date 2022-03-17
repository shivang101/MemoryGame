import React from "react";
import "./SingleCard.css";

export default function SingleCard({ image }) {
  return (
    <div className="card">
      <div>
        <img src={image.src} alt="card front" />
        <img src="img/cover.png" alt="card front" />
      </div>
    </div>
  );
}
