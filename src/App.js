import React from "react";
import PropTypes from "prop-types";

const App = props => {
  return <button onClick={props.onClick}>Hello there World!</button>;
};

App.propTypes = {
  onClick: PropTypes.func
};

export default App;
