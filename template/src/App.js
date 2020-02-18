import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { bwReducer as reducer } from "./reducers/bwReducer";

import "./App.css";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            {/* All of your jsx and components will be inside of Provider */}
            <div className="App">
                <h1>Welcome to Build Week!</h1>
            </div>
        </Provider>
    );
}

export default App;
