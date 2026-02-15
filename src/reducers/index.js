import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR,
  MEMORY_CLEAR,
  MEMORY_RECALL,
  MEMORY_PLUS,
  DIGIT,
  CALCULATE,
} from "../actions";

export const initialState = {
  total: 0,
  operation: "*",
  memory: 0,
  screen: "0",
  temp: null,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return Number(num1) + Number(num2);
    case "-":
      return Number(num1) - Number(num2);
    case "*":
      return Number(num1) * Number(num2);
    default:
      return Number(num2);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
        screen: action.payload.toString(),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        temp: state.screen,
        screen: "0",
      };

    case CLEAR:
      return {
        ...state,
        total: 0,
        screen: "0",
        temp: null,
      };

    case MEMORY_PLUS:
      return {
        ...state,
        memory: state.total,
      };

    case MEMORY_RECALL:
      return {
        ...state,
        screen: state.memory.toString(),
        total: state.memory,
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };

    case DIGIT:
      return {
        ...state,
        screen:
          state.screen === "0"
            ? action.payload.toString()
            : state.screen + action.payload.toString(),
      };

    case CALCULATE:
      if (state.temp === null) return state;

      const result = calculateResult(
        state.temp,
        state.screen,
        state.operation
      );

      return {
        ...state,
        total: result,
        screen: result.toString(),
        temp: null,
      };

    default:
      return state;
  }
};

export default reducer;