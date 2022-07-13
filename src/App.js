import React from "react";
import './App.css';
import {RoutesPage} from "./routes/Routes";
import {Header} from "./components/header/Header";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <RoutesPage/>
        </div>
    );
}

export default App;
