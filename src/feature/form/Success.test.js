import React from "react";
import ReactDOM from "react-dom";
import Success from "./Success";
import { mount, configure } from "enzyme";
import { expect } from "chai";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Success match={{ params: { id: "123" } }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders with button", () => {
  const wrapp = mount(<Success match={{ params: { id: "123" } }} />);
  expect(wrapp.find("button")).to.have.lengthOf(1);
});

it("renders 0 as initial value", () => {
  const wrapp = mount(<Success match={{ params: { id: "123" } }} />);
  expect(wrapp.find("button").text()).to.equals("");
});
