import React from "react";

import { PointView, PointInputs } from "./../../components";

export class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MainPage">
        <PointView point={{ color: "tomato", x: 4, y: 5 }} />
        <PointInputs coordinates={{ x: 4, y: 5 }} />
      </div>
    );
  }
}
