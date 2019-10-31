import React from "react";
import { shallow } from "enzyme";
import FeatureItem from ".";

describe("Test component: <FeatureItem />", () => {
  it("should FeatureItem render!", () => {
    shallow(<FeatureItem />);
  });
});
