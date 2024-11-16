import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div style={{height:'270px'}} className='bg-violet-600 mt-5 text-white'>
      <div className='flex justify-between p-8  flex-wrap space-y-10 md:space-y-0'>
        {/* intro */}
        <div style={{width:'400px'}}>
        <h5 className='font-bold'> <i className="fa-solid fa-truck-fast me-2"></i>E Cart </h5>
        <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
        <p> Code licensed MIT, docs CC BY 3.0.</p>
        <p>  Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className="flex flex-col">
        <h5 className='font-bold '>Links</h5>
        <Link to={'/cart'} style={{textDecoration:'none',color:'White'}}>Cart Page</Link>
        <Link to={'/'} style={{textDecoration:'none',color:'White'}}>Home Page</Link>
        <Link to={'/:id/view'} style={{textDecoration:'none',color:'White'}}>View Page</Link>
        <Link to={'/wishlist'} style={{textDecoration:'none',color:'White'}}>Wishlist Page</Link>
        </div>
        {/* guides */}
        <div className='flex flex-col'>
          <h5 className='font-bold '>Guides</h5>
          <a style={{textDecoration:'none',color:'White'}} href="https://redux.js.org/">Redux</a>
          <a style={{textDecoration:'none',color:'White'}} href="https://react.dev/">React</a>
          <a style={{textDecoration:'none',color:'White'}} href="https://tailwindcss.com/">Tailwind</a>
        </div>
        {/* contacts */}
        <div className='flex flex-col'>
          <h5 className='font-bold '>Contact</h5>
          <div className='flex'>
            <input placeholder='Enter your Email here!!!!' type="text" className='me-2 p-1 bg-white rounded font-bold' />
            <button className='bg-violet-600 '><i className="fa-solid fa-arrow-right "></i></button>
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
      <p className='text-center mt-2 font-bold '>Copyright  &copy;  Ajmal , E-cartApp with React Redux</p>
    </div>
  </>
  )
}
export default Footer