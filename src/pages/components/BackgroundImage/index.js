import React, { useRef, useEffect } from "react";
import "./_backgroundImage.scss";

function BackgroundImage({ feature }) {
  const backgroundImageRef = useRef();

  useEffect(() => {
    backgroundImageRef.current.style.backgroundImage = `url(${feature.media.large.url}) `;
  });

  return (
    <div ref={backgroundImageRef} className="full-background-image">
      <div className="feature-container">
        <h2 className="feature-title">{feature.title}</h2>
        <span className="feature-price">
          From £{feature.price.value} {feature.price.unit}
        </span>
        <button className="feature-book-button default-text">
          Book experience
        </button>
      </div>
    </div>
  );
}

export default BackgroundImage;
