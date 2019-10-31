import React from "react";
import PropTypes from "prop-types";

import "./_button.scss";

function Button({ children, color, className, onClick }) {
  return (
    <button
      className={`button ${color} default-text ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  color: PropTypes.oneOf(["black", "white"]),
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
