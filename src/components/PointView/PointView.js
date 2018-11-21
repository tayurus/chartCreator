import React from "react";

import "./PointView.css";

import PropTypes from "prop-types";

export const PointView = props => {
  const { point, className } = props;
  const { color, ...coordinates } = point;
  return (
    <div className={"PointView " + className}>
      <div className="d-flex align-items-center">
        <div
          className="PointView__color mx-2"
          style={{ backgroundColor: point.color }}
        />

        {Object.keys(coordinates).map(coord => (
          <div className="d-flex mx-2">
            <div className="mx-1">{coord + ":"}</div>
            <div>{coordinates[coord]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

PointView.propTypes = {
  point: PropTypes.object.isRequired
};

PointView.defaultProps = {
  className: ""
};
