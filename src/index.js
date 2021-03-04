import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {reviews} from './mock/reviews';
import {createAPI} from './services/api';
import {ActionCreator} from './store/action';
import {checkAuth} from './store/api-actions';

const rootReducer = combineReducers({reducer});

const api = createAPI(
    () => store.dispatch(ActionCreator.setAuthStatusAction(false))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        reviews = {reviews}
      />
    </Provider>,
    document.getElementById(`root`)
);
