import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import "../src/style.scss"
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";

const domRoot = document.getElementById('root');
const root = createRoot(domRoot);

const element = React.createElement("h1", {}, "I am h1");
console.log(element);

root.render(
    <>
        <BrowserRouter>
        <Provider store={appStore}>
            <App /> 
        </Provider>
        </BrowserRouter>
    </>
)