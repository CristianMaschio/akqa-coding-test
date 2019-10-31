import React from "react";
import { shallow } from "enzyme";
import Button from ".";

describe("Test component: <Button />", () => {
  it("should Button render!", () => {
    shallow(<Button />);
  });
});
