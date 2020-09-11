import * as actionTypes from "../actions/actions";

// global state
const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // adding item: not push -concat return new array (immutable)
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      // delete item: get new array with all elements that pass the condition (immutable)
      const updatedArray = state.results.filter(
        // action payload
        (result) => result.id !== action.resultElementId
      );
      return {
        ...state,
        results: updatedArray,
      };
  }
  return state;
};

export default resultReducer;
