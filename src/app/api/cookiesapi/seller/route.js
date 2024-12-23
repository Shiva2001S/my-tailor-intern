import mongoose from "mongoose";
import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from 'next/headers';

export async function GET(req, con){
    (await cookies()).delete('sellerId')
}
export async function POST(req, con){
    const data = await axios.post('http://localhost:5000/login', { sellerId, email, password }, { withCredentials: true });
    const sellerId = data.data.sellerId;
    cookies().set({
        name: 'sellerId',
        value : sellerId,
        httpOnly: true,
        //secure: isSecure,
        maxAge: 60 * 60 * 60,
        path: '/',
    })
    return NextResponse.json({
        success : true,
        sellerId,
    });
};

