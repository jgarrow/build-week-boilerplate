import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { bwReducer as reducer } from "./reducers/bwReducer";

import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            {/* All of your jsx and components will be inside of Provider */}
            <Router>
                <div className="App">
                    <h1>Welcome to Build Week!</h1>

                    <Route
                        exact
                        path="/"
                        component={`YOUR HOME PAGE COMPONENT HERE`}
                    />
                    <PrivateRoute
                        exact
                        path="YOUR PRIVATE ROUTE PATH HERE"
                        component={`YOUR PRIVATE ROUTE COMPONENT HERE`}
                    />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
