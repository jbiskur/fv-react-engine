import "style/index.scss";

import React from "react";
import ReactDOM from "react-dom";

let HelloWorld = () => {
  console.log("HELLO");
  return <h1>Hello there World!</h1>;
};
ReactDOM.render(<HelloWorld />, document.getElementById("root"));

HelloWorld.propTypes = {};
