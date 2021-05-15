import {
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import complexContactsReducer from './contacts/contact-reducer';

const middleware = [
   ...getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   }),
];

const store = configureStore({
   reducer: {
      phonebook: complexContactsReducer,
   },
   middleware,
   devTools: process.env.NODE_ENV === 'development',
});
export default store;
