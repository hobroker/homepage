import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import SuspenseFallback from './SuspenseFallback';

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<SuspenseFallback />}>
    {children}
  </Suspense>
);

SuspenseWrapper.propTypes = {
  children: PropTypes.node
};

SuspenseWrapper.defaultProps = {
  children: null
};

export default SuspenseWrapper;
