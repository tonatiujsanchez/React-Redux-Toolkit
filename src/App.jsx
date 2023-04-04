import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{ counter }</h2>
      <div className="card">
        <button onClick={() => { dispatch( increment() ) }}>
          Increment +
        </button>
        <button onClick={() => { dispatch( decrement() ) }}>
          Decrement -
        </button>
        <button onClick={() => { dispatch( incrementBy(2) ) }}>
          Increment by 2
        </button>
      </div>

    </div>
  )
}

export default App