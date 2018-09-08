import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Provider as AppProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import PostsIndex from './components/posts-index';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const appRoot = document.querySelector('#root');

render(
  <AppProvider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Fragment>
        <Route path="/" component={ PostsIndex } />
      </Fragment>
    </BrowserRouter>
  </AppProvider>, 
  appRoot,
);
