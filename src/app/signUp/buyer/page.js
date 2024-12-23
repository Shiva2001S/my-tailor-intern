'use client'
import React, { useState } from 'react'
import axios from 'axios';
import { NextResponse } from 'next/server';
import Link from 'next/link';
const page = async () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [accountStatus, setAccountStatus] = useState('');
    const [phone, setPhone] = useState('');
    async function loginHandler(e) {
        e.preventDefault();
        const data = await axios.post('http://localhost:5000/signup', { phone, email, password }, { withCredentials: true });
        if(data.data.success){
            return redirect('/home');
        }else{
            return redirect('/signUp/buyer');
        }
    }
    return (
        <div>
            <form onSubmit={loginHandler}  >
                <input  type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} value={name} />
                <input  type="text" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <input  type="text" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} value={password} />
                <input  type="text" placeholder='Enter user Id' onChange={(e) => setUserId(e.target.value)} value={userId} />
                <input  type="text" placeholder='Enter account status' onChange={(e) => setAccountStatus(e.target.value)} value={accountStatus} />
                <input  type="text" placeholder='Enter phone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                <button type='submit' >Login</button>
            </form>
        </div>
    )
}

export default page
