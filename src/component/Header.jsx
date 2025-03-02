import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="flex justify-around shadow-lg mb-2 shadow-black">
      <div>
        <h1>Shoppy</h1>
      </div>
      <div>
        <nav className="flex flex-wrap ">
          <div type="text">
            <input
              type="text"
              placeholder="Search Here..."
              name=""
              id=""
              className="w-auto"
            />
          </div>
          <ul className="flex list-none gap-2 items-center">
            <li className="navElement nav1">Home</li>
            <li className="navElement nav2">Cart</li>
            <li className="navElement nav4">Profile</li>
            <li className="navElement nav5">Contact</li>
            <button>Logout</button>
          </ul>
        </nav>
      </div>
    </div>
  );
}
