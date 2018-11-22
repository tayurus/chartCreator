import React from "react";

import "./PointAdd.css";

import { PointInputs } from "./../index";

import PropTypes from "prop-types";

import { arrayToObject } from "./../../helpers";

export class PointAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inAddMode: false
    };

    this.handleCoordinateChange = this.handleCoordinateChange.bind(this);
    this.toggleAddMode = this.toggleAddMode.bind(this);
    this.clearCoordinatesInState = this.clearCoordinatesInState.bind(this);
    this.handleAddPointClick = this.handleAddPointClick.bind(this);
  }

  componentWillMount() {
    this.setState(arrayToObject(this.props.fields, 0));
  }

  handleCoordinateChange(coordinateName, value) {
    this.setState({ [coordinateName]: value });
  }

  clearCoordinatesInState() {
    this.props.fields.forEach(item => this.setState({ [item]: 0 }));
  }

  toggleAddMode() {
    this.setState({ inAddMode: !this.state.inAddMode });
    this.clearCoordinatesInState();
  }

  handleAddPointClick() {
    const { addPoint } = this.props;
    const { inAddMode, ...newPoint } = this.state;
    addPoint(newPoint);
  }

  render() {
    const { className } = this.props;
    const { inAddMode, ...coordinates } = this.state;

    return (
      <div className={"PointAdd " + className}>
        {!inAddMode ? (
          <button className="btn btn-success" onClick={this.toggleAddMode}>
            Add point
          </button>
        ) : (
          <div className="d-flex">
            <PointInputs
              coordinates={coordinates}
              handleCoordinateChange={this.handleCoordinateChange}
            />
            <div className="d-flex">
              <button
                className="btn btn-success mx-2"
                onClick={this.handleAddPointClick}
              >
                ✓
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={this.toggleAddMode}
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

PointAdd.propTypes = {
  fields: PropTypes.array.isRequired,
  addPoint: PropTypes.func.isRequired
};

PointAdd.defaultProps = {
  className: ""
};
