import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites"; // punta alla cartella "reducers", che equivale a puntare al file "index.js" contenuto
import companiesReducer from "../reducers/companies";

const bigReducer = combineReducers({
  favourites: favouritesReducer,
  companies: companiesReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
