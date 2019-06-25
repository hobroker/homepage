import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';

const makeOrderClassName = (key, [[maxWidth, order]]) => css`
  &[aria-label="${key}"] {
    @media only screen and (max-width: ${maxWidth}px) {
      order: ${order};
    }
  }
`;

const boxStyle = css`
  will-change: transform;
  text-decoration: none;
  color: initial;
  transition: transform .3s ease;
  position: relative;
  order: 5;
  &:hover {
    transform: scale(1.2);
    z-index: 2;
    svg {
      transform: translate(-50%, -50%) scale(.8);
    }
  }
  @media only screen and (max-width: 2000px) {
    height: 50%;
    width: calc(100% / 3);
  }
  svg {
    will-change: transform;
    position: absolute;
    width: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform .3s ease;
    @media only screen and (max-width: 768px) {
      width: 100%;
      height: 40%;
    }
    @media only screen and (max-width: 2000px) {
      width: 100%;
      height: 40%;
    }
    path {
      fill: #ffffff;
    }
  }
`;

const Box = ({ color, children, orders, name, ...props }) => (
  <a
    {...props}
    style={{
      backgroundColor: color
    }}
    className={cx(boxStyle, orders && makeOrderClassName(name, orders))}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

Box.propTypes = {
  color: PropTypes.string,
  orders: PropTypes.arrayOf(PropTypes.any),
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired
};

Box.defaultProps = {
  color: 'magenta',
  orders: null
};

export default Box;
