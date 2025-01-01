import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Heropage from './Heropage';
import Signup from './Signup';
import Login from './Login';
import HomePage from './HomePage';

export default function RoutePage() {
  return (
    <Router>
        <Routes>
            <Route element={<Heropage></Heropage>} path='/' />
            <Route element={<Signup/>} path='/signup' />
            <Route element={<Login/>} path='/login' />
            <Route element={<HomePage/>} path='/home' />

        </Routes>
    </Router>
  )
}
