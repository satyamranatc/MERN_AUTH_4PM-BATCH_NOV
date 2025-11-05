import React,{useState,useEffect} from 'react'
import axios from "axios";



export default function Products({user}) {
  let [products,setProducts] = useState([]);


  useEffect(()=>{
    async function getData() 
    {
      let Res = await axios.get("http://localhost:5000/api/products/list",{
        headers : {
          Authorization : `Bearer ${user.userData.token}`
        }
      });
      setProducts(Res.data);
    }
    getData();
  },[])

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Products</h1>
        <ul className="space-y-3">
          {products.map((product)=>{
            return (
              <li
                key={product._id}
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm hover:shadow-md transition"
              >
                {product.title}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
