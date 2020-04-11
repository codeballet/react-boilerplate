import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'

// Use the redux devtools browser extension if available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer
    }),
    // Use thunk middleware to enable action generator functions
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}