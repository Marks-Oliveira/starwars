import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutFilmPage from "./pages/AboutFilmPage";
import CharactersPage from "./pages/CharactersPage";
import PlanetsPage from "./pages/PlanetsPage";
import StarshipsPage from "./pages/StarshipsPage";

const Routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {"/"}>
          <HomePage />
        </Route>
        <Route exact path = {"/film/:title/:url_film/characters"}>
          <CharactersPage />
        </Route>
        <Route exact path = {"/film/:title/:url_film/planets"}>
          <PlanetsPage />
        </Route>
        <Route exact path = {"/film/:title/:url_film/starships"}>
          <StarshipsPage />
        </Route>
        <Route exact path = {"/film/:title/:url_film"}>
          <AboutFilmPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );

};

export default Routes;
