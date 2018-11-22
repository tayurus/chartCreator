import React from "react";

import { PointView, PointInputs, PointAdd, Point } from "./../../components";
import { fields } from "./../../constants";

export class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const p = { color: "tomato", x: 4, y: 5 };

    return (
      <div className="MainPage">
        <PointAdd fields={fields} />
      </div>
    );
  }
}

//
// <PointView point={{ color: "tomato", x: 4, y: 5 }} />
// <PointInputs coordinates={{ x: 4, y: 5 }} />
// <Point point={p} />
