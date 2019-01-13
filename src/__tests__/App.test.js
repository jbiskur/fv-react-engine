import React from "react";
import App from "./../App";
import constructBuilder from "test-component-builder";
import { render, fireEvent, cleanup } from "react-testing-library";

const builder = props => {
  return <App {...props} />;
};

const jestfn = jest.fn();

let app;
describe("App", () => {
  afterEach(cleanup);

  beforeEach(() => {
    app = constructBuilder(builder)
      .with({
        onClick: jestfn
      })
      .using(render);
  });

  it("Should run without crashing", () => {
    expect(app.create()).toBeTruthy();
  });

  it("should have a button", () => {
    const { getByText } = app.create();
    expect(getByText("Hello there World!")).toBeTruthy();
  });

  it("should call method when clicking on button", () => {
    const { getByText } = app.create();
    fireEvent.click(getByText("Hello there World!"));
    expect(jestfn).toHaveBeenCalledTimes(1);
  });
});
