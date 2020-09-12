import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

// global state
const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result }),
      });
    case actionTypes.DELETE_RESULT:
      // delete item: get new array with all elements that pass the condition (immutable)
      const updatedArray = state.results.filter(
        // action payload
        (result) => result.id !== action.resultElementId
      );
      return updateObject(state, { results: updatedArray });
    default:
      return state;
  }
};

export default resultReducer;
