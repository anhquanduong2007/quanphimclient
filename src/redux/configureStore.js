import {createStore,applyMiddleware} from 'redux';
import rootReducer from "../reducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./../sagas";
import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const configureStore = () => {
    const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)));
    sagaMiddleware.run(rootSaga);
    return store;
};
export default configureStore;