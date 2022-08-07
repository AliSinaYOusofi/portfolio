import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStateProvider } from './globalData/GlobalDataProvider';
import { initialState, reducer } from './globalData/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalStateProvider reducer={reducer} initialState={initialState}>
    <App />
  </GlobalStateProvider>
);
