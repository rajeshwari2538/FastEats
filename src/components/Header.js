
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LOGO_URL } from '../utils/common';
export const Header = () => {

  
  const cartItems= useSelector((store)=>store.cart.items)
  return (
    <div className='sticky z-20 w-full shadow-lg bg-white top-0'>
        <div className='flex  md:justify-between justify-between py-3  items-center '>
            <div className=' ml-2 w-[100px] h-10 sm:ml-4 md:h-15  lg:ml-28 ' >
              <img className='cursor-pointer -mt-10' src={LOGO_URL} />
            </div>
            <div> 
                <ul className='flex md:flex-row px-3 mr-10'>
                    <li className='p-1 mx-5 md:px-2 md:py-4 hover:text-orange-400 cursor-pointer text-[12px] md:text-lg sm:text-sm font-primary font-bold'><Link className='link_res' to="/">Home</Link></li>
                    <li className='p-1 mx-5 md:px-2 md:py-4 hover:text-orange-400 cursor-pointer text-[12px]  md:text-lg sm:text-sm  font-primary font-bold'><Link className='link_res' to="/about">About us</Link></li>
                    <li className='p-1 mx-5 md:px-2 md:py-4 hover:text-orange-400 cursor-pointer text-[12px] md:text-lg sm:text-sm  font-primary font-bold'><Link  className='link_res' to="/contact">Contact us</Link></li>
                    <li className='p-1 mx-5 md:px-2 md:py-4 hover:text-orange-400 cursor-pointer text-[12px] md:text-lg sm:text-sm  font-primary font-bold'><Link className='link_res' to="/cart">Cart</Link>
                    {cartItems.length>0 && <div className='block sm:ml-10 bg-orange-400 text-[8px] text-white sm:px-2 px-1  rounded-[50%] sm:-mt-10 -mt-[1.6rem] sm:text-[12px]'>{cartItems.length}</div>}</li>
                
                </ul>
             </div>
            
        
    </div>
    </div>
  )
}