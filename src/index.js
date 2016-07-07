// pick up here: https://egghead.io/lessons/javascript-redux-dispatching-actions-asynchronously-with-thunks

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './configureStore'
import Root from './components/Root'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
