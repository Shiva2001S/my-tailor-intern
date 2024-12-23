'use client'
import React, { useState } from 'react'
import axios from 'axios';
import { NextResponse } from 'next/server';
import Link from 'next/link';
const page = async () => {
    // sellerId, emailOrPhone, password
    const [sellerId, setSellerId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function loginHandler(e) {
        e.preventDefault();
        const data2 = await axios.post('http://localhost:3000/api/seller/cookiesapi/seller', { sellerId, email, password });
        if(data2.data.success){
            return redirect('/home');
        }else{
            return redirect('/login/seller');
        }
    }
    
    async function Logout() {
        const data2 = await axios.get('http://localhost:3000/api/seller/cookiesapi/seller');
    }
    return (
        <div>
            <form onSubmit={loginHandler}  >
                <input  type="text" placeholder='Enter sellerId' onChange={(e) => setSellerId(e.target.value)} value={sellerId} />
                <input  type="text" placeholder='Enter email or phone number' onChange={(e) => setEmail(e.target.value)} value={email} />
                <input  type="text" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} value={password} />
                <button type='submit' >Login</button>
            </form>
            <div>
            <Link href={'/signUp'}>New Seller</Link>
            </div>
            <div>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default page
