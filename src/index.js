// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import { Provider } from 'react-redux'
// import store from './store';

// import './index.css';
// import './bootstrap.min.css'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   // ,document,getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import store from './store'
// import { Provider } from 'react-redux';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//    <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import store from './store'
// import './index.css';
// import './bootstrap.min.css'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// ############################################
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux'
// import store from './store'
// import App from './App';

// // 👇️ IMPORTANT: use correct ID of your root element
// // this is the ID of the div in your index.html file
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// // 👇️ if you use TypeScript, add non-null (!) assertion operator
// // const root = createRoot(rootElement!);

// root.render(
//   <Provider store={store}>
//     <StrictMode>
//       <App />
//     </StrictMode>,
//   </Provider>
// );
// ############################################

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import  App  from './App'
// import createStore from './createReduxStore'
import store from './store'


import reportWebVitals from './reportWebVitals';
import './index.css';
import './bootstrap.min.css'
// const store = createStore()

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

reportWebVitals();