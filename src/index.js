import { render } from '@testing-library/react';
import React from 'react';
import App from './App';


import { BrowserRouter as Router } from 'react-router-dom';
render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));
