// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import React from 'react';
import App from './App';
import './index.css';

import { createRoot } from 'react-dom/client'; // {{ edit_1 }}

const root = createRoot(document.getElementById('root')); // {{ edit_2 }}
root.render(<App />); // {{ edit_3 }}
