import React from "react";
import { Route } from "react-router-dom";
import { Register, Success } from "./feature/form";
import Home from "./feature/home/Home";

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/form/register/" component={Register} />
    <Route path="/form/success/:id" component={Success} />
  </div>
);
