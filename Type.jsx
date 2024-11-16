import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{height:'260px'}}className='px-4 px-auto mt-5 container w-auto  bg-violet-700'>
   <div className='flex justify-between ms-3'>
    {/* intro */}
    <div style={{width:'400px'}} className='mt-8'>
      <h5 className='font-bold text-white'><i className="fa-solid fa-truck-fast me-1"></i>Daily Cart</h5>
      <p className='text-white'>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
      <p className='text-white'> Code licensed MIT, docs CC BY 3.0.</p>
      <p className='text-white'>  Currently v5.3.3.</p>
    </div>
   {/* links */}
   <div className='flex flex-col mt-8 '>
    <h5 className='font-bold text-white'>Links</h5>
    <Link to={'/cart'} style={{textDecoration:'none',color:'White'}}>Cart Page</Link>
    <Link to={'/'} style={{textDecoration:'none',color:'White'}}>Home Page</Link>
    <Link to={'/:id/view'} style={{textDecoration:'none',color:'White'}}>View Page</Link>
    <Link to={'/wishlist'} style={{textDecoration:'none',color:'White'}}>Wishlist Page</Link>
  </div>
   {/* guides */}
   <div className='flex flex-col mt-8 '>
    <h5 className='font-bold text-white'>Guides</h5>
    <a style={{textDecoration:'none',color:'White'}} href="https://redux.js.org/">Redux</a>
    <a style={{textDecoration:'none',color:'White'}} href="https://react.dev/">React</a>
    <a style={{textDecoration:'none',color:'White'}} href="https://tailwindcss.com/">Tailwind</a>
   </div>
   {/* contact */}
   <div className='flex flex-col me-2 mt-8'>
    <h5 className='font-bold text-white'>Contact</h5>
    <div className='flex'>
      <input placeholder='Enter your Email here!!!!' type="text" className='me-2 bg-white rounded font-bold' />
      <button className='bg-violet-600 text-white'><i className="fa-solid fa-arrow-right "></i></button>
    </div>
    <div className='flex justify-between mt-3'>
    <a style={{textDecoration:'none',color:'White'}} href="https://x.com/?lang=en-in" target='_blank'><i className="fa-brands fa-twitter"></i></a>
    <a style={{textDecoration:'none',color:'White'}} href="https://x.com/?lang=en-in" target='_blank'><i className="fa-brands fa-instagram"></i></a>
    <a style={{textDecoration:'none',color:'White'}} href="https://x.com/?lang=en-in" target='_blank'><i className="fa-brands fa-facebook"></i></a>
    <a style={{textDecoration:'none',color:'White'}} href="https://x.com/?lang=en-in" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
    <a style={{textDecoration:'none',color:'White'}} href="https://x.com/?lang=en-in" target='_blank'><i className="fa-brands fa-github"></i></a>
    <a style={{textDecoration:'none',color:'White'}} href="https://x.com/?lang=en-in" target='_blank'><i className="fa-solid fa-phone"></i></a>
   </div>
   </div>
    </div>
    <p className='text-center mt-12 font-bold text-white'>Copyright  &copy;  Anjana PM , E-cartApp with React Redux</p>
    </div>
  )
}
export default Footer