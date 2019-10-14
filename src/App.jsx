import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DefaultScreen from './screens';
import store from './store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <DefaultScreen />
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
