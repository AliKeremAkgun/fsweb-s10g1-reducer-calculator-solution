import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

import {
  changeOperation,
  clearDisplay,
  memoryPlus,
  memoryRecall,
  memoryClear,
  screenType,
  calculate,
} from "./actions";

import reducer, { initialState } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.screen} />

            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="temp">
                <b>Temp:</b> {state.temp}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            {/* MEMORY */}
            <div className="row">
              <CalcButton
                onClick={() => dispatch(memoryPlus())}
                value={"M+"}
              />
              <CalcButton
                onClick={() => dispatch(memoryRecall())}
                value={"MR"}
              />
              <CalcButton
                onClick={() => dispatch(memoryClear())}
                value={"MC"}
              />
            </div>

            {/* 1 2 3 */}
            <div className="row">
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={1}
              />
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={2}
              />
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={3}
              />
            </div>

            {/* 4 5 6 */}
            <div className="row">
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={4}
              />
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={5}
              />
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={6}
              />
            </div>

            {/* 7 8 9 */}
            <div className="row">
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={7}
              />
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={8}
              />
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={9}
              />
            </div>

            {/* 0 CE = */}
            <div className="row">
              <CalcButton
                onClick={(e) => dispatch(screenType(e.target.value))}
                value={0}
              />
              <CalcButton
                onClick={() => dispatch(clearDisplay())}
                value={"CE"}
              />
              <CalcButton
                onClick={() => dispatch(calculate())}
                value={"="}
              />
            </div>

            {/* OPERATIONS */}
            <div className="row">
              <CalcButton
                onClick={(e) =>
                  dispatch(changeOperation(e.target.value))
                }
                value={"+"}
              />
              <CalcButton
                onClick={(e) =>
                  dispatch(changeOperation(e.target.value))
                }
                value={"*"}
              />
              <CalcButton
                onClick={(e) =>
                  dispatch(changeOperation(e.target.value))
                }
                value={"-"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;