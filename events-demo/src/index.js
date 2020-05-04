import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import thunk from 'redux-thunk'
import { Provider } from "react-redux"

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { getAllProducts } from './actionCreators'
const middleware = [thunk]

if(process.env.NODE_ENV !== "production") {
  middleware.push(createLogger())
}
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
))

store.dispatch(getAllProducts())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
