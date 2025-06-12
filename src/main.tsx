import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// { StrictMode }: its importing a named export from the react library.

// StrictMode: A built-in React tool that wraps your app and helps catch bugs early: Warns about deprecated APIs,  Checks for side effects in lifecycle methods, Double-invokes certain functions in development to expose issues (doesn’t affect production)

// import { createRoot } from 'react-dom/client'
// createRoot: A function from React 18+ that replaces the old ReactDOM.render().

// react-dom/client: The module responsible for interacting with the DOM (browser environment).

// createRoot is used to initialize the React app and attach it to the DOM.

// This change was introduced in React 18 for features like concurrent rendering.

// import App from './App.jsx'
// Importing the default export (export default) from the file App.jsx

// This is my top-level component, the root of the React component tree.
// Every React app starts rendering from this component.

// createRoot(document.getElementById('root')).render(
// document.getElementById('root'): Looks for the <div id="root"> in your index.html

// createRoot(...): Initializes a React root on that DOM node

// .render(...): Starts rendering the React component tree

//  Without this, your app would never appear in the browser!

  // <StrictMode>
  //   <App />
  // </StrictMode>,
//   JSX syntax: looks like HTML but is transpiled into React.createElement() calls

// <StrictMode>: A wrapper to help you find potential problems

// <App />: Your root component — React starts rendering the app from here
// the coma at the end  is part of the argument to .render(...) — it’s just ending the function call cleanly (not required, but allowed in JS).
// in typescript ! guarantees the element exists