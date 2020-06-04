export const DEFAULT_ACTION = "DEFAULT_ACTION";

export const PLANET_FETCHED = "PLANET_FETCHED";
export const FETCH_PLANET_FAILED = "FETCH_PLANET_FAILED";

export default (state = { planetResult: null }, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return {
        message: "RODOU A DEFAULT",
      };
    case FETCH_PLANET_FAILED:
      return {
        message: "API FALHOU",
      };
    case PLANET_FETCHED: {
      return {
        ...state,
        planetResult: action.payload,
      };
    }
    default:
      return state;
  }
};
