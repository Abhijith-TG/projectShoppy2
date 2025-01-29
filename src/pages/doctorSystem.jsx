import React from 'react'
import { useState } from 'react'

export default function DoctorSystem() {
    const [doctor, setDoctor] = useState([{
        name:"Dr. Alex",
        img:"https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
        specialised:"Anatomy",
        location:"New York",
        contact:"9876543210",
        qualification:"MBBS"
    },{
        name:"Dr. Alex",
        img:"https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
        specialised:"Anatomy",
        location:"New York",
        contact:"9876543210",
        qualification:"MBBS"
    },{
        name:"Dr. Alex",
        img:"https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
        specialised:"Anatomy",
        location:"New York",
        contact:"9876543210",
        qualification:"MBBS"
        
    },
{
    name:"Dr. Alex",
        img:"https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
        specialised:"Anatomy",
        location:"New York",
        contact:"9876543210",
        qualification:"MBBS"
}])
  return (
    <div className=''>
       <div className='flex items-center justify-between bg-blue-600 px-20 text-white py-3 shadow-xl shadow-gray-400'>
        <div>
            <h1>DoctorSync</h1>
        </div>
        <div className='flex text-lg  gap-8 '>
            <p>Home</p>
            <p>Book Appointment</p>
            <p>About</p>
            <p>Contact</p>
            <p>Logout</p>
        </div>
       </div>
        <div>
            <h2 className='text-4xl mt-4 text-center'>Our Doctors</h2>
            <div className='flex justify-center items-center gap-3'>

            {
                doctor.map((doc, index) => (
                    <div key={index} className='py-3 px-5 mt-5 gap-1 bg-gray-300 flex  items-center shadow-lg shadow-black flex-col rounded-md'>
                        <img src={doc.img} alt={doc.name} width='180'  className='bg-white rounded-lg' />
                        <div className='text-start'>
                        <h5 className='mt-2'>Name: {doc.name}</h5>
                        <p className='mb-1'>Specialised: {doc.specialised}</p>
                        <p className='mb-1' >Place: {doc.location}</p>
                        <p className='mb-1'>Contact: {doc.contact}</p>
                        <p className=''>Qualification: {doc.qualification}</p>
                        </div>
                        <button className='bg-blue-400 text-white px-2 py-1 rounded-lg'>Book Now</button>
                    </div>
                ))
                
                
            }

            </div>
        </div>
  
    </div>
  )
}
