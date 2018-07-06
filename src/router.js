import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./components/storepicker/StorePicker";
import App from "./components/App";
import { NotFound } from "./components/notfound/NotFound";
import Fauna from "./components/fauna/Fauna";

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route exact path="/store/:storeid" component={App} />
      <Route exact path="/fauna" component={Fauna} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
