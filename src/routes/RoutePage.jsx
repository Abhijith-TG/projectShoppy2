import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Heropage from '../pages/Heropage';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import DoctorSystem from '../pages/doctorSystem';
import AddProducts from '../pages/addProducts';

export default function RoutePage() {
  return (
    <Router>
        <Routes>
            <Route element={<Heropage></Heropage>} path='/' />
            <Route element={<Signup/>} path='/signup' />
            <Route element={<Login/>} path='/login' />
            <Route element={<HomePage/>} path='/home' />
            <Route element={<DoctorSystem/>} path='/doc' />
            <Route element={<AddProducts/>} path='/add-products' />



        </Routes>
    </Router>
  )
}
