import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
export default function Home() {
    const [products, setProducts] = useState([])
    const fetchData = async () => {
        const response = await axios.get('https://react-interview.1putym.easypanel.host/api/product?email=aopo56@gmail.com');
        // const data = await response.json()
        console.log(response.data)
        setProducts(response.data.data)
    }
    useEffect(() => {
        fetchData();
    }, [])
  return (
    <div>
      <div className="card-wrapper">
        {products &&
          products.map((product) => (
            <div className="card">
                <div>
                    <img src={product.img} />
                </div>
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.image}</p>
                    <p>{product.stock}</p>
                    <p>{product.discount}</p>
                    <p>{product.payable_price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
