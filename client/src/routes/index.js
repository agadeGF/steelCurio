import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import JodusNodus from './JodusNodus/JodusNodus';

const Routes = () => (
  <Switch>
    <Route path="/jodusNodus" component={JodusNodus} />
    <Route path="*">
      <Redirect to="/jodusNodus" />
    </Route>
  </Switch>
);

export default Routes;
