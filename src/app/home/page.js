'use client'
import axios from 'axios'
import { NextResponse } from "next/server";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import '@/app/styles/home.scss';
import { redirect } from 'next/dist/server/api-utils';
const page = () => {
  var arr = [];
  var myname = null;
  var userid;
  var obj;
  const [counter, setCounter] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(async () => {
    axios.get(`http://localhost:3000/api/cookiesapi/getcookie`).then((dat) => {
      userid = dat;
    });
    var data;
    axios.get(`http://localhost:5000/user/${userid}`).then((dat) => {
      data = dat;
    })
    myname = data?.data.name;
  }, [])
  function handleCart(id, p) {
    axios.post('http://localhost:5000/addtocart', { userid, id, counter });
    setPrice(price + p);
    arr.find(obj => obj.prodid == id).then((prod) => {
      prod.count = counter;
    }).catch((error) => {
      arr.push({ prodid: id, userId: userid, count: counter });
    })
    setCounter(0);
  }
  function increase() {
    const newcounter = counter + 1;
    console.log(newcounter);

    setCounter(newcounter);
  }
  function decrease() {
    const newcounter = counter - 1;
    setCounter(newcounter);
  }

  function handleOrder(e) {
    return redirect('/order');
    const today = new Date();

    // Get individual components
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');

    // Format the date as "YYYY-MM-DD"
    const formattedDate = `${year}-${month}-${day}`;

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the time as "HH:MM:SS"
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; 
    obj = {
      userid,
      date: formattedDate,
      time : formattedTime,
      price, 
      productsOrdered : arr,
    }

    axios.get('http://localhost:3000/api/order').then((mydata)=>{
      obj.address = mydata.data.add;
      axios.post('http://localhost:5000/place-order', obj).then(()=>{});
    });
  }
  return (
    <div>
      <nav>
        Welcome {myname || ''}
        {price > 0 ? <button onClick={handleOrder} >Place Order</button> : ''}
        <div onClick={redirect('/complaint')}>Complaint</div>
      </nav>
      <div className='products'>
        <div onClick={() => handleCart('1', 1000)}>
          <Image
            src={'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2hpcHBvdW5pY29ybjc2X3dhdGVyY29sb3JfaWxsdXN0cmF0aW9uX29mX2xhcHRvcF9pc29sYXRlX2lsbHVzdF85ODc5ZmYwOS1iMjM5LTQ2ZDItYWM2Yi1iYzcwMjI3MGJmZTQucG5n.png'}
            height={'300'}
            width={'300'}
            id='1'
          />
          <div onClick={increase}>+</div>
          <div onClick={decrease}>-</div>
        </div>
        <div onClick={() => handleCart('2', 2000)}>
          <Image
            src={'https://5.imimg.com/data5/NN/PW/XN/SELLER-8587078/11-500x500.jpg'}
            height={'300'}
            width={'300'}
            id='2'
          />
          <div onClick={increase}>+</div>
          <div onClick={decrease}>-</div>
        </div>
        <div onClick={() => handleCart('3', 3000)}>
          <Image 
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlvRH3AWNNA26nV6rSpkGegNcxQUFI4_pmQ&s'}
            height={'300'}
            width={'300'}
            id='3'

          />
          <div onClick={increase}>+</div>
          <div onClick={decrease}>-</div>
        </div>
        <div onClick={() => handleCart('4', 4000)}>
          <Image
            src={'https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/0/c/3/6-rng-854-grey-40-bruton-grey-original-imah3xh6a6ecvmng.jpeg?q=90&crop=false'}
            height={'300'}
            width={'300'}
            id='4'
          />
          <div onClick={increase}>+</div>
          <div onClick={decrease}>-</div>
        </div>
        <div onClick={() => handleCart('5', 5000)}>
          <Image
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjnk3aYL8b1AVYNnqGcxzAeFj1wjNEHmL6w&s'}
            height={'300'}
            width={'300'}
            id='5'
          />
          <div onClick={increase}>+</div>
          <div onClick={decrease}>-</div>
        </div>
      </div>

    </div>
  )
}

export default page
