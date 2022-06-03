import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import mySaga from './sagas'
import reducer from "./reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { Provider } from "react-redux";

const rootReducer = combineReducers({ reducer });
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
