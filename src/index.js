import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Productroute from './ProductRouts/Productroute';
import Home from './Components/Home/Home';
import Product from './Components/Proudct/Product';
import 'bootstrap/dist/css/bootstrap.min.css';

import Watchlist from './Components/Watchlist/Whislist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
  <Route path='/Login' element={<Login/>}/>
  <Route element={<Productroute/>} > 
  
  <Route path='/' element={<Home/>}/>
  <Route path='/Product' element={<Product/>}/>

  <Route path="/Whislist" component={<Watchlist/>} />



  </Route>
</Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
