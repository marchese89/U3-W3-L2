import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites"; // punta alla cartella "reducers", che equivale a puntare al file "index.js" contenuto
import jobsReducer from "../reducers/jobs";

const bigReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
