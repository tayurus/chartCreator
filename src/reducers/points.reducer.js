import { pointsConstants } from "./../constants";

export function pointsReducer(state = { points: [] }, action) {
  switch (action.type) {
    case pointsConstants.ADD_POINT:
      return {
        ...state,
        points: [...state.points, action.point]
      };
    case pointsConstants.REMOVE_POINT:
      const removedIndex = state.points.findIndex(
        point => point.id === action.id
      );

      return {
        ...state,
        points: state.points.slice(0, removedIndex).slice(removedIndex + 1)
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
