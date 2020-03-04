import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movie/:id" component={MoviePage} />
    </Switch>
  );
}
