import React from "react";
import { render } from "react-dom";
import "./static/styles/style.css";
import Routing from "./routing/index.jsx";

const App = () => <Routing />;
render(<App />, document.getElementById("reactApp"));