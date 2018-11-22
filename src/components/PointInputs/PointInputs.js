import React from "react";

import "./PointInputs.css";

import PropTypes from "prop-types";

export const PointInputs = props => {
  const { className, coordinates, handleCoordinateChange } = props;
  return (
    <div className={"PointInputs " + className}>
      <div className="d-flex">
        {Object.keys(coordinates).map(coord => (
          <div className="d-flex align-items-center mx-3">
            <div className="mx-3">{coord}</div>
            <input
              type="number"
              className="PointInputs__field"
              min="0"
              max="1000"
              value={coordinates[coord]}
              onChange={e =>
                handleCoordinateChange(coord, parseInt(e.target.value))
              }
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
