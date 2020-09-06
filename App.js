import React from 'react'
import { Provider } from 'react-redux'
import generateStore from './Redux/store'

import Supers from './screens/Superheroes'
import Home from './screens/Home'


function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <Home />
      <Supers />
    </Provider>
  )
}

export default App
