import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Provider as AppProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts-index';
import PostsNew from './components/posts-new';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App = () => (
  <Fragment>
    <AppProvider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/posts/new" component={ PostsNew } />
          <Route path="/" component={ PostsIndex } />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  </Fragment>
);

const appRoot = document.querySelector('#app-root');
render(<App />, appRoot);
