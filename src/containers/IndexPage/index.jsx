import React from 'react';
import { css } from 'emotion';
import Box from './Box';
import { CONFIG, SITES } from '../../constants';

const pageStyle = css`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 2000px) {
    flex-flow: row wrap;
  }
`;

const IndexPage = () => (
  <div className={pageStyle}>
    {Object.values(SITES).map((key) => {
      const {
        color,
        href,
        icon
      } = CONFIG[key];
      return (
        <Box
          key={key}
          href={href}
          aria-label={key}
          color={color}
        >
          {icon()}
        </Box>
      );
    })}
  </div>
);

IndexPage.propTypes = {};

export default IndexPage;
