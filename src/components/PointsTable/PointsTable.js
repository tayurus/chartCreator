import React from "react";

import "./PointsTable.css";

import { generateKey } from "./../../helpers";

import { Point } from "./../index";

export const PointsTable = props => {
  const { points, removePoint, patchPoint } = props;

  return (
    <div className="PointsTable">
      {points.map((point, index) => (
        <Point
          className="m-2"
          key={generateKey(index)}
          point={point}
          removePoint={removePoint}
          patchPoint={patchPoint}
        />
      ))}
    </div>
  );
};
