// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import New from './components/new.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
      <>
    <App />
    <New />
          </>
  //</React.StrictMode>,
)
