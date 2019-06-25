import React from 'react';
import { css } from 'emotion';

const boxStyle = css`
  will-change: transform;
  flex: 1;
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
  svg {
    will-change: transform;
    position: absolute;
    width: 25%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform .3s ease;
    path {
      fill: #ffffff;
    }
  }
`;

/* eslint-disable jsx-a11y/anchor-has-content */
const Box = ({ ...props }) => (
  <a
    {...props}
    className={boxStyle}
    target="_blank"
    rel="noreferrer noopener"
  />
);

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
