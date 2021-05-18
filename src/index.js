import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as store from './redux/store';
import App from './App';

import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store.store}>
         <PresistGare loading={null} presistor={store.persistor}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </PresistGare>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root'),
);
