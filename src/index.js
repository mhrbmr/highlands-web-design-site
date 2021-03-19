import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// OLD CODE
// import 'bootstrap/dist/css/bootstrap.min.css';

// Fixes bug with mobile height and UI
// const resizer = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
// let vh = window.innerHeight * 0.01;

// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', function () {
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });
// This fixes bug by setting window.innerHeight to the height of the section1 div
// on the resizing of the window

// window.addEventListener('orientationchange', function () {
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });
// This fixes bug by setting window.innerHeight to the height of the section1 div
// on device orientation change

// ReactDOM.render(
//   <React.StrictMode>
//     <ScopedCssBaseline>
//       <App />
//     </ScopedCssBaseline>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
