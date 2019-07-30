import React from "react";
import { render } from "react-dom";
import { NavBar } from "./src/NavBar";
import { PrincipalPart } from './components/PrincipalPart';
import { Main } from "./src/Main";
import { Form } from "./components/Form";
import { Footer } from "./src/Footer";

function App() {
    return <div>
        <NavBar />
        <PrincipalPart />
        <Main />
        <Footer />
    </div>
}

render(<App></App>, document.querySelector(`#app`))

