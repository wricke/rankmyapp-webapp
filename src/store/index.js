import { createStore, combineReducers } from 'redux';
import auth from './auth';

const reducer = combineReducers({
  auth,
});

export default createStore(
  reducer,
  process.env.NODE_ENV === 'development'
    && window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
);
