import React, { lazy } from 'react';
import { Router, Switch } from 'react-router-dom';
import SuspenseRoute from './SuspenseRoute';
import history from '../../util/history';

const IndexPage = lazy(() => import('../../containers/IndexPage'));

const Routes = () => (
  <Router history={history}>
    <Switch>
      <SuspenseRoute path="/" exact component={IndexPage} />
    </Switch>
  </Router>
);

export default Routes;
