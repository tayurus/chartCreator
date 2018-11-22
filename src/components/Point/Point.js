import React from "react";

import { PointView, PointInputs } from "./../index";

export class Point extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inEditMode: false
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleCoordinateChange = this.handleCoordinateChange.bind(this);
    this.pointPropToState = this.pointPropToState.bind(this);
  }

  componentWillMount() {
    this.pointPropToState();
  }

  handleCoordinateChange(coordinateName, value) {
    this.setState({ point: { ...this.state.point, [coordinateName]: value } });
  }

  pointPropToState() {
    const point = Object.assign({}, this.props.point);
    this.setState({ point: point });
  }

  toggleEditMode() {
    this.setState({ inEditMode: !this.state.inEditMode });
    this.pointPropToState();
  }

  render() {
    const { className, removePoint, patchPoint } = this.props;
    const constPoint = this.props.point;
    const { inEditMode, point } = this.state;
    const { id, color, ...coordinates } = point;

    return (
      <div className={"Point " + className}>
        {!inEditMode ? (
          <div className="d-flex">
            <PointView point={constPoint} />
            <div className="d-flex">
              <button
                className="btn btn-primary mx-2"
                onClick={this.toggleEditMode}
              >
                ✎
              </button>
              <button
                className="btn btn-danger mx-2"
                onClick={() => removePoint(id)}
              >
                ❌
              </button>
            </div>
          </div>
        ) : (
          <div className="d-flex">
            <PointInputs
              coordinates={coordinates}
              handleCoordinateChange={this.handleCoordinateChange}
            />
            <div className="d-flex">
              <button
                className="btn btn-success mx-2"
                onClick={() => patchPoint(id, point)}
              >
                ✓
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={this.toggleEditMode}
              >
                cancel
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Point.defaultProps = {
  className: ""
};
