
import { Link } from "react-router-dom";
import { useState } from "react";

export const Footer = () => {
  const [email,setEmail] = useState("") 
  const handleEmail = (emails) => {
    setEmail(emails);
  }
  return (
    <>
    <div className="bg-black h-auto pt-2 flex flex-wrap justify-between text-white border-t-2 border-gray-100">
      <div className="flex flex-col mx-10 my-5">
        <div className="text-xl md:mx-12 md:my-2 md:text-2xl text-orange-500 font-bold">About us </div>
        <p className="text-sm md:text-xl my-2 md:w-60 md:ml-12">Delicious meals delivered to your door. Order now! Eat well, effortlessly.</p>
        <div className="flex text-sm md:text-xl my-3 md:ml-10 md:my-4">
          <button className="bg-gray-800 p-2 rounded-lg mx-2">
            <a href="https://github.com/rajeshwari2538" target="_blank">
              GitHub
            </a>

          </button>
          <button className="bg-gray-800 p-2 rounded-lg mx-2">
            <a href="https://www.linkedin.com/in/rajeshwari-g-5bab95202/" target="_blank">Linkedin</a>
          </button>
        </div>
      </div>
      <div className="mx-10 text-sm md:text-xl lg:flex list-none md:mt-16">
      <Link className="px-5 hover:text-orange-500 h-10 pt-[6]
          " to="/">
            <li>Home</li>
          </Link>
          <Link className="px-5 hover:text-orange-500 h-10 pt-[6]
          " to="/about">
            <li>About us</li>
          </Link>
          <Link className="px-5 hover:text-orange-500 h-10 pt-[6]
          " to="/contact">
            <li>Contact us</li>
          </Link>
          <Link className="px-5 hover:text-orange-500 h-10 pt-[6]
          " to="/cart" >
            <li data-testid="cart">Cart</li>
          </Link>
      </div>
      <div className="block text-sm md:text-xl sm:block mr-14 mt-11 md:mr-11">
        <div className="mb-3 font-bold">Subscribe to newsletter for deal updates</div>
        <input type="email" name="email" id="email" placeholder="Enter your email"  value={email} onChange={(e) =>{
          setEmail(e.target.value)
          }}  className="p-2 bg-zinc-800  border border-gray-500 "/>
        <button className="bg-white text-black py-2 px-6 rounded-lg  ml-2 hover:bg-orange-500" onClick={() => setEmail("")}> Submit</button>
      </div>
    </div>
    <div className=" md:flex bg-zinc-900 h-15  text-zinc-500 md:justify-center max-w-full">
      <div className="flex justify-around">
        <div className="md:mr-60 border-b-2 border-b-slate-600 hover:text-white hover:border-b-white">
            <p className="mt-[5]">FastEats©️2024 </p>
        </div>
        <div className="mt-[5] border-b-2 border-b-slate-600 hover:text-white hover:border-b-white">
        rajeshwarigadagi06@gmail.com
        </div>
        </div>
       
    </div>
    </>
  );
};