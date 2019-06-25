import React from 'react';
import { css } from 'emotion';
import Box from './Box';
import { CONFIG, SITES } from '../../constants';

const pageStyle = css`
  display: flex;
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
          style={{
            backgroundColor: color,
            // backgroundImage: `url(${icon})`
          }}
        >
          {icon()}
        </Box>
      );
    })}
  </div>
);

IndexPage.propTypes = {};

export default IndexPage;
