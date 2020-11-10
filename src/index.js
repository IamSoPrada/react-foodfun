import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom"
import ErrorBoundry from './ErrorBoundry';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById('root')
);