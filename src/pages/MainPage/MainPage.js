import React from "react";

import { PointView, PointInputs } from "./../../components";
import { Point } from "./../../components";

export class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const p = { color: "tomato", x: 4, y: 5, z: 1 };

    return (
      <div className="MainPage">
        <Point point={p} />
      </div>
    );
  }
}

//
// <PointView point={{ color: "tomato", x: 4, y: 5 }} />
// <PointInputs coordinates={{ x: 4, y: 5 }} />
