import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import myReducer from "./reducer";
import mySaga from './saga';  // Your root saga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store using configureStore
const store = configureStore({
  reducer:  myReducer,  // Use your root reducer here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false })  // Disable thunk if using redux-saga
    .concat(sagaMiddleware),  // Add saga middleware
});

// Run the saga(s)
sagaMiddleware.run(mySaga);

export default store;
