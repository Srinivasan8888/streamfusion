import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Dashboard from '../src/pages/Dashboard';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'/>
          <Route index element={<Login/>}/>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          
        </Routes>
      </BrowserRouter>
    
   </div>
  );
}

export default App;
