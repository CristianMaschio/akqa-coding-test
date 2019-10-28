import React from "react";
import "./_nav.scss";

function Nav() {
  return (
    <nav>
      <h1 className="title">Scandinavian Adventures</h1>
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
