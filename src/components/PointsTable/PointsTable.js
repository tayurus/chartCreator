import React from "react";

import "./PointsTable.css";

import { generateKey } from "./../../helpers";

import { PointView } from "./../index";

export const PointsTable = props => (
  <div className="PointsTable">
    {props.points.map((point, index) => (
      <PointView key={generateKey(index)} point={point} />
    ))}
  </div>
);
