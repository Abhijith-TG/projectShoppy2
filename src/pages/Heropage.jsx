import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Heropage() {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Hero Page</h1>
        <p>Welcome to the hero page!</p>
        <button onClick={()=>navigate('/login')} >Let's Go</button>
    </div>
  )
}
