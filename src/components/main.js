import React from "react";

import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Contact from "./Contact";
import Projects from "./Projects";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/projects" component={Projects} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
