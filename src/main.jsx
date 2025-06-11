import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// { StrictMode }: We're importing a named export from the react library.

// StrictMode: A built-in React tool that wraps your app and helps catch bugs early:

// Warns about deprecated APIs

// Checks for side effects in lifecycle methods

// Double-invokes certain functions in development to expose issues (doesn’t affect production)