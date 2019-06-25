import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const style = css`
  &, > * {
    height: 100vh;
  }
`;

const Layout = ({ children }) => (
  <div className={style}>
    { children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = {
  children: null
};

export default Layout;
