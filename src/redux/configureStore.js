import { createStore, combineReducers } from "redux";
import { Reducer } from "./Reducers";
// import {ITEMS} from '../shared/items'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            items: Reducer,
        })
    );
    return store;
};
