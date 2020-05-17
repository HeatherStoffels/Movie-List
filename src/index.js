import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import axios from "axios";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import "bootstrap/dist/css/bootstrap.min.css";

// Create the rootSaga generator function
function* rootSaga() {
  console.log("in rootSaga");
  yield takeEvery("getMovies", getMovies);
  yield takeEvery("posterClicked", posterClicked);
  yield takeEvery("description", description);
  yield takeEvery("getGenre", getGenre);
}
// function that gets the genre for details view
function* getGenre(action) {
  console.log("in getGenres function", action.payload);
  let id = action.payload;
  try {
    const response = yield axios.get(`/movies/${id}`);
    yield put({ type: "SET_GENRES", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

// function to send put request to database to update description
function* description(action) {
  console.log("in description generator function", action.payload);
  let id = action.payload.id;
  try {
    yield axios.put(`/movies/${id}`, { data: action.payload });
    const response = yield axios.get("/movies");
    yield put({ type: "SET_MOVIES", payload: response.data });

    console.log("sent data to database");
  } catch (error) {
    console.log("error in description generator function", error);
  }
}
// create function to call to server

function* getMovies(action) {
  console.log("in getmovies function");
  try {
    const response = yield axios.get("/movies");
    yield put({ type: "SET_MOVIES", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

// function for getting description and title for details page
function* posterClicked(action) {
  console.log("in posterClicked", action.payload);
  yield put({ type: "GET_INFO", payload: action.payload });
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};
// new reducer for get into
const getinfo = (state = {}, action) => {
  if (action.type === "GET_INFO") {
    return action.payload;
  } else {
    return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    getinfo,
  }),
  // Add sagaMiddleware to our store
  compose(
    applyMiddleware(sagaMiddleware, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
