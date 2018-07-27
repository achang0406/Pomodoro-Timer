import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import Reducers from '../reducers/index'
import initialstate from './initialstate';

const middleware = [thunk];

const store = createStore(
  Reducers,
  initialstate,
  applyMiddleware(...middleware)
);

export default store;