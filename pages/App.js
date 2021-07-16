import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import LoginPage from "./loginPage";
import AssetListView from "./assetListView";

export default function App() {
    return(
        <Router>
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <Route path="/asset" component={AssetListView} exact />
            </Switch>
        </Router>
    );
}