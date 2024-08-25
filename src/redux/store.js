import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import projectSaga from './saga'; 
import projectReducer from "./reducer";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer:  projectReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }) 
    .concat(sagaMiddleware), 
});

sagaMiddleware.run(projectSaga);

export default store;
