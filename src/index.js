import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app'
import { GlobalProvider } from './context/context'

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
