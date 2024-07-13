import React, { useEffect } from 'react'
import { useState } from 'react'
export default function Home() {
    const [products, setProducts] = useState([])
    const fetchData = async () => {
        const response = await fetch('https://react-interview.1putym.easypanel.host/api/product',{
            method: 'GET',
        })
        const data = await response.json()
        console.log(data)
    }
    useEffect(() => {
        fetchData();
    }, [])
  return (
    <div>
        <div className='card-wrapper'>

            <div className='card'>
                <h2>Product Name</h2>
                <p>Product Description</p>
                <p>Product Price</p>
            </div>

        </div>
    </div>
  )
}
