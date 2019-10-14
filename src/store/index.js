import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';
import alerts from './alerts';

const persistConfig = {
  key: 'test_rankmyapp',
  storage,
};

const reducer = combineReducers({
  alerts,
  auth,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  process.env.NODE_ENV === 'development'
    && window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store)

export default { store, persistor };
