// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { cashReducer } from './cashReducer';
// import { customerReducer } from './customerReducer';
// // import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from '@redux-devtools/extension'
// import thunk from 'redux-thunk';

// const rootReducer = combineReducers({
//     cash: cashReducer,
//     customers: customerReducer
// })

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


// SAGA

import { applyMiddleware, combineReducers, createStore } from 'redux';
import countReducer from './countReducer';
import userReducer from './userReducer';
import createSagaMiddleware from 'redux-saga'
import { countWatcher } from '../saga/countSaga';
import { rootWatcher } from '../saga';


const sagaMiddleware = createSagaMiddleware();

const rootReducerSaga = combineReducers({
    countReducer,
    userReducer
})

export const store = createStore(rootReducerSaga, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher);