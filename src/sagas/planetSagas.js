import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  PLANET_FETCHED,
  FETCH_PLANET_FAILED,
} from "../reducers/planetsReducer";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPlanet(action) {
  try {
    const url = "https://swapi.dev/api/planets/1";
    const response = yield call(axios.get, url);

    const planet = response.data;

    yield put({ type: PLANET_FETCHED, payload: planet });
  } catch (e) {
    yield put({
      type: FETCH_PLANET_FAILED,
      payload: "Erro ao buscar o planeta",
    });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeLatest("FETCH_PLANET", fetchPlanet);
}

export default mySaga;
