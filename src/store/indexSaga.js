import { applyMiddleware, combineReducers, createStore } from 'redux';
import countReducer from './countReducer';
import userReducer from './userReducer';
import createSagaMiddleware from 'redux-saga'
import { countWatcher } from '../saga/countSaga';


const sagaMiddleware = createSagaMiddleware();

const rootReducerSaga = combineReducers({
    countReducer,
    userReducer
})

export const store = createStore(rootReducerSaga, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(countWatcher);