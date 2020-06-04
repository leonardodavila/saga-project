import React from "react";

import "./App.css";

import { useSelector, useDispatch } from "react-redux";

const disparaSaga = function (dispatch) {
  dispatch({
    type: "DEFAULT_ACTION",
  });
};

function App() {
  const planet = useSelector((state) => state.planet.planetResult);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {planet ? (
        <>
          <p>{planet.name}</p>
          <p></p>
          <p></p>
          <p></p>
        </>
      ) : (
        <h1>AINDA NAO TEM PLANETA</h1>
      )}
      <button onClick={() => disparaSaga(dispatch)}> GET PLANET</button>
    </div>
  );
}

export default App;
