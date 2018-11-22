import { pointsConstants } from "./../constants";

export const pointsActions = {
  addPoint,
  removePoint,
  patchPoint
};

function addPoint(point) {
  return { type: pointsConstants.ADD_POINT, point };
}

function removePoint(id) {
  return { type: pointsConstants.REMOVE_POINT, id };
}

function patchPoint(id, newPointData) {
  return { type: pointsConstants.PATCH_POINT, id, newPointData };
}
