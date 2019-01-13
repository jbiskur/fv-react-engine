import React from "react";
import App from "./../App";

describe("App", () => {
  it("Should run without crashing", () => {
    const app = <App />;
    expect(app).toBeTruthy();
  });
});
