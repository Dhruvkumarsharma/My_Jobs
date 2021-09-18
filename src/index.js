import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import  Store  from "./config/Store";

ReactDOM.render(
  <Provider store={Store}>
    <App/>
  </Provider>
  ,document.getElementById('root'));

  