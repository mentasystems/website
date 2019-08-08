import React from "react";
import { render } from "react-dom";
import { NavBar } from "./NavBar";
import { PrincipalPart } from './components/PrincipalPart';
import { Main } from "./Main";
import { Form } from "./components/Form";
import { Footer } from "./Footer";

function App() {
    return <div>
        <NavBar />
        <PrincipalPart />
        <Main />
        <Footer />
    </div>
}

render(<App></App>, document.querySelector(`#app`))

