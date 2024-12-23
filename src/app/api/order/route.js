import mongoose from "mongoose";
import { NextResponse } from "next/server";
import axios from "axios";
var add;
import { cookies } from 'next/headers';

export async function GET(req, con){
    return NextResponse.json({
        add,
    })
}
export async function POST(req, con){
    let payload = await req.json();
    add = payload.address;
};

