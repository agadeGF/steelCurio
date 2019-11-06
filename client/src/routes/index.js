import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import JodusNodus from './JodusNodus/JodusNodus';
import Commissioning from './Commissioning/Commissioning';

const Routes = () => (
  <Switch>
    <Route path="/jodusNodus" component={JodusNodus} />
    <Route path="/commissioning" component={Commissioning} />
    <Route path="*">
      <Redirect to="/commissioning" />
    </Route>
  </Switch>
);

export default Routes;
