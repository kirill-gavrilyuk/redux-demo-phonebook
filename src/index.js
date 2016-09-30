import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import appReducer from "./reducer";
import App from "./app";

const store = createStore(appReducer);

const RenderMe = (
    <Provider store={store}>
        <App/>
    </Provider>
);


ReactDOM.render(RenderMe, document.getElementById("container"));
