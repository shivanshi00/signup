import React from "react";

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SignUp from "./signup";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <SignUp></SignUp>
            </div>
        </BrowserRouter>
    );
}

export default App;
