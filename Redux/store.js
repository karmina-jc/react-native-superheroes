import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import SuperReducer from './SupersDuck';

const rootReducer = combineReducers({
    Superheroes: SuperReducer
})

export default function generateStore(){
    const store = createStore(rootReducer, applyMiddleware(thunk))
    return store
}