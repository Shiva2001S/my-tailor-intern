import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, con){
    const userId = (await cookies()).get('userId')
    return NextResponse.json({
            success : true,
            userId,
        });
}