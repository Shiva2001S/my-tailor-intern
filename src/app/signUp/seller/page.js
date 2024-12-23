'use client'
import React, { useState } from 'react'
import axios from 'axios';
import { NextResponse } from 'next/server';
import Link from 'next/link';
import { redirect } from 'next/dist/server/api-utils';
const page = async () => {
    const [sellerId, setSellerId] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [businessType, setBusinessType] = useState('');
    async function loginHandler(e) {
        e.preventDefault();
        const data = await axios.post('http://localhost:5000/seller/signup', { phone, email, password }, { withCredentials: true });
        if(data.data.success){
            return redirect('/home');
        }else{
            return redirect('/signUp/seller');
        }
    }
    return (
        <div>
            <form onSubmit={loginHandler}  >
                <input  type="text" placeholder='Enter sellerId' onChange={(e) => setSellerId(e.target.value)} value={sellerId} />
                <input  type="text" placeholder='Enter phone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                <input  type="text" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <input  type="text" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} value={password} />
                <input  type="text" placeholder='Enter business name' onChange={(e) => setBusinessName(e.target.value)} value={businessName} />
                <input  type="text" placeholder='Enter business address' onChange={(e) => setBusinessAddress(e.target.value)} value={businessAddress} />
                <input  type="text" placeholder='Enter business type' onChange={(e) => setBusinessType(e.target.value)} value={businessType} />
                <button type='submit' >Login</button>
            </form>
        </div>
    )
}

export default page
