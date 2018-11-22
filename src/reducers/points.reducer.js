import { pointsConstants, colors } from "./../constants";

import { removeArrayItem } from "./../helpers";

export function pointsReducer(state = { points: [] }, action) {
  switch (action.type) {
    case pointsConstants.ADD_POINT:
      let newPoint = action.point;
      newPoint.id = state.points.length;
      const colorsKeys = Object.keys(colors);
      let randomColorKey =
        colorsKeys[Math.floor(Math.random() * colorsKeys.length)];
      newPoint["color"] = colors[randomColorKey];

      return {
        ...state,
        points: [...state.points, action.point]
      };

    case pointsConstants.REMOVE_POINT:
      const removedIndex = state.points.findIndex(
        point => point.id === action.id
      );

      state.points.slice(0, removedIndex).slice(removedIndex + 1);

      return {
        ...state,
        points: removeArrayItem(state.points, removedIndex)
      };
    case pointsConstants.PATCH_POINT:
      const patchedIndex = state.points.findIndex(
        point => point.id === action.id
      );
      const newPoints = JSON.parse(JSON.stringify(state.points));
      newPoints[patchedIndex] = action.newPointData;
      return { ...state, points: newPoints };
    default:
      return state;
  }
}
