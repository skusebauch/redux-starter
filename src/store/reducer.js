// global state
const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "STORE_RESULT":
      return {
        ...state,
        // adding item: not push -concat return new array (immutable)
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case "DELETE_RESULT":
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

export default reducer;
