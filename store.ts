// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { formApi } from '@/services/formApi';

export const store = configureStore({
  reducer: {
    [formApi.reducerPath]: formApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
