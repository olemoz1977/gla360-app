import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('[main.jsx] mount')  // <- turėtume pamatyti Console

createRoot(document.getElementById('root')).render(<App />)
