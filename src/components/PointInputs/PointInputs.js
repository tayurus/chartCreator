import React from "react";

import "./PointInputs.css";

import PropTypes from "prop-types";

export const PointInputs = props => {
  const { className, coordinates, handleCoordinateChange } = props;
  return (
    <div className={"PointInputs " + className}>
      <div className="d-flex flex-wrap">
        {Object.keys(coordinates).map(coord => (
          <div className="d-flex align-items-center">
            <div className="mx-1">{coord}</div>
            <input
              type="number"
              min="1000"
              max="1000"
              value={coord.value}
              onChange={e => handleCoordinateChange(coord.name, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

PointInputs.propTypes = {
  coordinates: PropTypes.object.isRequired,
  handleCoordinateChange: PropTypes.func.isRequired
};

PointInputs.defaultProps = {
  className: ""
};
