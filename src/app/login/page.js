import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Link href={'/signUp/seller'}>Seller</Link>
                    or
      <Link href={'/signUp/buyer'}>Buyer</Link>
    </div>
  )
}

export default page
