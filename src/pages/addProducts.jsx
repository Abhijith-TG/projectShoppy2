import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function AddProducts() {
  return (
    <div>
      <Header></Header>
      <div className="bg-blue-300">
        <div className=" sm:px-4 lg:px-24 flex flex-col justify-center items-center py-5">
          <h1 className="text-3xl text-center py-4">Add Products</h1>

          <form className="flex items-center flex-col justify-center gap-3 w-[500px]">
            <input type="text" placeholder="Product Name" />
            <input type="text" placeholder="Product Price" />
            <input type="text" placeholder="Product Image Link" />
            <select name="" className="w-full py-2" id="">
              <option value="">Select Category</option>
              <option value="">Electronics</option>
              <option value="">Clothing</option>
              <option value="">Books</option>
              <option value="">Others</option>
            </select>
            <textarea className="w-full h-36 p-1" type="text" placeholder="Product Description" />

            <button className="bg-green-400 text-white w-full p-2 hover:bg-green-300 hover:text-black rounded-lg">
              Add Product
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
