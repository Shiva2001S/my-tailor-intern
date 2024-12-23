'use client'
import React, { useState } from 'react'
const page = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('');
    const[usertype, setUserType] = useState('');

    function handleComplaint() {
        axios.post('http://localhost:5000/post-complaints', {name, email, message, usertype}).then((data)=>{
            alert(data.data.message);
        });
    }
  return (
    <div>
      <form onSubmit={handleComplaint}  >
                <input  type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} value={name} />
                <input  type="text" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <input  type="text" placeholder='Enter message' onChange={(e) => setMessage(e.target.value)} value={message} />
                <input  type="text" placeholder='Enter userType' onChange={(e) => setUserType(e.target.value)} value={usertype} />
                <button type='submit' >Complaint</button>
            </form>
    </div>
  )
}

export default page
