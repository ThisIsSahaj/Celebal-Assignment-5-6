import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazamCore';

export const store = configureStore({
  reducer: {

    // the structure inside the reducer
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },

  //  we can specify the default middleware
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),  //here we can add all middlewares we want to use in our app 
});

// these are just boiler plate codes
