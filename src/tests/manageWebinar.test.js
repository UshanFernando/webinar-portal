import React from "react";
import { shallow } from "enzyme";
import ManageWebinar from "../pages/WebinarManage";

describe("Webinar Manager Post Button", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(<ManageWebinar />)
        .find("#postbtn")
        .exists()
    ).toBe(true);
  });
});

describe("Title input", () => {
  it("should respond to change event and change the state of the ManageWebinar Component", () => {
    const wrapper = shallow(<ManageWebinar />);
    wrapper.find("#titleInput").simulate("change", {
      target: { title: "title", value: "SLIIT" },
    });
    expect(wrapper.state("title")).toEqual("SLIIT");
  });
});

describe("Category Input", () => {
  it("should respond to change event and change the state of the ManageWebinar Component", () => {
    const wrapper = shallow(<ManageWebinar />);
    wrapper.find("#categoryInput").simulate("change", {
      target: { title: "category", value: "Professional" },
    });
    expect(wrapper.state("category")).toEqual("Professional");
  });
});
describe("Password Input", () => {
  it("should respond to change event and change the state of the ManageWebinar Component", () => {
    const wrapper = shallow(<ManageWebinar />);
    wrapper.find("#passwordInput").simulate("change", {
      target: { password: "sadsadww", value: "sasdad" },
    });
    expect(wrapper.state("password")).toEqual("sasdad");
  });
});
describe("Date Input", () => {
  it("should respond to change event and change the state of the ManageWebinar Component", () => {
    const wrapper = shallow(<ManageWebinar />);
    wrapper.find("#dateInput").simulate("change", {
      target: { date: "2021/12/2", value: "2021/12/4" },
    });
    expect(wrapper.state("date")).toEqual("2021/12/4");
  });
});
describe("Time Input", () => {
  it("should respond to change event and change the state of the ManageWebinar Component", () => {
    const wrapper = shallow(<ManageWebinar />);
    wrapper.find("#timeInput").simulate("change", {
      target: { time: "10:45 AM", value: "12:45 AM" },
    });
    expect(wrapper.state("time")).toEqual("12:45 AM");
  });
});