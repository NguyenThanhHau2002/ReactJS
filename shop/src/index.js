import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom"
import RouerCustom from './router';
import './style/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        < RouerCustom/> 
    </BrowserRouter>
);

