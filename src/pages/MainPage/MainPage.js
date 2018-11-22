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

import { connect } from "react-redux";

import { pointsActions } from "./../../actions";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // actions
    const { addPoint, removePoint, patchPoint } = this.props;

    //data
    const { points } = this.props;

    return (
      <div className="MainPage">
        <div>
          <PointAdd fields={fields} className="m-4" addPoint={addPoint} />
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
  const { points } = state.pointsReducer;

  return { points };
}

function mapDispatchToProps(dispatch) {
  return {
    addPoint: point => dispatch(pointsActions.addPoint(point)),
    removePoint: id => dispatch(pointsActions.removePoint(id)),
    patchPoint: (id, newPointData) =>
      dispatch(pointsActions.patchPoint(id, newPointData))
  };
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

export { connectedComponent as MainPage };
