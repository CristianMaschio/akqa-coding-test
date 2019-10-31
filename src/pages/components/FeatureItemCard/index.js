import React from "react";
import Button from "../Button";

import { getCurrencyValue } from "../../../utils/functions";

import "./_featureItemCard.scss";

function FeatureItemCard({ feature }) {
  return (
    <React.Fragment>
      {feature && (
        <div className="feature-item-card">
          <div
            style={{ backgroundImage: `url(${feature.media.large.url})` }}
            className="background-image"
          >
            <h3>{feature.title}</h3>
          </div>
          <div className="feature-description">
            <p>{feature.body}</p>
            <span>
              {`From ${getCurrencyValue(
                feature.price.currencyCode,
                feature.price.value
              )} ${feature.price.unit}`}
            </span>
            <Button color="black">Book experience</Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default FeatureItemCard;
