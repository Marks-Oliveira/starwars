import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutFilmPage from "./pages/AboutFilmPage";

const Routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {"/"}>
          <HomePage />
        </Route>
        <Route exact path = {"/film/:title/:url_film"}>
          <AboutFilmPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );

};

export default Routes;
