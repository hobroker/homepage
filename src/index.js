import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const render = () => {
  // eslint-disable-next-line global-require
  const App = require('./components/App').default;
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}
