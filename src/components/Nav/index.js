import React from "react";
import "./_nav.scss";

/*
 * In this component we will render the navigation bar.a
 *
 * Future steps:
 * With react router we will use its components to use the links.
 * While for style the mobile part being a fairly used style we're going to use.
 */

function Nav() {
  return (
    <nav>
      <h1 className="title">
        <a>Scandinavian Adventures</a>
      </h1>
      <ul>
        <li>
          <a>
            <div className="nav-link">Experiences</div>
          </a>
        </li>
        <li>
          <a>
            <div className="nav-link">Company</div>
          </a>
        </li>
        <li>
          <a>
            <div className="nav-link">Support</div>
          </a>
        </li>
        <li>
          <a>
            <img
              className="cart-link"
              src={require("../../assets/Icons/cart.png")}
              alt="shopping cart link"
            ></img>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
