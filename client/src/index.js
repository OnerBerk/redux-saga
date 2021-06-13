import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './core/reportWebVitals';
import axios from "axios";
import reducers from './reducers'
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api'

//redux sa-ga fonctionne comme un middleware que l'on lie a redux'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();
