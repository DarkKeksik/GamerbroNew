import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Main, News } from "../pages/index.js";
import NewsMore from "../pages/NewsMore";


const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/news" exact>
                    <News />
                </Route>
                <Route path="/news/:id" exact>
                    <NewsMore />
                </Route>
                <Route>
                    <div>Страница не найдена :( </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routing;