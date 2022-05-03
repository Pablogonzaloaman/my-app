import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCmls52N6kOhrmIW4k570XTlonDWlqKohY",
  authDomain: "valtactivewear-ddfd3.firebaseapp.com",
  projectId: "valtactivewear-ddfd3",
  storageBucket: "valtactivewear-ddfd3.appspot.com",
  messagingSenderId: "1077069796857",
  appId: "1:1077069796857:web:e24d46f58d67c0177f5928"
};


const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();