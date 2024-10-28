import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['SET_USER', 'SIGN_IN_FAILURE'], // Adjust based on your actions
            },
        }),
});

export default store;
