import React from "react";
import PropTypes from "prop-types";
import BackgroundImage from "../components/BackgroundImage";
import FeatureItemCard from "../components/FeatureItemCard";

import "./_home.scss";

export default function Home({ featured }) {
  return (
    <div>
      {featured &&
        featured.map((feature, index) => {
          if (index === 0) {
            return <BackgroundImage key={feature.id} feature={feature} />;
          } else if (index % 2 !== 0) {
            return (
              <div key={feature.id} className="featured-container">
                <div
                  className="first-feature"
                  style={{ maxWidth: `${feature.media.large.width}px` }}
                >
                  <FeatureItemCard feature={feature} />
                </div>
                {featured[index + 1] && (
                  <div
                    className="second-feature"
                    style={{
                      maxWidth: `${featured[index + 1].media.large.width}px`
                    }}
                  >
                    <FeatureItemCard feature={featured[index + 1]} />
                  </div>
                )}
              </div>
            );
          }
        })}
    </div>
  );
}

Home.propTypes = {
  featured: PropTypes.arrayOf(
    PropTypes.shape({
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
  ).isRequired
};
