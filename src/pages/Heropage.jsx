import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Heropage() {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Hero Page</h1>
        <p>Welcome to the hero page!</p>
        <button className='bg-blue-500 px-2 py-1 text-white rounded' onClick={()=>navigate('/login')} >Let's Go</button>
    </div>
  )
}
