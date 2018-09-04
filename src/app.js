import React from 'react';
import { render } from 'react-dom';
import { Provider as AppProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const appRoot = document.querySelector('#root');

const App = () => (
  <div className="grid-x grid-margin-x">
    <div className="cell">
      Yo
    </div>
  </div>
);

render(
  <AppProvider store={createStoreWithMiddleware(reducers)}>
    <App />
  </AppProvider>, 
  appRoot,
);
