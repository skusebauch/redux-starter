import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

// global state
const initialState = {
  counter: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });
    // return {
    //   ...state,
    //   counter: state.counter + 1,
    // };
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    // return {
    //   ...state,
    //   counter: state.counter - 1,
    // };
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.value });
    // return {
    //   ...state,
    //   counter: state.counter + action.value,
    // };
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.value });
    // return {
    //   ...state,
    //   counter: state.counter - action.value,
    // };
    default:
      return state;
  }
};

export default countReducer;
