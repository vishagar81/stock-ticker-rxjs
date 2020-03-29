import React from 'react';

import { Provider } from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'

import * as actions from './actions'
import reducer from './reducer'

import Repositories from './Repositories'
import './App.css';

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  reducer,
  { isLoading: false, isError: false, repositories: [] },
  applyMiddleware(epicMiddleware)
);

const rootEpic = combineEpics(actions.stockDataEpic);
epicMiddleware.run(rootEpic); 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Repositories />
      </div>
    </Provider>
  );
}

export default App;
