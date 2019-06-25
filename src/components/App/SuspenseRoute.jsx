import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import SuspenseWrapper from '../SuspenseWrapper';

const SuspenseRoute = ({ component: Component, ...rest }) => (
  <Route
    render={props => (
      <SuspenseWrapper>
        <Component {...props} />
      </SuspenseWrapper>
    )}
    {...rest}
  />
);

SuspenseRoute.propTypes = {
  component: PropTypes.objectOf(PropTypes.any).isRequired
};

export default SuspenseRoute;
