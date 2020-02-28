import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}
