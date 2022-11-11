import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';


import { store } from './redux/store';
import SwitherApp from './SwitherApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store} >
    <SwitherApp />
    </Provider >
);