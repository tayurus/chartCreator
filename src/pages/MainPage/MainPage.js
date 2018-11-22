import React from "react";

import "./MainPage.css";

import {
  PointView,
  PointInputs,
  PointAdd,
  Point,
  PointsTable
} from "./../../components";
import { fields } from "./../../constants";

import connect from "react-redux";

import { pointActions } from "./../actions";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { addPoint, removePoint, patchPoint } = this.props;

    return (
      <div className="MainPage">
        <div>
          <PointAdd fields={fields} addPoint={addPoint} />
          <PointsTable
            points={points}
            removePoint={removePoint}
            patchPoint={patchPoint}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { points } = state;

  return { points };
}

function mapDispatchToProps(dispatch) {
  return {
    addPoint: point => dispatch(pointActions.addPoint(point)),
    removePoint: pointId => dispatch(pointActions.removePoint(pointId)),
    patchPoint: (pointId, newPointData) =>
      dispatch(pointActions.patchPoint(pointId, newPointData))
  };
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

export { connectedComponent as MainPage };
