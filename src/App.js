import React, { Component } from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
    Redirect,
    Routes
} from "react-router-dom";

import './css/App.css';
import MainPage from "./pages";
import Game from "./pages/tictactoe";



class App extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </>
        );
    }
}

export default App;