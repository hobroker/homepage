import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const boxStyle = css`
  will-change: transform;
  //flex: 1;
  text-decoration: none;
  color: initial;
  transition: transform .3s ease;
  position: relative;
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
    &[aria-label="twitter"] {
      order: 2;
    }
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

const Box = ({ color, children, ...props }) => (
  <a
    {...props}
    style={{
      backgroundColor: color,
    }}
    className={boxStyle}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

Box.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired
};

Box.defaultProps = {
  color: 'magenta'
};

export default Box;
