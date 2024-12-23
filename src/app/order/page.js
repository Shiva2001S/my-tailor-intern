'use client'
import React, { useState } from 'react'

const page = async () => {
    const [address, setAdd] = useState('');
    async function handleOrder(e){
        e.preventDefault();
        const data2 = await axios.post('http://localhost:3000/api/order', { address });
    }
  return (
    <div>
      <form onSubmit={handleOrder}>
        <input type="text" placeholder='Enter the  full address of order' onChange={(e)=>setAdd(e.target.value)} value={address} />
        <button type='submit'>Place Order</button>
      </form>
    </div>
  )
}

export default page
