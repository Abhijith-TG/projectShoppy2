import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useState } from "react";
import axios from "axios";

export default function AddProducts() {

  const [productData, setProductData] = useState({});
  const [products, setProducts] = useState({});

  const handleChange = (e) => {
    setProductData({...productData, [e.target.name]: e.target.value });
    
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const productId = Math.floor((Math.random()*10000)+100)
    setProducts({ ...productData,productId: productId});
    console.log(productData);
    const addproducts = await axios.post("http://localhost:5001/api/addProduct", products)
    console.log(addproducts);
    setProductData({});
    setProducts({});
    console.log(productData);
    
  };

  


  return (
    <div>
      <Header></Header>
      <div className="bg-blue-300">
        <div className=" sm:px-4 lg:px-24 flex flex-col justify-center items-center py-5">
          <h1 className="text-3xl text-center py-4">Add Products</h1>

          <form className="flex items-center flex-col justify-center gap-3 w-[500px]">
            <input type="text" placeholder="Product Name" name="productName" value={productData.value}  onChange={(e)=>handleChange(e)} />
            <input type="text" placeholder="Product Price" name="productPrice"  onChange={(e)=>handleChange(e)}/>
            <input type="text" placeholder="Product Image Link" name="productImg"  onChange={(e)=>handleChange(e)} />
            <select name="category" className="w-full py-2" id=""  onChange={(e)=>handleChange(e)}>
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
              <option value="Others">Others</option>
            </select>
            <textarea className="w-full h-36 p-1" type="text" placeholder="Product Description" name="description"  onChange={(e)=>handleChange(e)}/>

            <button onClick={(e)=>handleSubmit(e)} className="bg-green-400 text-white w-full p-2 hover:bg-green-300 hover:text-black rounded-lg">
              Add Product
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
