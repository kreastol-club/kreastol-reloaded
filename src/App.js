import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";

import './css/App.css';
import MainPage from "./pages";
import Game from "./pages/tictactoe";
import Login from "./pages/login";
import Layout from "./Layout";


class App extends Component {
    render() {
        return (
            <>
                <Layout>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/games" element={<Game/>}/>
                        <Route path="/game" element={<Game/>}/>
                    </Routes>
                </Layout>
            </>
        );
    }
}

export default App;