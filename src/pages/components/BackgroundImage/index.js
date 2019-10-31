import React from "react";
import PropTypes from "prop-types";
import "./_backgroundImage.scss";
import Button from "../Button";

function BackgroundImage({ feature }) {
  return (
    <React.Fragment>
      {feature && (
        <div
          style={{ backgroundImage: `url(${feature.media.large.url})` }}
          className="full-background-image"
        >
          <div className="feature-container">
            <h2 className="feature-title">{feature.title}</h2>
            <span className="feature-price">
              From £{feature.price.value} {feature.price.unit}
            </span>
            <Button color="white">Book experience</Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

BackgroundImage.propTypes = {
  feature: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    media: PropTypes.shape({
      large: PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
      }).isRequired,
      small: PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
      }).isRequired
    }).isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currencyCode: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired
    }).isRequired
  })
};

export default BackgroundImage;
