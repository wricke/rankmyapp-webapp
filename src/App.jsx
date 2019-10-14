import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@material-ui/core';
import { PersistGate } from 'redux-persist/integration/react'

import DefaultScreen from './screens';
import Store from './store';

const App = () => {
  const { store, persistor } = Store;

  return (
    <div>
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
        >
          <Box
            display="flex"
            justifyContent="center"
            height="100vh"
          >
            <DefaultScreen />
          </Box>
        </PersistGate>
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
