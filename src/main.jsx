import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App'
// import { PokemonApp } from './PokemonApp'
import { TodoApp } from './TodoApp'

import './index.css'


import { Provider } from 'react-redux'
import { store } from './store'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
)
