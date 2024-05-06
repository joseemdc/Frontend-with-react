import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import routes from './routes';
import LocalStorage from './practices/localStorage-custom-hook';
// import '@blueprintjs/';
import '@blueprintjs/core/lib/css/blueprint.css';
import './index.css';
// import './styles/counterApp.css';
// import TodosApp from './apps/TodosApp';
import Home from './apps/Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
