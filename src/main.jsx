import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/style.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
