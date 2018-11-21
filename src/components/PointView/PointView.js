import React from "react";

import "./PointView.css";

import PropTypes from "prop-types";

export const PointView = props => {
  const { point, className } = props;
  return (
    <div className={"PointView " + className}>
      <div className="d-flex align-items-center">
        <div
          className="PointView__color mx-2"
          style={{ backgroundColor: point.color }}
        />

        <div className="d-flex mx-2">
          <div className="mx-1">X:</div>
          <div>{point.x}</div>
        </div>

        <div className="d-flex mx-2">
          <div className="mx-1">Y:</div>
          <div>{point.y}</div>
        </div>
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
