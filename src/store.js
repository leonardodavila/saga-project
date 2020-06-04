import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers/planetsReducer";
import planetSaga from "./sagas/planetSagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ planet: reducer });

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(planetSaga);

export default store;
