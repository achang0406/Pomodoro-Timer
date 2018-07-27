import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/configs/store';
import App from './js/App';
import "./style/index.scss"

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);