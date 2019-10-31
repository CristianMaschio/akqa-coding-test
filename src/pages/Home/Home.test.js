import React from "react";
import { shallow } from "enzyme";
import Home from ".";

describe("Test component: <Home />", () => {
  it("should Home render!", () => {
    shallow(<Home />);
  });
});
