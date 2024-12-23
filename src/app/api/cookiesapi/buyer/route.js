export async function POST(req, con){
    const data = await axios.post('http://localhost:5000/login', { sellerId, email, password }, { withCredentials: true });
    const sellerId = data.data.sellerId;
    cookies().set({
        name: 'sellerId',
        value : userId,
        httpOnly: true,
        //secure: isSecure,
        maxAge: 60 * 60 * 60,
        path: '/',
    })
    return NextResponse.json({
        success : true,
        userId,
    });
};