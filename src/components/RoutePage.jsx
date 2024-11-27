import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Heropage from './Heropage';
import Signup from './Signup';

export default function RoutePage() {
  return (
    <Router>
        <Routes>
            <Route element={<Heropage></Heropage>} path='/' />
            <Route element={<Signup/>} path='/signup' />

        </Routes>
    </Router>
  )
}
