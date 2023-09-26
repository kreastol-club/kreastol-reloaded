import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";

import './css/App.css';
import MainPage from "./pages";
import Game from "./pages/tictactoe";
import Login from "./pages/login";


class App extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/game" element={<Game/>}/>
                    <Route path="/login" element={<Login/>}/>

                </Routes>
            </>
        );
    }
}

export default App;